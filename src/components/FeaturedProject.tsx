const features = [
  'Double-charge prevention via idempotency keys',
  'Race condition safety with optimistic locking (RowVersion)',
  'Immutable audit trail with double-entry ledger',
  'Immediate token revocation via Redis JWT blacklist',
  'Full CI/CD pipeline with GitHub Actions + Testcontainers',
]

const tags = [
  'ASP.NET Core 10', 'React 19', 'PostgreSQL', 'Redis',
  'Docker', 'GitHub Actions', 'Testcontainers', 'TypeScript',
]

export default function FeaturedProject() {
  return (
    <section id="projects" className="py-24 px-6 bg-slate-800/30">
      <div className="max-w-4xl mx-auto">
        <p className="text-sky-400 text-sm font-semibold tracking-widest uppercase mb-3">
          Featured Project
        </p>
        <h2 className="text-3xl font-bold text-slate-100 mb-12">What I've Built</h2>

        <div className="border border-slate-700 rounded-xl p-8 bg-slate-800">
          <p className="text-sky-400 text-xs font-semibold tracking-widest uppercase mb-3">
            Production-Grade System
          </p>
          <h3 className="text-2xl font-bold text-slate-100 mb-2">
            WalletApp — Digital Wallet System
          </h3>
          <p className="text-slate-400 mb-6 leading-relaxed">
            A production-grade financial system demonstrating real-world engineering solutions
            to problems that CRUD apps never face. Full-stack with live demo, Swagger UI, and
            Architecture Decision Records.
          </p>

          <ul className="space-y-2 mb-6">
            {features.map((f, i) => (
              <li key={i} className="flex items-start gap-2 text-slate-400 text-sm">
                <span className="text-sky-400 mt-0.5 flex-shrink-0">▸</span>
                {f}
              </li>
            ))}
          </ul>

          <div className="flex flex-wrap gap-2 mb-8">
            {tags.map(tag => (
              <span
                key={tag}
                className="text-xs font-medium px-3 py-1 rounded-full border border-slate-700 text-slate-400 bg-slate-900"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="flex flex-wrap gap-3">
            <a
              href="https://wallet-app.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 bg-sky-400 text-slate-900 text-sm font-semibold rounded-lg hover:bg-sky-300 transition-colors"
            >
              Live Demo
            </a>
            <a
              href="https://wallet-api.onrender.com/swagger"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 border border-slate-700 text-slate-200 text-sm rounded-lg hover:border-sky-400 hover:text-sky-400 transition-all"
            >
              Swagger API
            </a>
            <a
              href="https://github.com/tawangno/WalletApp"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 border border-slate-700 text-slate-200 text-sm rounded-lg hover:border-sky-400 hover:text-sky-400 transition-all"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
