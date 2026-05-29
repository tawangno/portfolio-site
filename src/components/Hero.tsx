export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-6 pt-20">
      <div className="max-w-3xl text-center">
        <p className="text-sky-400 text-sm font-semibold tracking-widest uppercase mb-4">
          Backend Developer · 3+ Years Experience
        </p>
        <h1 className="text-5xl md:text-7xl font-bold text-slate-100 mb-6 tracking-tight leading-tight">
          Tawan Hindam
        </h1>
        <p className="text-slate-400 text-lg md:text-xl mb-6 font-mono">
          C# · ASP.NET Core · PostgreSQL · Redis · Azure
        </p>
        <p className="text-slate-400 text-base md:text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
          I build production-grade payment systems and APIs that handle real money —
          with a focus on reliability, security, and financial accuracy.
          Currently open to remote and international roles.
        </p>
        <div className="flex items-center justify-center gap-4 flex-wrap">
          <a
            href="#projects"
            className="px-6 py-3 bg-sky-400 text-slate-900 font-semibold rounded-lg hover:bg-sky-300 transition-colors"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="px-6 py-3 border border-slate-700 text-slate-200 rounded-lg hover:border-sky-400 hover:text-sky-400 transition-all"
          >
            Contact Me
          </a>
          <a
            href="https://github.com/tawangno"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 border border-slate-700 text-slate-200 rounded-lg hover:border-sky-400 hover:text-sky-400 transition-all"
          >
            GitHub
          </a>
        </div>
      </div>
    </section>
  )
}
