const contacts = [
  {
    label: 'Send Email',
    href: 'mailto:tawan__gno@hotmail.com',
    primary: true,
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/tawan-hindam-8a5263394/',
    primary: false,
  },
  {
    label: 'GitHub',
    href: 'https://github.com/tawangno',
    primary: false,
  },
]

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-2xl mx-auto text-center">
        <p className="text-sky-400 text-sm font-semibold tracking-widest uppercase mb-3">Contact</p>
        <h2 className="text-3xl font-bold text-slate-100 mb-4">Get In Touch</h2>
        <p className="text-slate-400 mb-10 leading-relaxed">
          Open to Backend and Full-stack Developer roles. Feel free to reach out —
          I'm always happy to chat about engineering challenges.
        </p>
        <div className="flex items-center justify-center gap-4 flex-wrap">
          {contacts.map(c => (
            c.primary ? (
              <a
                key={c.label}
                href={c.href}
                className="px-6 py-3 bg-sky-400 text-slate-900 font-semibold rounded-lg hover:bg-sky-300 transition-colors"
              >
                {c.label}
              </a>
            ) : (
              <a
                key={c.label}
                href={c.href}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 border border-slate-700 text-slate-200 rounded-lg hover:border-sky-400 hover:text-sky-400 transition-all"
              >
                {c.label}
              </a>
            )
          ))}
        </div>
      </div>
    </section>
  )
}
