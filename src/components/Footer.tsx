export default function Footer() {
  return (
    <footer className="border-t border-slate-700 py-8 px-6">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <span className="text-slate-500 text-sm">
          © {new Date().getFullYear()} Tawan Jeeno
        </span>
        <div className="flex items-center gap-6">
          <a
            href="https://github.com/tawangno"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-500 hover:text-sky-400 text-sm transition-colors"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/tawan-hindam-8a5263394/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-500 hover:text-sky-400 text-sm transition-colors"
          >
            LinkedIn
          </a>
          <a
            href="mailto:tawan__gno@hotmail.com"
            className="text-slate-500 hover:text-sky-400 text-sm transition-colors"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  )
}
