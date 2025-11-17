import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[88vh] pt-24 overflow-hidden">
      <div className="absolute inset-0 -z-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative z-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="backdrop-blur-md bg-white/50 rounded-2xl p-6 md:p-8 border border-white/40 shadow-[0_8px_40px_rgba(2,6,23,0.08)]"
              >
                <p className="text-xs uppercase tracking-widest text-slate-600 mb-3">Portfolio · Product Design</p>
                <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-slate-900">
                  Designing playful, modern experiences
                </h1>
                <p className="mt-4 text-slate-700 text-base md:text-lg">
                  I’m a product design intern focused on interactive, human-centered design. I blend research, prototyping, and motion to craft delightful products.
                </p>
                <div className="mt-6 flex flex-wrap gap-3">
                  <a href="#work" className="px-4 py-2 rounded-md bg-slate-900 text-white text-sm hover:bg-slate-800 transition-colors">See Work</a>
                  <a href="#contact" className="px-4 py-2 rounded-md border border-slate-300 text-slate-800 text-sm hover:bg-slate-900 hover:text-white transition-colors">Get in touch</a>
                </div>
              </motion.div>
            </div>

            <div className="lg:col-span-6"></div>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/60 via-transparent to-white"></div>
    </section>
  )
}
