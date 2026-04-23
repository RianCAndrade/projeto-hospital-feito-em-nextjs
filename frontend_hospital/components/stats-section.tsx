'use client'

import { useEffect, useState, useRef } from 'react'
import { FileCheck, Stethoscope, Users, UserCheck } from 'lucide-react'

const stats = [
  {
    icon: FileCheck,
    value: 41,
    suffix: '',
    label: 'Convênios',
    description: 'Parceiros de saúde',
  },
  {
    icon: Stethoscope,
    value: 52,
    suffix: '',
    label: 'Especialidades',
    description: 'Áreas médicas',
  },
  {
    icon: Users,
    value: 255,
    suffix: '',
    label: 'Médicos',
    description: 'Profissionais qualificados',
  },
  {
    icon: UserCheck,
    value: 1482,
    suffix: '',
    label: 'Funcionários',
    description: 'Equipe dedicada',
  },
]

function AnimatedCounter({ value, suffix, isVisible }: { value: number; suffix: string; isVisible: boolean }) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!isVisible) return

    const duration = 2000
    const steps = 60
    const increment = value / steps
    let current = 0

    const timer = setInterval(() => {
      current += increment
      if (current >= value) {
        setCount(value)
        clearInterval(timer)
      } else {
        setCount(Math.floor(current))
      }
    }, duration / steps)

    return () => clearInterval(timer)
  }, [value, isVisible])

  return (
    <span>
      {count.toLocaleString('pt-BR')}{suffix}
    </span>
  )
}

export function StatsSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.3 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="py-16 bg-primary">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="text-center text-primary-foreground"
            >
              <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center mx-auto mb-4">
                <stat.icon className="h-8 w-8" />
              </div>
              <p className="text-4xl md:text-5xl font-bold mb-2">
                <AnimatedCounter value={stat.value} suffix={stat.suffix} isVisible={isVisible} />
              </p>
              <p className="text-lg font-semibold mb-1">{stat.label}</p>
              <p className="text-sm opacity-80">{stat.description}</p>
            </div>
          ))}
        </div>

        {/* 24h Badge */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3">
            <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse" />
            <span className="text-primary-foreground font-medium">Atendimento 24 horas</span>
          </div>
        </div>
      </div>
    </section>
  )
}
