const timeline = [
  {
    role: 'Programmer — Freelance',
    company: 'Independent / Client Projects',
    period: '2025 – Present',
    achievements: [
      'Developed and enhanced backend APIs for payment-related systems using C#.NET / ASP.NET Core',
      'Integrated payment gateways and third-party services based on client requirements',
      'Designed and managed databases using PostgreSQL and MySQL',
      'Implemented unit tests with xUnit to ensure API correctness and business logic validation',
      'Managed source code with GitHub and supported deployments through CI/CD pipelines',
      'Focused on security, accuracy, and stability for financial transaction systems',
    ],
  },
  {
    role: 'Programmer',
    company: 'Appswin · Khon Kaen',
    period: '2022 – 2024',
    achievements: [
      'Developed and maintained backend APIs for payment systems using C#.NET / ASP.NET Core',
      'Integrated payment services with external payment providers',
      'Designed and managed databases using PostgreSQL and MySQL',
      'Implemented unit tests using xUnit to validate business logic and API reliability',
      'Worked with Azure DevOps CI/CD pipelines for deployment and automation',
      'Improved API performance, stability, and security',
    ],
  },
]

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6 bg-slate-800/30">
      <div className="max-w-3xl mx-auto">
        <p className="text-sky-400 text-sm font-semibold tracking-widest uppercase mb-3">Experience</p>
        <h2 className="text-3xl font-bold text-slate-100 mb-12">Work History</h2>

        <div className="relative">
          <div className="absolute left-0 top-0 bottom-0 w-px bg-slate-700" />

          <div className="space-y-10">
            {timeline.map((exp, i) => (
              <div key={i} className="pl-8 relative">
                <div className="absolute left-0 top-1.5 w-2 h-2 rounded-full bg-sky-400 -translate-x-[3.5px]" />
                <p className="text-slate-500 text-xs mb-1">{exp.period}</p>
                <h3 className="text-slate-100 font-semibold text-lg">{exp.role}</h3>
                <p className="text-sky-400 text-sm mb-4">{exp.company}</p>
                <ul className="space-y-2">
                  {exp.achievements.map((a, j) => (
                    <li key={j} className="flex items-start gap-2 text-slate-400 text-sm">
                      <span className="text-sky-400 mt-0.5 flex-shrink-0">▸</span>
                      {a}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
