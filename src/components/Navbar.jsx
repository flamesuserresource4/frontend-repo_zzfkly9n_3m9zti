import { useState } from 'react'
import { Menu, X } from 'lucide-react'

const NavLink = ({ href, children, onClick }) => (
  <a
    href={href}
    onClick={onClick}
    className="text-sm md:text-base text-slate-700 hover:text-slate-900 transition-colors"
  >
    {children}
  </a>
)

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const close = () => setOpen(false)

  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/50 border-b border-white/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#home" className="font-semibold text-slate-900 text-lg tracking-tight">PD Intern</a>

        <nav className="hidden md:flex items-center gap-8">
          <NavLink href="#work">Work</NavLink>
          <NavLink href="#about">About</NavLink>
          <NavLink href="#contact">Contact</NavLink>
          <a href="/resume.pdf" className="px-3 py-1.5 rounded-md bg-slate-900 text-white text-sm hover:bg-slate-800 transition-colors">Resume</a>
        </nav>

        <button
          className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-md border border-slate-200 text-slate-700"
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-white/30 bg-white/70 backdrop-blur">
          <div className="px-4 py-4 flex flex-col gap-4">
            <NavLink href="#work" onClick={close}>Work</NavLink>
            <NavLink href="#about" onClick={close}>About</NavLink>
            <NavLink href="#contact" onClick={close}>Contact</NavLink>
            <a onClick={close} href="/resume.pdf" className="px-3 py-2 rounded-md bg-slate-900 text-white text-sm w-fit">Resume</a>
          </div>
        </div>
      )}
    </header>
  )
}
