import React, { useEffect, useRef, useState } from 'react'
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion'
import Navbar from './Navbar'
import Counter from './Counter'
import { GradientText, Badge, Button, Card, SectionHeader, Section, Container, Divider, AnimatedStat } from './UIComponents'
import '../styles/global.css'

/* ============= UTILITY COMPONENTS ============= */

function Stars() {
  const ref = useRef()
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const stars = []
    for (let i = 0; i < 150; i++) {
      const span = document.createElement('span')
      const size = Math.random() * 2.5 + 0.5
      span.className = 'star'
      span.style.width = `${size}px`
      span.style.height = `${size}px`
      span.style.left = `${Math.random() * 100}%`
      span.style.top = `${Math.random() * 100}%`
      span.style.opacity = Math.random() * 0.8
      span.style.animation = `twinkle ${2 + Math.random() * 3}s ease-in-out infinite`
      span.style.animationDelay = `${Math.random() * 2}s`
      el.appendChild(span)
      stars.push(span)
    }
    return () => stars.forEach(s => s.remove())
  }, [])
  
  return <div className="stars" ref={ref} aria-hidden />
}

function useCursor() {
  useEffect(() => {
    // Only add custom cursor on non-touch devices
    if ('ontouchstart' in window) return
    
    const el = document.createElement('div')
    el.className = 'custom-cursor'
    document.body.appendChild(el)
    
    let mouseX = 0, mouseY = 0
    let cursorX = 0, cursorY = 0
    
    const move = (e) => {
      mouseX = e.clientX
      mouseY = e.clientY
    }
    
    const animate = () => {
      cursorX += (mouseX - cursorX) * 0.3
      cursorY += (mouseY - cursorY) * 0.3
      el.style.left = cursorX + 'px'
      el.style.top = cursorY + 'px'
      requestAnimationFrame(animate)
    }
    
    window.addEventListener('mousemove', move)
    animate()
    
    return () => {
      window.removeEventListener('mousemove', move)
      el.remove()
    }
  }, [])
}

function useSectionAnimation() {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in-up')
          entry.target.classList.remove('opacity-0')
        }
      })
    }, { threshold: 0.1 })

    document.querySelectorAll('[data-animate]').forEach(el => {
      el.classList.add('opacity-0')
      observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])
}

/* ============= HERO SECTION ============= */

function HeroSection() {
  const { scrollY } = useScroll()
  const y1 = useTransform(scrollY, [0, 500], [0, 200])
  const y2 = useTransform(scrollY, [0, 500], [0, -150])
  const opacity = useTransform(scrollY, [0, 300], [1, 0])

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center px-4 md:px-6 pt-20 md:pt-32 overflow-hidden">
      {/* Background gradient orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          style={{ y: y1 }}
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 100, 0],
            y: [0, -50, 0],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute w-96 h-96 rounded-full bg-gradient-to-r from-primary-violet/20 to-transparent blur-3xl -top-40 -left-40"
        />
        <motion.div
          style={{ y: y2 }}
          animate={{
            scale: [1, 1.1, 1],
            x: [0, -80, 0],
            y: [0, 60, 0],
          }}
          transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
          className="absolute w-96 h-96 rounded-full bg-gradient-to-l from-primary-cyan/20 to-transparent blur-3xl bottom-40 -right-40"
        />
        {/* Mouse follow gradient */}
        <MouseGradient />
      </div>

      <motion.div style={{ opacity }} className="relative z-10 content-wrapper w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="space-y-8"
          >
            <div>
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 0.6 }}
              >
                <Badge variant="primary" icon="✨">Creator & Developer</Badge>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.8 }}
                className="mt-6 leading-tight"
              >
                Crafting <GradientText>Futuristic Digital</GradientText> Experiences
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="mt-6 text-lg text-gray-400 max-w-xl"
              >
                I'm a passionate developer and designer obsessed with creating beautiful, performant, and interactive web experiences using cutting-edge technology and AI innovation.
              </motion.p>
            </div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="flex flex-col md:flex-row gap-4"
            >
              <Button variant="primary">
                View My Work
              </Button>
              <Button variant="secondary">
                Get In Touch
              </Button>
            </motion.div>

            {/* Skills badges */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="flex flex-wrap gap-3 pt-4"
            >
              {['React', 'AI/ML', 'Web Design', 'Automation', 'Creative'].map((skill, i) => (
                <motion.div
                  key={skill}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5 + i * 0.1 }}
                >
                  <Badge variant="secondary">{skill}</Badge>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right side - Animated illustration */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="relative h-96 md:h-full min-h-96"
          >
            <motion.div
              animate={{ y: [-20, 20, -20] }}
              transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
              className="glass rounded-3xl p-8 h-full flex flex-col items-center justify-center relative overflow-hidden"
            >
              {/* Animated gradient sphere */}
              <motion.div
                animate={{
                  rotate: 360,
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  rotate: { duration: 20, repeat: Infinity, linear: true },
                  scale: { duration: 4, repeat: Infinity, ease: 'easeInOut' },
                }}
                className="w-48 h-48 md:w-56 md:h-56 rounded-full bg-gradient-to-br from-primary-violet via-primary-cyan to-primary-blue opacity-80 blur-3xl absolute inset-0 m-auto"
              />
              <div className="relative z-10 flex items-center justify-center flex-col">
                <motion.div
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="w-32 h-32 md:w-40 md:h-40 rounded-2xl bg-gradient-to-br from-primary-violet to-primary-cyan flex items-center justify-center text-dark-bg font-bold text-3xl md:text-4xl shadow-neon-lg"
                >
                  MK
                </motion.div>
                <p className="text-center mt-8 text-sm text-gray-300 max-w-xs">Passionate about technology, AI, design and building futuristic experiences</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
      >
        <div className="flex flex-col items-center gap-2">
          <p className="text-xs text-gray-500 uppercase tracking-widest">Scroll to explore</p>
          <svg className="w-5 h-5 text-primary-cyan" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </motion.div>
    </section>
  )
}

/* Mouse follow gradient effect */
function MouseGradient() {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  
  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <div
      className="absolute inset-0 pointer-events-none"
      style={{
        background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(138, 43, 226, 0.06), transparent 40%)`,
      }}
    />
  )
}

/* ============= ABOUT SECTION ============= */

function AboutSection() {
  return (
    <Section id="about" className="bg-gradient-to-b from-dark-bg via-dark-secondary/30 to-dark-bg">
      <div data-animate>
        <SectionHeader
          title="About Me"
          description="Discover my journey, skills, and passion for building amazing digital products"
          align="center"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {/* Main about card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="md:col-span-2"
          >
            <Card className="h-full">
              <h3 className="text-2xl font-bold mb-4">My Story</h3>
              <p className="text-gray-400 leading-relaxed mb-4">
                I'm a full-stack developer and creative technologist with a passion for leveraging AI and modern web technologies to build extraordinary digital experiences. With expertise in React, Python, and modern design systems, I transform ideas into elegant, performant solutions.
              </p>
              <p className="text-gray-400 leading-relaxed">
                When I'm not coding, I'm exploring emerging technologies, creating futuristic UI concepts, and helping brands tell their story through interactive digital products.
              </p>
            </Card>
          </motion.div>

          {/* Image card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Card className="h-full">
              <div className="w-full h-56 rounded-xl bg-gradient-to-br from-primary-violet to-primary-cyan flex items-center justify-center text-dark-bg font-bold text-5xl">
                👨‍💻
              </div>
            </Card>
          </motion.div>
        </div>

        {/* Stats row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          {[
            { value: '50+', label: 'Projects Completed', icon: '🚀' },
            { value: '30+', label: 'Clients Served', icon: '😊' },
            { value: '5+', label: 'Years Experience', icon: '⭐' },
          ].map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <AnimatedStat value={stat.value} label={stat.label} icon={stat.icon} />
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  )
}

/* ============= SKILLS SECTION ============= */

function SkillsSection() {
  const skillCategories = [
    {
      title: 'Frontend',
      skills: ['React', 'Next.js', 'Tailwind CSS', 'Framer Motion', 'TypeScript', 'Astro'],
      icon: '🎨'
    },
    {
      title: 'Backend & AI',
      skills: ['Python', 'Node.js', 'AI/ML', 'Automation', 'APIs', 'Databases'],
      icon: '🤖'
    },
    {
      title: 'Design & UX',
      skills: ['UI Design', 'Figma', 'Prototyping', 'Web Design', 'Animation', 'Accessibility'],
      icon: '✨'
    },
  ]

  return (
    <Section id="skills" className="bg-gradient-to-b from-dark-bg to-dark-secondary/30">
      <div data-animate>
        <SectionHeader
          title="Skills & Expertise"
          description="Technologies and tools I use to bring ideas to life"
          align="center"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {skillCategories.map((category, idx) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.2, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Card className="group">
                <div className="text-4xl mb-4">{category.icon}</div>
                <h3 className="text-xl font-bold mb-6">{category.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, i) => (
                    <motion.span
                      key={skill}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: idx * 0.1 + i * 0.05 }}
                      viewport={{ once: true }}
                      className="px-3 py-1.5 rounded-lg bg-gray-800/50 text-gray-300 text-sm border border-gray-700 hover:border-primary-cyan transition-colors"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  )
}

/* ============= PROJECTS SECTION ============= */

function ProjectsSection() {
  const projects = [
    {
      title: 'AI-Powered Platform',
      description: 'A cutting-edge SaaS platform featuring AI integration, real-time collaboration, and stunning UI design.',
      tags: ['React', 'AI', 'Next.js', 'Tailwind'],
      icon: '🤖',
      gradient: 'from-primary-violet to-primary-cyan'
    },
    {
      title: 'Interactive Dashboard',
      description: 'Modern analytics dashboard with real-time data visualization and smooth animations.',
      tags: ['React', 'D3.js', 'TypeScript', 'Animation'],
      icon: '📊',
      gradient: 'from-accent-pink to-primary-violet'
    },
    {
      title: 'Design System',
      description: 'Comprehensive component library and design system built with Figma and React.',
      tags: ['Design', 'React', 'Storybook', 'Accessibility'],
      icon: '🎨',
      gradient: 'from-primary-blue to-primary-cyan'
    },
  ]

  return (
    <Section id="projects">
      <div data-animate>
        <SectionHeader
          title="Featured Projects"
          description="Showcasing my recent work and creative solutions"
          align="center"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {projects.map((project, idx) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.15, duration: 0.6 }}
              viewport={{ once: true }}
              className="group"
            >
              <Card>
                <div className={`h-32 rounded-lg bg-gradient-to-br ${project.gradient} flex items-center justify-center text-5xl mb-4`}>
                  {project.icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-400 text-sm mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map(tag => (
                    <span key={tag} className="text-xs px-2 py-1 rounded bg-gray-800 text-gray-300">
                      {tag}
                    </span>
                  ))}
                </div>
                <motion.div
                  initial={{ opacity: 0, x: -10 }}
                  whileHover={{ opacity: 1, x: 0 }}
                  className="mt-4 pt-4 border-t border-gray-700"
                >
                  <a href="#" className="text-primary-cyan hover:text-white transition-colors text-sm font-semibold flex items-center gap-2">
                    View Project →
                  </a>
                </motion.div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  )
}

/* ============= TESTIMONIALS SECTION ============= */

function TestimonialsSection() {
  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'CEO, TechStart',
      content: 'Working with Mateusz was an absolute pleasure. The attention to detail and creative solutions exceeded our expectations.',
      avatar: 'SJ'
    },
    {
      name: 'Michael Chen',
      role: 'Product Manager, InnovateCo',
      content: 'The level of craftsmanship and dedication to user experience is remarkable. Highly recommended for any complex project.',
      avatar: 'MC'
    },
    {
      name: 'Emily Davis',
      role: 'Founder, DesignLab',
      content: 'An exceptional developer who truly understands design. The final product was both beautiful and highly functional.',
      avatar: 'ED'
    },
  ]

  return (
    <Section id="testimonials" className="bg-gradient-to-b from-dark-bg via-dark-secondary/30 to-dark-bg">
      <div data-animate>
        <SectionHeader
          title="Client Testimonials"
          description="What people say about working with me"
          align="center"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {testimonials.map((testimonial, idx) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.15, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Card className="h-full relative">
                <div className="text-4xl text-primary-cyan/30 mb-4">"</div>
                <p className="text-gray-300 leading-relaxed mb-6">{testimonial.content}</p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary-violet to-primary-cyan flex items-center justify-center text-dark-bg font-bold">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <p className="font-semibold text-white">{testimonial.name}</p>
                    <p className="text-sm text-gray-400">{testimonial.role}</p>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  )
}

/* ============= PRICING SECTION ============= */

function PricingSection() {
  const plans = [
    {
      name: 'Starter',
      price: '$1,500',
      description: 'Perfect for small projects and landing pages',
      features: ['Custom Design', 'Responsive Layout', 'Basic SEO', '1 Week Support'],
      highlighted: false
    },
    {
      name: 'Professional',
      price: '$3,500',
      description: 'Ideal for growing businesses',
      features: ['Everything in Starter', 'Advanced Animations', 'CMS Integration', 'Analytics Setup', '1 Month Support'],
      highlighted: true
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      description: 'For complex applications and platforms',
      features: ['Full-Stack Development', 'AI Integration', 'Custom APIs', 'Performance Optimization', '3 Months Support'],
      highlighted: false
    },
  ]

  return (
    <Section id="pricing" className="bg-gradient-to-b from-dark-bg to-dark-secondary/30">
      <div data-animate>
        <SectionHeader
          title="Pricing Plans"
          description="Transparent pricing for every project size"
          align="center"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 max-w-6xl mx-auto">
          {plans.map((plan, idx) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.15, duration: 0.6 }}
              viewport={{ once: true }}
              className={plan.highlighted ? 'md:-mt-4 md:mb-4' : ''}
            >
              <Card className={`h-full relative ${plan.highlighted ? 'border-primary-cyan/50 shadow-neon' : ''}`}>
                {plan.highlighted && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <Badge variant="primary">Most Popular</Badge>
                  </div>
                )}
                <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
                <p className="text-gray-400 text-sm mb-4">{plan.description}</p>
                <div className="mb-6">
                  <span className="text-4xl font-bold gradient-text">{plan.price}</span>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-3 text-sm text-gray-300">
                      <svg className="w-5 h-5 text-primary-cyan flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button 
                  variant={plan.highlighted ? 'primary' : 'secondary'} 
                  className="w-full"
                >
                  Get Started
                </Button>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  )
}

/* ============= CONTACT SECTION ============= */

function ContactSection() {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormState(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    // Simulate submission
    setTimeout(() => {
      setIsSubmitting(false)
      setSubmitted(true)
      setFormState({ name: '', email: '', message: '' })
      setTimeout(() => setSubmitted(false), 3000)
    }, 2000)
  }

  return (
    <Section id="contact" className="bg-gradient-to-b from-dark-bg via-dark-secondary/50 to-dark-bg">
      <div data-animate>
        <SectionHeader
          title="Let's Work Together"
          description="Have an idea? Let's collaborate and bring it to life"
          align="center"
        />

        <div className="max-w-2xl mx-auto mt-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="glass-md p-8 md:p-12 rounded-2xl"
          >
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-12"
              >
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary-violet to-primary-cyan flex items-center justify-center text-3xl">
                  ✓
                </div>
                <h3 className="text-2xl font-bold mb-2">Message Sent!</h3>
                <p className="text-gray-400">I'll get back to you as soon as possible.</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold mb-2">Your Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formState.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    className="input-field"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    value={formState.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                    className="input-field"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2">Message</label>
                  <textarea
                    name="message"
                    value={formState.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project..."
                    rows={5}
                    className="input-field"
                    required
                  />
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  disabled={isSubmitting}
                  className="btn btn-primary w-full"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </motion.button>
              </form>
            )}

            <Divider />

            <div className="text-center">
              <p className="text-gray-400 mb-6">Or connect with me on social media</p>
              <div className="flex justify-center gap-4">
                {[
                  { icon: '𝕏', label: 'Twitter', href: '#' },
                  { icon: '👨‍💻', label: 'GitHub', href: '#' },
                  { icon: '💼', label: 'LinkedIn', href: '#' },
                ].map((social, i) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: i * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.1, y: -2 }}
                    className="w-12 h-12 rounded-lg glass flex items-center justify-center hover:border-primary-cyan transition-all text-xl"
                    title={social.label}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </Section>
  )
}

/* ============= FOOTER ============= */

function Footer() {
  const currentYear = new Date().getFullYear()
  
  return (
    <footer className="relative z-10 py-12 border-t border-gray-800/50">
      <div className="content-wrapper">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary-violet to-primary-cyan flex items-center justify-center text-dark-bg font-bold">
              MK
            </div>
            <span className="text-lg font-bold">Mateusz</span>
          </div>
          
          <p className="text-gray-500 text-sm">
            © {currentYear} All rights reserved. Built with creativity and imagination.
          </p>
          
          <div className="flex gap-6">
            <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Privacy</a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

/* ============= MAIN COMPONENT ============= */

export default function Landing() {
  const [loaded, setLoaded] = useState(false)
  useCursor()
  useSectionAnimation()

  useEffect(() => {
    // Add CSS for twinkling animation
    const style = document.createElement('style')
    style.textContent = `
      @keyframes twinkle {
        0%, 100% { opacity: 0.3; }
        50% { opacity: 1; }
      }
    `
    document.head.appendChild(style)

    const t = setTimeout(() => setLoaded(true), 800)
    return () => {
      clearTimeout(t)
      document.head.removeChild(style)
    }
  }, [])

  return (
    <div className="relative overflow-hidden">
      <AnimatePresence>
        {!loaded && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="loader"
          >
            <div className="spinner" />
          </motion.div>
        )}
      </AnimatePresence>

      <Stars />

      <Navbar />

      <main className="relative z-10">
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <TestimonialsSection />
        <PricingSection />
        <ContactSection />
        <Footer />
      </main>
    </div>
  )
}