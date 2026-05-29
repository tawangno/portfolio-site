export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-6 pt-20">
      <div className="max-w-3xl text-center">
        <p className="text-sky-400 text-sm font-semibold tracking-widest uppercase mb-4">
          Backend Developer
        </p>
        <h1 className="text-5xl md:text-7xl font-bold text-slate-100 mb-6 tracking-tight leading-tight">
          Tawan Jeeno
        </h1>
        <p className="text-slate-400 text-lg md:text-xl mb-6 font-mono">
          ASP.NET Core · C# · PostgreSQL · Redis · React
        </p>
        <p className="text-slate-400 text-base md:text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
          I build production-ready systems that handle money, concurrency, and real-world failures —
          not just CRUD. Currently open to Backend and Full-stack Developer roles.
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
        </div>
      </div>
    </section>
  )
}
