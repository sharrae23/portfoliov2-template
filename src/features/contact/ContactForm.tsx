import { useEffect, useRef, useState, type FormEvent } from 'react'
import { CheckCircle, Copy, PaperPlaneTilt, WarningCircle } from '@phosphor-icons/react'
import { contactForm as f } from '@/content/contact'
import { site } from '@/content/site'
import { contactText, isCompleteMessage, missingFields, type ContactMessage } from '@/lib/mail'

type Status = 'idle' | 'error' | 'submitting' | 'submit-error' | 'sent'

const FIELDS = ['firstName', 'lastName', 'email', 'message'] as const

/** Netlify Forms submission with accessible errors, spam honeypot, and an email fallback. */
export function ContactForm({ nested = false }: { nested?: boolean }) {
  const Done = nested ? 'h4' : 'h3'
  const [status, setStatus] = useState<Status>('idle')
  const [invalid, setInvalid] = useState<string[]>([])
  const [sent, setSent] = useState<ContactMessage | null>(null)
  const [copied, setCopied] = useState(false)
  const formRef = useRef<HTMLFormElement>(null)
  const sendRef = useRef<HTMLButtonElement>(null)
  const doneRef = useRef<HTMLHeadingElement>(null)
  const refocus = useRef<'done' | 'form' | null>(null)

  // Focus follows the panel that just appeared (sent state, or the form again after "Write another").
  useEffect(() => {
    if (refocus.current === 'done') doneRef.current?.focus()
    if (refocus.current === 'form') formRef.current?.querySelector('input')?.focus()
    refocus.current = null
  }, [status])

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (status === 'submitting') return

    const data = new FormData(event.currentTarget)
    const message = Object.fromEntries(FIELDS.map((k) => [k, String(data.get(k) ?? '')])) as ContactMessage
    if (!isCompleteMessage(message)) {
      const missing = missingFields(message)
      setInvalid(missing)
      setStatus('error')
      formRef.current?.querySelector<HTMLElement>(`[name="${missing[0]}"]`)?.focus()
      const send = sendRef.current
      if (send) {
        send.classList.remove('is-shaking')
        void send.offsetWidth
        send.classList.add('is-shaking')
      }
      return
    }

    setInvalid([])
    setStatus('submitting')
    try {
      const payload = new URLSearchParams()
      payload.set('form-name', 'portfolio-contact')
      for (const field of FIELDS) payload.set(field, message[field])
      payload.set('bot-field', String(data.get('bot-field') ?? ''))

      const response = await fetch('/__forms.html', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: payload.toString(),
      })
      if (!response.ok) throw new Error('Form submission failed')

      setSent(message)
      setCopied(false)
      refocus.current = 'done'
      setStatus('sent')
    } catch {
      setStatus('submit-error')
    }
  }

  const copyMessage = async () => {
    if (!sent) return
    try {
      await navigator.clipboard.writeText(contactText(sent))
      setCopied(true)
    } catch {
      setCopied(false)
    }
  }

  if (status === 'sent') {
    return (
      <div className="ct-done" role="status">
        <CheckCircle size={30} weight="fill" aria-hidden />
        <Done ref={doneRef} tabIndex={-1}>
          {f.sentTitle}
        </Done>
        <p>{f.sentBody}</p>
        <p className="ct-done__fallback">
          {f.noMailApp}{' '}
          <a href={`mailto:${site.email}`}>{site.email}</a>
        </p>
        <div className="ct-done__actions">
          <button type="button" className="pg-btn" onClick={copyMessage}>
            <Copy size={16} aria-hidden />
            {copied ? f.copied : f.copy}
          </button>
          <button
            type="button"
            className="pg-btn"
            onClick={() => {
              refocus.current = 'form'
              setStatus('idle')
            }}
          >
            {f.again}
          </button>
        </div>
      </div>
    )
  }

  const field = (name: (typeof FIELDS)[number]) => ({ name, 'aria-invalid': invalid.includes(name) || undefined, 'aria-describedby': invalid.includes(name) ? 'ct-err' : undefined })

  return (
    <form ref={formRef} name="portfolio-contact" method="POST" action="/__forms.html" className="ct-form" noValidate onSubmit={onSubmit}>
      <input type="hidden" name="form-name" value="portfolio-contact" />
      <p className="ct-honeypot" aria-hidden="true">
        <label>Leave this field blank <input type="text" name="bot-field" tabIndex={-1} autoComplete="off" /></label>
      </p>
      <div className="ct-row2">
        <label className="ct-field">
          <span>{f.first}</span>
          <input type="text" {...field('firstName')} autoComplete="given-name" required maxLength={80} placeholder={f.phFirst} />
        </label>
        <label className="ct-field">
          <span>{f.last}</span>
          <input type="text" {...field('lastName')} autoComplete="family-name" required maxLength={80} placeholder={f.phLast} />
        </label>
      </div>
      <label className="ct-field">
        <span>{f.email}</span>
        <input type="email" {...field('email')} autoComplete="email" required maxLength={254} placeholder={f.phEmail} />
      </label>
      <label className="ct-field">
        <span>{f.message}</span>
        <textarea {...field('message')} required maxLength={1500} placeholder={f.phMessage} />
      </label>
      <div className="ct-actions">
        <button ref={sendRef} type="submit" className="ct-send" disabled={status === 'submitting'} onAnimationEnd={(e) => e.currentTarget.classList.remove('is-shaking')}>
          <PaperPlaneTilt size={16} weight="fill" aria-hidden />
          {status === 'submitting' ? f.sending : f.send}
        </button>
        {status === 'error' || status === 'submit-error' ? (
          <span id="ct-err" className="ct-err" role="alert">
            <WarningCircle size={16} weight="fill" aria-hidden />
            {status === 'error' ? f.error : f.failed}
          </span>
        ) : (
          <span className="ct-hint">{f.hint}</span>
        )}
      </div>
    </form>
  )
}
