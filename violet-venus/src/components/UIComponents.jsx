import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

/* ============= GRADIENT TEXT ============= */
export function GradientText({ children, className = '' }) {
  return (
    <span className={`gradient-text ${className}`}>
      {children}
    </span>
  )
}

/* ============= BADGE ============= */
export function Badge({ children, variant = 'primary', icon = null, className = '' }) {
  const variants = {
    primary: 'badge',
    secondary: 'badge badge-secondary',
  }

  return (
    <motion.span 
      className={`${variants[variant]} ${className}`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {icon && <span className="text-sm">{icon}</span>}
      {children}
    </motion.span>
  )
}

/* ============= BUTTON ============= */
export function Button({
  children,
  variant = 'primary',
  size = 'base',
  className = '',
  onClick,
  href,
  disabled = false,
  icon,
  iconPosition = 'left',
  loading = false,
  ...props
}) {
  const variants = {
    primary: 'btn btn-primary',
    secondary: 'btn btn-secondary',
    ghost: 'btn btn-ghost',
  }

  const sizes = {
    sm: 'btn-sm',
    base: '',
    lg: 'btn-lg',
  }

  const buttonClass = `${variants[variant]} ${sizes[size]} ${className}`

  const content = (
    <>
      {loading ? (
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
          className="w-5 h-5 border-2 border-current border-t-transparent rounded-full"
        />
      ) : (
        <>
          {icon && iconPosition === 'left' && (
            <span className="mr-2">{icon}</span>
          )}
          {children}
          {icon && iconPosition === 'right' && (
            <span className="ml-2">{icon}</span>
          )}
        </>
      )}
    </>
  )

  if (href) {
    return (
      <motion.a
        href={href}
        className={buttonClass}
        whileHover={{ scale: disabled ? 1 : 1.02 }}
        whileTap={{ scale: disabled ? 1 : 0.98 }}
        onClick={onClick}
        {...props}
      >
        {content}
      </motion.a>
    )
  }

  return (
    <motion.button
      className={buttonClass}
      onClick={onClick}
      disabled={disabled}
      whileHover={{ scale: disabled ? 1 : 1.02 }}
      whileTap={{ scale: disabled ? 1 : 0.98 }}
      {...props}
    >
      {content}
    </motion.button>
  )
}

/* ============= CARD ============= */
export function Card({ 
  children, 
  className = '', 
  hover = true, 
  onClick,
  padding = true,
  glow = false,
  ...props 
}) {
  const baseClasses = `card ${padding ? 'p-6' : ''} rounded-2xl ${className}`
  const glowClasses = glow ? 'glow-effect' : ''
  
  if (onClick) {
    return (
      <motion.div
        className={`${baseClasses} ${glowClasses} cursor-pointer`}
        onClick={onClick}
        role="button"
        tabIndex={0}
        whileHover={hover ? { y: -8, scale: 1.01 } : {}}
        whileTap={{ scale: 0.99 }}
        onKeyDown={(e) => e.key === 'Enter' && onClick(e)}
        {...props}
      >
        {children}
      </motion.div>
    )
  }

  return (
    <motion.div
      className={`${baseClasses} ${glowClasses}`}
      whileHover={hover ? { y: -4 } : {}}
      {...props}
    >
      {children}
    </motion.div>
  )
}

/* ============= SECTION HEADER ============= */
export function SectionHeader({ title, description, align = 'left', badge = null }) {
  const alignClass = align === 'center' ? 'text-center mx-auto' : ''

  return (
    <div className={`section-header ${alignClass}`}>
      {badge && (
        <div className={`mb-4 ${align === 'center' ? 'flex justify-center' : ''}`}>
          <Badge variant="primary">{badge}</Badge>
        </div>
      )}
      <h2 className="mb-4 gradient-text">{title}</h2>
      <p className="text-lg text-gray-400 max-w-2xl mx-auto">{description}</p>
    </div>
  )
}

/* ============= SECTION ============= */
export function Section({ children, className = '', id, background = 'none' }) {
  const bgClasses = {
    none: '',
    gradient: 'bg-gradient-to-b from-dark-bg via-dark-secondary/30 to-dark-bg',
    alt: 'bg-gradient-to-b from-dark-bg to-dark-secondary/20',
  }

  return (
    <section id={id} className={`section ${bgClasses[background]} ${className}`}>
      <div className="content-wrapper">
        {children}
      </div>
    </section>
  )
}

/* ============= DIVIDER ============= */
export function Divider({ className = '' }) {
  return <div className={`divider my-8 md:my-12 ${className}`} />
}

/* ============= CONTAINER ============= */
export function Container({ children, className = '', size = 'default' }) {
  const sizes = {
    default: 'max-w-7xl',
    sm: 'max-w-4xl',
    lg: 'max-w-7xl',
    xl: 'max-w-7xl',
    full: 'max-w-full',
  }

  return (
    <div className={`${sizes[size]} mx-auto px-4 md:px-6 lg:px-8 ${className}`}>
      {children}
    </div>
  )
}

/* ============= ANIMATED STAT ============= */
export function AnimatedStat({ value, label, icon, suffix = '' }) {
  return (
    <motion.div
      className="glass p-6 rounded-2xl text-center group"
      whileHover={{ y: -4, scale: 1.02 }}
    >
      {icon && (
        <motion.div 
          className="mb-3 text-3xl"
          whileHover={{ scale: 1.2, rotate: 10 }}
        >
          {icon}
        </motion.div>
      )}
      <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">
        {value}{suffix}
      </div>
      <p className="text-gray-400 text-sm">{label}</p>
    </motion.div>
  )
}

/* ============= COUNTER (Animated Number) ============= */
export function Counter({ from = 0, to = 100, duration = 2, suffix = '', className = '' }) {
  const [count, setCount] = useState(from)
  const [hasStarted, setHasStarted] = useState(false)
  const ref = React.useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasStarted) {
          setHasStarted(true)
          const startTime = Date.now()
          const animate = () => {
            const elapsed = (Date.now() - startTime) / 1000
            const progress = Math.min(elapsed / duration, 1)
            // Easing function for smoother animation
            const easeOutQuart = 1 - Math.pow(1 - progress, 4)
            const current = Math.floor(from + (to - from) * easeOutQuart)
            setCount(current)
            if (progress < 1) {
              requestAnimationFrame(animate)
            }
          }
          requestAnimationFrame(animate)
        }
      },
      { threshold: 0.5 }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [from, to, duration, hasStarted])

  return (
    <span ref={ref} className={`font-bold gradient-text ${className}`}>
      {count}{suffix}
    </span>
  )
}

/* ============= ICON BUTTON ============= */
export function IconButton({ icon, label, onClick, variant = 'ghost', className = '', ...props }) {
  const variants = {
    ghost: 'w-10 h-10 rounded-lg glass hover:border-primary-cyan transition-all',
    filled: 'w-10 h-10 rounded-lg bg-primary-violet text-white hover:bg-primary-violet/80',
  }

  return (
    <motion.button
      className={`${variants[variant]} flex items-center justify-center ${className}`}
      onClick={onClick}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      title={label}
      aria-label={label}
      {...props}
    >
      {icon}
    </motion.button>
  )
}

/* ============= SOCIAL LINK ============= */
export function SocialLink({ icon, label, href, className = '' }) {
  return (
    <motion.a
      href={href}
      className={`w-12 h-12 rounded-xl glass flex items-center justify-center text-xl transition-all ${className}`}
      whileHover={{ scale: 1.1, y: -4, borderColor: 'rgba(0, 255, 240, 0.5)' }}
      whileTap={{ scale: 0.95 }}
      title={label}
      aria-label={label}
    >
      {icon}
    </motion.a>
  )
}

/* ============= SKILL TAG ============= */
export function SkillTag({ name, icon, className = '' }) {
  return (
    <motion.span
      className={`px-3 py-1.5 rounded-lg bg-gray-800/50 text-gray-300 text-sm border border-gray-700 hover:border-primary-cyan transition-all cursor-default ${className}`}
      whileHover={{ scale: 1.05, backgroundColor: 'rgba(138, 43, 226, 0.1)' }}
      whileTap={{ scale: 0.95 }}
    >
      {icon && <span className="mr-1.5">{icon}</span>}
      {name}
    </motion.span>
  )
}

/* ============= FEATURE CARD ============= */
export function FeatureCard({ icon, title, description, className = '' }) {
  return (
    <Card className={`group ${className}`}>
      <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary-violet to-primary-cyan flex items-center justify-center text-2xl mb-4 group-hover:scale-110 transition-transform duration-300">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-3 text-white">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </Card>
  )
}

/* ============= PRICING CARD ============= */
export function PricingCard({ 
  name, 
  price, 
  description, 
  features, 
  highlighted = false, 
  buttonText = 'Get Started',
  className = '' 
}) {
  return (
    <motion.div
      className={`relative ${highlighted ? 'md:-mt-4 md:mb-4' : ''} ${className}`}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <Card className={`h-full relative ${highlighted ? 'border-primary-cyan/50 shadow-neon' : ''}`}>
        {highlighted && (
          <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
            <Badge variant="primary">Most Popular</Badge>
          </div>
        )}
        <h3 className="text-xl font-bold mb-2">{name}</h3>
        <p className="text-gray-400 text-sm mb-4">{description}</p>
        <div className="mb-6">
          <span className="text-4xl font-bold gradient-text">{price}</span>
        </div>
        <ul className="space-y-3 mb-8">
          {features.map((feature, i) => (
            <li key={i} className="flex items-center gap-3 text-sm text-gray-300">
              <svg className="w-5 h-5 text-primary-cyan flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              {feature}
            </li>
          ))}
        </ul>
        <Button 
          variant={highlighted ? 'primary' : 'secondary'} 
          className="w-full"
        >
          {buttonText}
        </Button>
      </Card>
    </motion.div>
  )
}

/* ============= TESTIMONIAL CARD ============= */
export function TestimonialCard({ content, author, role, avatar, className = '' }) {
  return (
    <Card className={`h-full relative ${className}`}>
      <div className="text-4xl text-primary-cyan/30 mb-4">"</div>
      <p className="text-gray-300 leading-relaxed mb-6">{content}</p>
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary-violet to-primary-cyan flex items-center justify-center text-dark-bg font-bold">
          {avatar}
        </div>
        <div>
          <p className="font-semibold text-white">{author}</p>
          <p className="text-sm text-gray-400">{role}</p>
        </div>
      </div>
    </Card>
  )
}

/* ============= PROJECT CARD ============= */
export function ProjectCard({ title, description, tags, icon, gradient, link = '#' }) {
  return (
    <motion.div
      className="group"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <Card>
        <div className={`h-32 rounded-xl bg-gradient-to-br ${gradient} flex items-center justify-center text-5xl mb-4 group-hover:scale-105 transition-transform duration-300`}>
          {icon}
        </div>
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-400 text-sm mb-4">{description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map(tag => (
            <span key={tag} className="text-xs px-2 py-1 rounded bg-gray-800 text-gray-300">
              {tag}
            </span>
          ))}
        </div>
        <motion.a
          href={link}
          className="text-primary-cyan hover:text-white transition-colors text-sm font-semibold flex items-center gap-2"
          initial={{ opacity: 0, x: -10 }}
          whileHover={{ opacity: 1, x: 0 }}
        >
          View Project →
        </motion.a>
      </Card>
    </motion.div>
  )
}

/* ============= ACCORDION ============= */
export function Accordion({ items, className = '' }) {
  const [openIndex, setOpenIndex] = useState(null)

  return (
    <div className={`space-y-4 ${className}`}>
      {items.map((item, index) => (
        <motion.div
          key={index}
          className="glass rounded-xl overflow-hidden"
          initial={false}
        >
          <button
            className="w-full px-6 py-4 text-left flex items-center justify-between text-white font-medium hover:bg-white/5 transition-colors"
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
          >
            <span>{item.title}</span>
            <motion.svg
              animate={{ rotate: openIndex === index ? 180 : 0 }}
              transition={{ duration: 0.3 }}
              className="w-5 h-5 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </motion.svg>
          </button>
          <motion.div
            initial={false}
            animate={{ height: openIndex === index ? 'auto' : 0, opacity: openIndex === index ? 1 : 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="px-6 pb-4 text-gray-400">
              {item.content}
            </div>
          </motion.div>
        </motion.div>
      ))}
    </div>
  )
}