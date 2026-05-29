export default function About() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-3xl mx-auto">
        <p className="text-sky-400 text-sm font-semibold tracking-widest uppercase mb-3">About</p>
        <h2 className="text-3xl font-bold text-slate-100 mb-8">Who I Am</h2>
        <div className="space-y-4 text-slate-400 text-base leading-relaxed">
          <p>
            I'm a backend developer focused on building systems that work correctly under pressure —
            not just in development. I care deeply about financial data integrity, concurrency safety,
            and shipping things that hold up in production.
          </p>
          <p>
            My recent project, WalletApp, solves real problems: preventing double-charges with
            idempotency keys, avoiding race conditions with optimistic locking, and maintaining an
            immutable audit trail with a double-entry ledger.
          </p>
          <p>
            I believe the mark of a good system isn't how it behaves under normal conditions —
            it's how it recovers when things go wrong. That mindset drives every architecture
            decision I make.
          </p>
        </div>
      </div>
    </section>
  )
}
