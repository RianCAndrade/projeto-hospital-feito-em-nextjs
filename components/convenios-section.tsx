'use client'

import { useEffect, useRef } from 'react'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'

const convenios = [
  { name: 'Unimed', logo: 'U' },
  { name: 'Bradesco Saúde', logo: 'B' },
  { name: 'SulAmérica', logo: 'S' },
  { name: 'Amil', logo: 'A' },
  { name: 'Notre Dame', logo: 'N' },
  { name: 'Porto Seguro', logo: 'P' },
  { name: 'Cassi', logo: 'C' },
  { name: 'Geap', logo: 'G' },
  { name: 'Hapvida', logo: 'H' },
  { name: 'Plamedi', logo: 'P' },
  { name: 'Proasa', logo: 'P' },
  { name: 'Garantia de Saúde', logo: 'G' },
]

export function ConveniosSection() {
  const scrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const scrollContainer = scrollRef.current
    if (!scrollContainer) return

    let animationId: number
    let scrollPosition = 0

    const scroll = () => {
      scrollPosition += 0.5
      if (scrollPosition >= scrollContainer.scrollWidth / 2) {
        scrollPosition = 0
      }
      scrollContainer.scrollLeft = scrollPosition
      animationId = requestAnimationFrame(scroll)
    }

    animationId = requestAnimationFrame(scroll)

    return () => cancelAnimationFrame(animationId)
  }, [])

  return (
    <section id="convenios" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
            Convênios Aceitos
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Trabalhamos com os principais convênios
          </h2>
          <p className="text-muted-foreground text-lg">
            Aceitamos mais de 40 convênios médicos. Confira se o seu plano de saúde está na nossa lista.
          </p>
        </div>

        {/* Logos Carousel */}
        <div 
          ref={scrollRef}
          className="flex gap-6 overflow-hidden mb-10"
          style={{ scrollBehavior: 'auto' }}
        >
          {/* Duplicate logos for infinite scroll effect */}
          {[...convenios, ...convenios].map((convenio, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-40 h-24 bg-card border border-border rounded-xl flex items-center justify-center hover:border-primary/50 hover:shadow-md transition-all group"
            >
              <div className="text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-2 group-hover:bg-primary transition-colors">
                  <span className="text-xl font-bold text-primary group-hover:text-primary-foreground transition-colors">
                    {convenio.logo}
                  </span>
                </div>
                <span className="text-xs font-medium text-muted-foreground">{convenio.name}</span>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button 
            size="lg"
            className="bg-primary hover:bg-primary/90"
          >
            Ver Todos os Convênios
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  )
}
