const groups = [
  {
    title: 'Backend',
    skills: ['ASP.NET Core', 'C#', 'Entity Framework Core', 'RESTful API', 'Background Services'],
  },
  {
    title: 'Database',
    skills: ['PostgreSQL', 'Redis', 'EF Migrations', 'Optimistic Locking', 'Transactions'],
  },
  {
    title: 'Frontend',
    skills: ['React', 'TypeScript', 'Tailwind CSS', 'TanStack Query', 'Axios'],
  },
  {
    title: 'Infrastructure',
    skills: ['Docker', 'GitHub Actions', 'Render', 'Vercel', 'CI/CD Pipelines'],
  },
  {
    title: 'Testing',
    skills: ['xUnit', 'Testcontainers', 'Integration Testing', 'Concurrency Tests'],
  },
  {
    title: 'Concepts',
    skills: ['Idempotency Keys', 'Double-entry Ledger', 'JWT Auth', 'Concurrency Control', 'Redis Blacklist'],
  },
]

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <p className="text-sky-400 text-sm font-semibold tracking-widest uppercase mb-3">Skills</p>
        <h2 className="text-3xl font-bold text-slate-100 mb-12">Tech Stack</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {groups.map(group => (
            <div key={group.title} className="bg-slate-800 border border-slate-700 rounded-xl p-6">
              <h3 className="text-sky-400 text-xs font-semibold uppercase tracking-wider mb-4">
                {group.title}
              </h3>
              <ul className="space-y-2">
                {group.skills.map(skill => (
                  <li key={skill} className="text-slate-400 text-sm flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-sky-400 flex-shrink-0" />
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
