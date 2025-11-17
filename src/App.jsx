import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Work from './components/Work'
import About from './components/About'
import Contact from './components/Contact'

function App() {
  return (
    <div className="bg-white text-slate-900">
      <Navbar />
      <Hero />
      <Work />
      <About />
      <Contact />
      <footer className="py-10 text-center text-sm text-slate-600">© {new Date().getFullYear()} Product Design Intern — Built with love</footer>
    </div>
  )
}

export default App
