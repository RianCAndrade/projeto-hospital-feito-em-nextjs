'use client'

import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Calendar, FileText, Shield, ClipboardList, ChevronLeft, ChevronRight } from 'lucide-react'

const slides = [
  {
    id: 1,
    title: 'Cuidando da sua saúde com',
    highlight: 'excelência e carinho',
    description: 'Há mais de 70 anos oferecendo atendimento médico de qualidade para Belém e região. Nossa equipe está preparada para cuidar de você e sua família.',
    image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=1920&q=80',
  },
  {
    id: 2,
    title: 'Tecnologia e',
    highlight: 'humanização',
    description: 'Equipamentos de última geração aliados a um atendimento humanizado e acolhedor. Sua saúde em boas mãos.',
    image: 'https://images.unsplash.com/photo-1551076805-e1869033e561?w=1920&q=80',
  },
  {
    id: 3,
    title: 'Rede Adventista de',
    highlight: 'Saúde',
    description: 'Faça parte da maior rede de saúde adventista do Brasil. Hospitais em Belém e Barcarena para melhor atendê-lo.',
    image: 'https://images.unsplash.com/photo-1586773860418-d37222d8fce3?w=1920&q=80',
  },
]

const quickActions = [
  {
    icon: Calendar,
    title: 'Agendamento de Consultas e Exames',
    description: 'Precisa de assistência médica? Entre em contato e marque sua consulta!',
    buttonText: 'Agendar Agora',
    phone: '+55 (91) 3084-7533',
    color: 'bg-primary',
  },
  {
    icon: FileText,
    title: 'Resultado de Exames',
    description: 'Verifique agora mesmo os seus resultados laboratoriais e de imagem.',
    buttonText: 'Ver Resultados',
    phone: '+55 (91) 3194-1133',
    color: 'bg-secondary',
  },
  {
    icon: Shield,
    title: 'Plano PROASA Pará',
    description: 'Adquira nosso plano e viva com mais tranquilidade e qualidade de vida.',
    buttonText: 'Saiba Mais',
    color: 'bg-[#2d5a6b]',
  },
  {
    icon: ClipboardList,
    title: 'Políticas de Visita',
    description: 'Regras gerais para visitantes do internamento hospitalar.',
    buttonText: 'Conferir',
    color: 'bg-[#1a3a4a]',
  },
]

export function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 6000)
    return () => clearInterval(timer)
  }, [])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  return (
    <section className="relative pt-32 lg:pt-40">
      {/* Hero Slider */}
      <div className="relative h-[600px] lg:h-[700px] overflow-hidden">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            {/* Background Image */}
            <div 
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-[#1a3a4a]/90 via-[#1a3a4a]/70 to-transparent" />
            </div>

            {/* Content */}
            <div className="relative h-full container mx-auto px-4 flex items-center">
              <div className="max-w-2xl text-white">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                  {slide.title}{' '}
                  <span className="text-primary">{slide.highlight}</span>
                </h1>
                <p className="text-lg md:text-xl text-white/90 mb-8 leading-relaxed">
                  {slide.description}
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-8">
                    Agendar Consulta
                  </Button>
                  <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                    Conheça o Hospital
                  </Button>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/30 transition-colors"
          aria-label="Slide anterior"
        >
          <ChevronLeft className="h-6 w-6" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/30 transition-colors"
          aria-label="Próximo slide"
        >
          <ChevronRight className="h-6 w-6" />
        </button>

        {/* Dots */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-3">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                index === currentSlide 
                  ? 'bg-primary w-8' 
                  : 'bg-white/50 hover:bg-white/70'
              }`}
              aria-label={`Ir para slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Quick Actions Cards */}
      <div className="container mx-auto px-4 -mt-24 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {quickActions.map((action, index) => (
            <div
              key={index}
              className={`${action.color} rounded-xl p-6 text-white shadow-xl hover:shadow-2xl transition-all hover:-translate-y-1 group`}
            >
              <div className="w-14 h-14 rounded-xl bg-white/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <action.icon className="h-7 w-7" />
              </div>
              <h3 className="text-lg font-semibold mb-2 leading-tight">{action.title}</h3>
              <p className="text-white/80 text-sm mb-4 leading-relaxed">{action.description}</p>
              {action.phone && (
                <p className="text-sm font-medium mb-3">{action.phone}</p>
              )}
              <Button 
                variant="secondary" 
                size="sm" 
                className="bg-white/20 hover:bg-white/30 text-white border-0"
              >
                {action.buttonText}
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
