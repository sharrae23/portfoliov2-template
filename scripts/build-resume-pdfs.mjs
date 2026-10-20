/**
 * Generate simple, selectable-text, ATS-friendly PDF resumes from the same data
 * shown on /resumes. No external PDF service or runtime dependency required.
 */
import fs from 'node:fs'
import path from 'node:path'
import vm from 'node:vm'

const source = fs.readFileSync('src/content/resumes.ts', 'utf8')
const match = source.match(/export const resumes: ResumeData\[\] = (\[[\s\S]*?\])\s*\n\nexport const resumeCredentials = (\[[\s\S]*?\])\s*$/)
if (!match) throw new Error('Unable to locate resume data in src/content/resumes.ts')
const resumes = vm.runInNewContext('(' + match[1] + ')', Object.create(null), { timeout: 1000 })
const credentials = vm.runInNewContext('(' + match[2] + ')', Object.create(null), { timeout: 1000 })

// Built-in Times/Helvetica PDF fonts support searchable/selectable text without bitmaps.
const PW = 612
const PH = 792
const ML = 48
const MR = 48
const MT = 48
const BOTTOM = 53
const CONTENT_W = PW - ML - MR

function clean(text) {
  return String(text)
    .replace(/[\u2012-\u2015]/g, '-')
    .replace(/[\u2018\u2019]/g, "'")
    .replace(/[\u201c\u201d]/g, '"')
    .replace(/\u2026/g, '...')
    .replace(/\u00b7/g, '|')
    .replace(/[^\x20-\x7e]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()
}
function escapePdf(value) {
  return clean(value).replace(/\\/g, '\\\\').replace(/\(/g, '\\(').replace(/\)/g, '\\)')
}
function wrap(text, size, width) {
  const words = clean(text).split(' ')
  const lines = []
  let line = ''
  // Conservative text measurement for Helvetica keeps right edges inside margins.
  const maxChars = Math.floor(width / (size * 0.52))
  for (const word of words) {
    const next = line ? line + ' ' + word : word
    if (next.length > maxChars && line) {
      lines.push(line)
      line = word
    } else {
      line = next
    }
  }
  if (line) lines.push(line)
  return lines
}
function compilePdf(pages, role) {
  const objects = [null]
  const add = (value) => { objects.push(value); return objects.length - 1 }
  const catalogId = add('')
  const pagesId = add('')
  const normalId = add('<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica /Encoding /WinAnsiEncoding >>')
  const boldId = add('<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica-Bold /Encoding /WinAnsiEncoding >>')
  const refs = []
  pages.forEach((lines, index) => {
    lines.push('0.45 0.42 0.50 rg')
    lines.push('BT /F1 8 Tf 1 0 0 1 48 30 Tm (Mary Sharra | ' + escapePdf(role) + ') Tj ET')
    lines.push('BT /F1 8 Tf 1 0 0 1 530 30 Tm (' + (index + 1) + ' / ' + pages.length + ') Tj ET')
    const stream = lines.join('\n') + '\n'
    const streamId = add('<< /Length ' + Buffer.byteLength(stream, 'ascii') + ' >>\nstream\n' + stream + 'endstream')
    const pageId = add('<< /Type /Page /Parent ' + pagesId + ' 0 R /MediaBox [0 0 ' + PW + ' ' + PH + '] /Resources << /Font << /F1 ' + normalId + ' 0 R /F2 ' + boldId + ' 0 R >> >> /Contents ' + streamId + ' 0 R >>')
    refs.push(pageId + ' 0 R')
  })
  objects[catalogId] = '<< /Type /Catalog /Pages ' + pagesId + ' 0 R >>'
  objects[pagesId] = '<< /Type /Pages /Kids [' + refs.join(' ') + '] /Count ' + refs.length + ' >>'
  let output = '%PDF-1.4\n'
  const offsets = [0]
  for (let n = 1; n < objects.length; n++) {
    offsets.push(Buffer.byteLength(output, 'ascii'))
    output += n + ' 0 obj\n' + objects[n] + '\nendobj\n'
  }
  const xrefPos = Buffer.byteLength(output, 'ascii')
  output += 'xref\n0 ' + objects.length + '\n0000000000 65535 f \n'
  for (let n = 1; n < objects.length; n++) {
    output += String(offsets[n]).padStart(10, '0') + ' 00000 n \n'
  }
  output += 'trailer\n<< /Size ' + objects.length + ' /Root ' + catalogId + ' 0 R >>\nstartxref\n' + xrefPos + '\n%%EOF\n'
  return Buffer.from(output, 'ascii')
}

function build(resume) {
  const pages = []
  let lines = []
  let y = PH - MT
  function newPage() {
    if (lines.length) pages.push(lines)
    lines = []
    y = PH - MT
  }
  function ensure(height) {
    if (y - height < BOTTOM) newPage()
  }
  function draw(text, font, size, opts = {}) {
    const x = ML + (opts.indent ?? 0)
    const width = CONTENT_W - (opts.indent ?? 0)
    const lineHeight = opts.lineHeight ?? size * 1.37
    const textLines = wrap(text, size, width)
    for (const row of textLines) {
      ensure(lineHeight + 2)
      const color = opts.muted ? '0.34 0.31 0.37 rg' : '0.17 0.15 0.21 rg'
      lines.push(color + '\nBT /' + font + ' ' + size + ' Tf 1 0 0 1 ' + x + ' ' + y.toFixed(2) + ' Tm (' + escapePdf(row) + ') Tj ET')
      y -= lineHeight
    }
    y -= opts.after ?? 0
  }
  function section(label) {
    ensure(38)
    y -= 12
    lines.push('0.75 0.72 0.78 RG 0.6 w ' + ML + ' ' + (y + 8).toFixed(2) + ' m ' + (PW - MR) + ' ' + (y + 8).toFixed(2) + ' l S')
    draw(label.toUpperCase(), 'F2', 10.5, { after: 5 })
  }
  function bullet(text) {
    ensure(14)
    draw('- ' + text, 'F1', 8.7, { indent: 12, lineHeight: 11.8, after: 2 })
  }

  draw('MARY SHARRA', 'F2', 19, { after: 5 })
  draw(resume.title, 'F2', 10.5, { after: 4 })
  draw('Philippines (UTC+8) | bmarysharra@gmail.com | marysharra-portfolio.netlify.app', 'F1', 8.7, { muted: true, after: 5 })
  draw('LinkedIn: linkedin.com/in/sharrabrila/ | Upwork: upwork.com/freelancers/~018cf61028a8af7c20', 'F1', 8.4, { muted: true, after: 3 })

  section('Professional Summary')
  draw(resume.summary, 'F1', 9.1, { lineHeight: 12.5, after: 3 })

  section('Core Skills')
  for (const group of resume.skillGroups) {
    draw(group.label + ': ' + group.skills.join(' | '), 'F1', 8.7, { lineHeight: 11.8, after: 3 })
  }

  section('Professional Experience')
  for (const experience of resume.experience) {
    ensure(52)
    draw(experience.title, 'F2', 9.9, { after: 2 })
    draw(experience.company + ' | ' + experience.year, 'F1', 8.6, { muted: true, after: 3 })
    for (const item of experience.bullets) bullet(item)
    y -= 7
  }

  if (resume.selectedExperience?.length) {
    section('Selected Documentation Experience')
    for (const group of resume.selectedExperience) {
      draw(group.label + ': ' + group.items.join(' | '), 'F1', 8.7, { lineHeight: 11.8, after: 3 })
    }
  }
  section('Tools & Systems')
  for (const group of resume.tools) {
    draw(group.label + ': ' + group.items.join(' | '), 'F1', 8.7, { lineHeight: 11.8, after: 3 })
  }
  section('Education & Credentials')
  for (const item of credentials) bullet(item)
  pages.push(lines)
  return compilePdf(pages, resume.title)
}

const destinations = {
  'operations-va': 'Mary-Sharra-Virtual-Assistant-Resume.pdf',
  'technical-writer': 'Mary-Sharra-Technical-Writer-Resume.pdf',
}
const dir = path.resolve('public/resumes')
fs.mkdirSync(dir, { recursive: true })
for (const resume of resumes) {
  const name = destinations[resume.id]
  if (!name) throw new Error('Unknown resume ID: ' + resume.id)
  const filepath = path.join(dir, name)
  fs.writeFileSync(filepath, build(resume))
  console.log('Generated', filepath, fs.statSync(filepath).size, 'bytes')
}
