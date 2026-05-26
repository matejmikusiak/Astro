import React, { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'

export default function Counter({ from = 0, to = 100, duration = 2, suffix = '' }) {
  const [count, setCount] = useState(from)
  const hasStarted = useRef(false)
  const elementRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasStarted.current) {
          hasStarted.current = true
          const startTime = Date.now()
          const interval = setInterval(() => {
            const elapsed = (Date.now() - startTime) / 1000
            const progress = Math.min(elapsed / duration, 1)
            const current = Math.floor(from + (to - from) * progress)
            setCount(current)
            if (progress === 1) clearInterval(interval)
          }, 20)
        }
      },
      { threshold: 0.5 }
    )

    if (elementRef.current) {
      observer.observe(elementRef.current)
    }

    return () => observer.disconnect()
  }, [from, to, duration])

  return (
    <span ref={elementRef} className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary-violet to-primary-cyan">
      {count}{suffix}
    </span>
  )
}
