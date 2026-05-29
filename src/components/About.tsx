export default function About() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-3xl mx-auto">
        <p className="text-sky-400 text-sm font-semibold tracking-widest uppercase mb-3">About</p>
        <h2 className="text-3xl font-bold text-slate-100 mb-8">Who I Am</h2>
        <div className="space-y-4 text-slate-400 text-base leading-relaxed">
          <p>
            I'm a backend developer with over 2 years of professional experience building
            payment systems and RESTful APIs in C#.NET and ASP.NET Core. I've worked in
            production environments where financial accuracy, API stability, and security
            are non-negotiable.
          </p>
          <p>
            At Appswin, I developed and maintained backend APIs for payment systems —
            integrating external payment providers, managing PostgreSQL and MySQL databases,
            and working with Azure DevOps CI/CD pipelines. I continued this in freelance work,
            taking on payment-related systems and client integrations end-to-end.
          </p>
          <p>
            My portfolio project WalletApp pushes further: idempotency keys to prevent
            double-charges, optimistic locking for race condition safety, and an immutable
            double-entry ledger — the kind of problems that matter when real money is involved.
          </p>
          <p>
            Currently open to backend and full-stack roles — especially remote and international
            opportunities where I can contribute to scalable, production-grade systems.
          </p>
        </div>
      </div>
    </section>
  )
}
