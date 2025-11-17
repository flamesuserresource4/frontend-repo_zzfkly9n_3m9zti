import { motion } from 'framer-motion'

const projects = [
  {
    title: 'Onboarding Flow',
    tag: 'UX Case Study',
    desc: 'Improved activation by simplifying steps and adding progress feedback.',
    chips: ['Research', 'Wireframes', 'Usability'],
    image: 'https://images.unsplash.com/photo-1746900830074-baf6ddf20bca?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxPbmJvYXJkaW5nJTIwRmxvd3xlbnwwfDB8fHwxNzYzMzk0NDU2fDA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
  },
  {
    title: 'Mobile Banking',
    tag: 'UI System',
    desc: 'Created a modular design system with tokens and responsive components.',
    chips: ['Design System', 'Prototyping'],
    image: 'https://images.unsplash.com/photo-1545235617-9465d2a55698?q=80&w=1800&auto=format&fit=crop',
  },
  {
    title: 'AR Playground',
    tag: 'Interaction',
    desc: 'Explored playful interactions and motion with AR prototypes.',
    chips: ['Motion', 'AR', 'Prototype'],
    image: 'https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=1800&auto=format&fit=crop',
  },
]

function Card({ p, i }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.5, delay: i * 0.05 }}
      className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm hover:shadow-md transition-shadow"
    >
      <div className="aspect-[16/10] overflow-hidden">
        <img src={p.image} alt={p.title} className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500" />
      </div>
      <div className="p-5">
        <div className="flex items-center justify-between">
          <span className="text-xs font-medium uppercase tracking-wide text-slate-600">{p.tag}</span>
          <div className="flex gap-1.5">
            {p.chips.map((c) => (
              <span key={c} className="text-[10px] px-2 py-1 rounded-full bg-slate-100 text-slate-700">{c}</span>
            ))}
          </div>
        </div>
        <h3 className="mt-2 text-xl font-semibold text-slate-900">{p.title}</h3>
        <p className="mt-1 text-sm text-slate-700">{p.desc}</p>
        <a href="#" className="mt-4 inline-flex items-center text-sm text-slate-900 hover:underline">View case study →</a>
      </div>
    </motion.article>
  )
}

export default function Work() {
  return (
    <section id="work" className="py-20 md:py-28 bg-gradient-to-b from-white to-slate-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-8">
          <div>
            <h2 className="text-2xl md:text-4xl font-extrabold tracking-tight text-slate-900">Selected work</h2>
            <p className="text-slate-600 mt-2">A mix of case studies, prototypes, and visual explorations.</p>
          </div>
          <a href="#" className="hidden md:inline-flex px-4 py-2 rounded-md border border-slate-300 text-slate-800 text-sm hover:bg-slate-900 hover:text-white transition-colors">All projects</a>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {projects.map((p, i) => (
            <Card key={p.title} p={p} i={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
