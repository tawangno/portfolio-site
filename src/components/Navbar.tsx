import { useState, useEffect } from 'react'

const links = [
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-slate-900/90 backdrop-blur-sm border-b border-slate-700' : ''
      }`}
    >
      <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#" className="text-sky-400 font-bold text-xl tracking-tight">TJ</a>

        <ul className="hidden md:flex items-center gap-8">
          {links.map(link => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-slate-400 hover:text-slate-200 text-sm transition-colors"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="mailto:tawan__gno@hotmail.com"
          className="hidden md:inline-block text-sm px-4 py-2 border border-sky-400 text-sky-400 rounded-md hover:bg-sky-400 hover:text-slate-900 transition-all"
        >
          Hire Me
        </a>

        <button
          className="md:hidden text-slate-400 hover:text-slate-200"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {menuOpen
              ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            }
          </svg>
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-slate-800 border-t border-slate-700 px-6 py-4 flex flex-col gap-4">
          {links.map(link => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-slate-400 hover:text-slate-200 text-sm transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="mailto:tawan__gno@hotmail.com"
            className="text-sm px-4 py-2 border border-sky-400 text-sky-400 rounded-md hover:bg-sky-400 hover:text-slate-900 transition-all text-center"
          >
            Hire Me
          </a>
        </div>
      )}
    </nav>
  )
}
