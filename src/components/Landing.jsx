import React, { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import '../styles/global.css'

function Stars() {
  const ref = useRef()
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const stars = []
    for (let i = 0; i < 120; i++) {
      const span = document.createElement('span')
      const size = Math.random() * 2 + 0.5
      span.className = 'star'
      span.style.width = `${size}px`
      span.style.height = `${size}px`
      span.style.left = `${Math.random() * 100}%`
      span.style.top = `${Math.random() * 100}%`
      span.style.opacity = Math.random()
      span.style.transform = `translateZ(0)`
      el.appendChild(span)
      stars.push(span)
    }
    return () => stars.forEach(s => s.remove())
  }, [])
  return <div className="stars" ref={ref} aria-hidden />
}

function useCursor() {
  useEffect(() => {
    const el = document.createElement('div')
    el.className = 'custom-cursor'
    document.body.appendChild(el)
    const move = (e) => {
      el.style.left = e.clientX + 'px'
      el.style.top = e.clientY + 'px'
    }
    window.addEventListener('mousemove', move)
    return () => { window.removeEventListener('mousemove', move); el.remove() }
  }, [])
}

export default function Landing() {
  const [loaded, setLoaded] = useState(false)
  useCursor()

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 900)
    return () => clearTimeout(t)
  }, [])

  return (
    <div className="relative min-h-screen overflow-hidden text-white">
      {!loaded && (
        <div className="loader">
          <div className="spinner" />
        </div>
      )}

      <Stars />

      <main className="relative z-10">
        <section className="min-h-screen flex items-center justify-center px-6">
          <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <motion.h1 initial={{y:30,opacity:0}} animate={{y:0,opacity:1}} transition={{delay:0.2}} className="text-5xl md:text-7xl font-extrabold leading-tight">
                Welcome to My Universe
              </motion.h1>
              <motion.p initial={{y:20,opacity:0}} animate={{y:0,opacity:1}} transition={{delay:0.35}} className="text-xl text-slate-300">
                Creator, Developer & Visionary
              </motion.p>

              <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{delay:0.5}}>
                <a href="#about" className="inline-block px-6 py-3 rounded-md glass shadow-glow hover:scale-105 transform transition">
                  <span className="text-neon-violet font-semibold">Explore More</span>
                </a>
              </motion.div>

              <div className="mt-6 flex gap-3">
                <div className="glass p-4 rounded-lg">
                  <strong className="block">AI</strong>
                </div>
                <div className="glass p-4 rounded-lg">
                  <strong className="block">Web Dev</strong>
                </div>
                <div className="glass p-4 rounded-lg">
                  <strong className="block">Design</strong>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-center">
              <motion.div className="glass rounded-2xl p-6 flex items-center justify-center" initial={{y:20,opacity:0}} animate={{y:0,opacity:1}} transition={{delay:0.4}}>
                <div className="astro-obj flex flex-col items-center">
                  <div className="mb-4 w-32 h-32 rounded-full bg-gradient-to-br from-neon-violet to-cyan-glow shadow-glow flex items-center justify-center text-black text-xl">AV</div>
                  <p className="text-center text-slate-300">Passionate about technology, AI, design and building futuristic digital experiences.</p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <section id="about" className="py-20 px-6">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">About Me</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="col-span-2 glass p-6 rounded-xl">
                <p>Passionate about technology, AI, design and building futuristic digital experiences.</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {['AI','Web Development','Design','Automation','Creative Thinking'].map(s => (
                    <span key={s} className="glass px-3 py-1 rounded-full text-sm">{s}</span>
                  ))}
                </div>
              </div>
              <div className="glass p-6 rounded-xl flex items-center justify-center">
                <div className="w-40 h-40 rounded-full bg-gradient-to-br from-neon-violet to-cyan-glow flex items-center justify-center text-black font-bold">IMG</div>
              </div>
            </div>
          </div>
        </section>

        <section id="projects" className="py-20 px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">Projects</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[1,2,3].map(i => (
                <motion.div key={i} whileHover={{scale:1.03}} className="glass p-6 rounded-xl">
                  <h3 className="font-semibold text-xl">Project {i}</h3>
                  <p className="text-slate-300 mt-2">Short description for a futuristic project showcasing UI, AI and automation.</p>
                  <div className="mt-4">
                    <button className="px-4 py-2 rounded-md" style={{background:'linear-gradient(90deg,#8A2BE2,#00FFF0)',color:'#041023'}}>View</button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section id="tech" className="py-20 px-6">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Tech Stack</h2>
            <div className="flex flex-wrap gap-4 items-center">
              {['React','Next.js','Tailwind','Python','AI Tools'].map(t => (
                <div key={t} className="glass px-4 py-2 rounded-lg">{t}</div>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="py-20 px-6">
          <div className="max-w-3xl mx-auto glass p-8 rounded-xl">
            <h2 className="text-2xl font-bold mb-4">Contact</h2>
            <form className="space-y-4">
              <input className="w-full p-3 rounded-md bg-black/30" placeholder="Your name" />
              <input className="w-full p-3 rounded-md bg-black/30" placeholder="Email" />
              <textarea className="w-full p-3 rounded-md bg-black/30" placeholder="Message" rows="4"></textarea>
              <div className="text-right">
                <button className="px-6 py-3 rounded-md" style={{background:'linear-gradient(90deg,#8A2BE2,#00FFF0)'}}>Send</button>
              </div>
            </form>
            <div className="mt-4 flex gap-3">
              <a className="glass p-2 rounded-full">Twitter</a>
              <a className="glass p-2 rounded-full">GitHub</a>
              <a className="glass p-2 rounded-full">LinkedIn</a>
            </div>
          </div>
        </section>

        <footer className="py-8 text-center text-slate-400">Built with creativity and imagination.</footer>
      </main>
    </div>
  )
}
