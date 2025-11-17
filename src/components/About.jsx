import { motion } from 'framer-motion'

export default function About() {
  return (
    <section id="about" className="py-20 md:py-28">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5 }}
          className="prose prose-slate max-w-none"
        >
          <h2 className="text-2xl md:text-4xl font-extrabold tracking-tight text-slate-900 mb-4">About me</h2>
          <p className="lead text-slate-700">
            I’m a product design intern who loves building intuitive tools. My process blends research, rapid prototyping, and motion to bring clarity and delight to complex problems.
          </p>
          <p>
            I’m comfortable across the stack of design activities: discovery research, user flows, wireframes, high-fidelity UI, and interactive prototypes. I care about accessibility, craft, and shipping.
          </p>
          <ul>
            <li>Tools: Figma, Framer, After Effects, Principle</li>
            <li>Hobbies: sketching, photography, indie games</li>
          </ul>
        </motion.div>
      </div>
    </section>
  )
}
