import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileOpen, setIsMobileOpen] = useState(false)
  const [isDarkMode, setIsDarkMode] = useState(true)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Load theme preference from localStorage
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme')
    if (savedTheme === 'light') {
      setIsDarkMode(false)
      document.documentElement.setAttribute('data-theme', 'light')
    }
  }, [])

  const toggleTheme = () => {
    const newMode = !isDarkMode
    setIsDarkMode(newMode)
    localStorage.setItem('theme', newMode ? 'dark' : 'light')
    document.documentElement.setAttribute('data-theme', newMode ? 'dark' : 'light')
  }

  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Testimonials', href: '#testimonials' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'Contact', href: '#contact' },
  ]

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="content-wrapper flex items-center justify-between py-4 md:py-5">
        {/* Logo */}
        <motion.a
          href="#home"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-3 group"
        >
          <div className="relative w-10 h-10 rounded-xl bg-gradient-to-br from-primary-violet to-primary-cyan flex items-center justify-center text-dark-bg font-bold shadow-lg group-hover:shadow-neon transition-shadow duration-300">
            MK
          </div>
          <span className="text-xl font-bold hidden md:block text-white group-hover:text-primary-cyan transition-colors">
            Mateusz
          </span>
        </motion.a>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-1">
          {navItems.map((item, i) => (
            <motion.a
              key={item.href}
              href={item.href}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05, duration: 0.4 }}
              className="relative px-4 py-2 text-sm text-gray-400 hover:text-white transition-colors duration-300 rounded-lg hover:bg-white/5 group"
            >
              {item.label}
              <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-gradient-to-r from-primary-violet to-primary-cyan transition-all duration-300 group-hover:w-full group-hover:left-0" />
            </motion.a>
          ))}
        </div>

        {/* Right side - Theme toggle + CTA */}
        <div className="flex items-center gap-4">
          {/* Theme Toggle */}
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            onClick={toggleTheme}
            className="theme-toggle hidden md:flex"
            aria-label="Toggle theme"
          >
            {isDarkMode ? (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            ) : (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
              </svg>
            )}
          </motion.button>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="hidden md:block"
          >
            <a
              href="#contact"
              className="btn btn-primary btn-sm"
            >
              Let's Talk
            </a>
          </motion.div>

          {/* Mobile Menu Button */}
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            className="lg:hidden flex flex-col gap-1.5 z-50 p-2"
            aria-label="Toggle menu"
          >
            <motion.div
              animate={isMobileOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
              className="w-6 h-0.5 bg-white rounded-full"
            />
            <motion.div
              animate={isMobileOpen ? { opacity: 0 } : { opacity: 1 }}
              className="w-6 h-0.5 bg-white rounded-full"
            />
            <motion.div
              animate={isMobileOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
              className="w-6 h-0.5 bg-white rounded-full"
            />
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileOpen && (
            <motion.div
              initial={{ opacity: 0, x: '100%' }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: '100%' }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              className="fixed top-0 right-0 h-screen w-full lg:hidden bg-dark-bg/98 backdrop-blur-xl pt-24 px-6 z-40"
            >
              <div className="flex flex-col gap-2">
                {navItems.map((item, i) => (
                  <motion.a
                    key={item.href}
                    href={item.href}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                    onClick={() => setIsMobileOpen(false)}
                    className="text-lg text-gray-300 hover:text-white transition-colors py-3 px-4 rounded-lg hover:bg-white/5"
                  >
                    {item.label}
                  </motion.a>
                ))}
                
                <div className="h-px bg-gray-700 my-4" />
                
                {/* Mobile theme toggle */}
                <div className="flex items-center justify-between px-4 py-3">
                  <span className="text-gray-400">Theme</span>
                  <button
                    onClick={toggleTheme}
                    className="theme-toggle"
                  >
                    {isDarkMode ? '☀️' : '🌙'}
                  </button>
                </div>
                
                <a
                  href="#contact"
                  onClick={() => setIsMobileOpen(false)}
                  className="btn btn-primary btn-sm w-full text-center mt-4"
                >
                  Let's Talk
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  )
}