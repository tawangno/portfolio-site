// TODO: Replace with your actual work experience
const experiences = [
  {
    role: 'Backend Developer',
    company: 'Your Company Name',
    period: 'Jan 2024 – Present',
    achievements: [
      'Reduced API response time by X% by implementing Redis caching layer',
      'Built payment integration handling X transactions per day with 99.9% uptime',
      'Led migration of legacy system to ASP.NET Core, improving deploy frequency by 3×',
    ],
  },
  {
    role: 'Software Developer',
    company: 'Previous Company',
    period: 'Jun 2022 – Dec 2023',
    achievements: [
      'Designed and built RESTful APIs serving X,000+ daily active users',
      'Implemented automated CI/CD pipeline, reducing deployment time from 2 hours to 15 minutes',
      'Collaborated with frontend team to deliver full-stack features end-to-end',
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
            {experiences.map((exp, i) => (
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
