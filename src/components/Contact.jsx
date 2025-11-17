import { useState } from 'react'

export default function Contact() {
  const [status, setStatus] = useState(null)

  const submit = async (e) => {
    e.preventDefault()
    const form = new FormData(e.currentTarget)
    const payload = Object.fromEntries(form.entries())

    try {
      const base = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
      const res = await fetch(`${base}/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })
      if (res.ok) {
        setStatus('Thanks! I will get back to you soon.')
        e.currentTarget.reset()
      } else {
        setStatus('Something went wrong. Please try again later.')
      }
    } catch (err) {
      setStatus('Unable to send right now. Please try email directly.')
    }
  }

  return (
    <section id="contact" className="py-20 md:py-28 bg-slate-50">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl md:text-4xl font-extrabold tracking-tight text-slate-900 mb-6">Let’s collaborate</h2>
        <form onSubmit={submit} className="grid gap-4 bg-white p-6 rounded-xl border border-slate-200">
          <div className="grid sm:grid-cols-2 gap-4">
            <input name="name" required placeholder="Name" className="w-full px-3 py-2 rounded-md border border-slate-300 focus:outline-none focus:ring-2 focus:ring-slate-300" />
            <input name="email" type="email" required placeholder="Email" className="w-full px-3 py-2 rounded-md border border-slate-300 focus:outline-none focus:ring-2 focus:ring-slate-300" />
          </div>
          <input name="subject" placeholder="Subject" className="w-full px-3 py-2 rounded-md border border-slate-300 focus:outline-none focus:ring-2 focus:ring-slate-300" />
          <textarea name="message" required rows="5" placeholder="Tell me about the project" className="w-full px-3 py-2 rounded-md border border-slate-300 focus:outline-none focus:ring-2 focus:ring-slate-300" />
          <button className="px-4 py-2 rounded-md bg-slate-900 text-white text-sm hover:bg-slate-800 transition-colors w-fit">Send message</button>
          {status && <p className="text-sm text-slate-700">{status}</p>}
        </form>
      </div>
    </section>
  )
}
