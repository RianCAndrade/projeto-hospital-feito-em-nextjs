'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { 
  Heart, 
  Baby, 
  Bone, 
  Brain, 
  Eye, 
  Stethoscope,
  Activity,
  Scan,
  Syringe,
  Pill,
  ArrowRight
} from 'lucide-react'

const specialties = [
  { icon: Stethoscope, name: 'Atenção Primária à Saúde', description: 'Cuidado integral e preventivo para toda a família.' },
  { icon: Heart, name: 'Clínica Cardíaca', description: 'Diagnóstico e tratamento de doenças cardiovasculares.' },
  { icon: Baby, name: 'Clínica Ginecológica', description: 'Saúde da mulher em todas as fases da vida.' },
  { icon: Bone, name: 'Ortopedia', description: 'Tratamento de problemas ósseos e musculares.' },
  { icon: Scan, name: 'Diagnóstico Preciso', description: 'Exames de imagem com tecnologia avançada.' },
  { icon: Activity, name: 'Centro de Reabilitação', description: 'Fisioterapia e reabilitação especializada.' },
  { icon: Brain, name: 'Neurologia', description: 'Diagnóstico e tratamento de distúrbios neurológicos.' },
  { icon: Eye, name: 'Oftalmologia', description: 'Cuidados completos para a saúde dos olhos.' },
  { icon: Syringe, name: 'Endocrinologia', description: 'Tratamento de doenças hormonais e metabólicas.' },
  { icon: Pill, name: 'Oncologia', description: 'Tratamento humanizado para pacientes oncológicos.' },
]

export function SpecialtiesSection() {
  const [showAll, setShowAll] = useState(false)
  const displayedSpecialties = showAll ? specialties : specialties.slice(0, 6)

  return (
    <section id="especialidades" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
            Especialidades Médicas
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Nossas Especialidades
          </h2>
          <p className="text-muted-foreground text-lg">
            No Hospital Souls Like de Belém, oferecemos uma ampla gama de especialidades médicas 
            para cuidar de você e de sua família com excelência e atenção individualizada.
          </p>
        </div>

        {/* Specialties Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {displayedSpecialties.map((specialty, index) => (
            <div
              key={index}
              className="group bg-card border border-border rounded-xl p-6 hover:shadow-lg hover:border-primary/50 transition-all cursor-pointer"
            >
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary transition-colors">
                  <specialty.icon className="h-7 w-7 text-primary group-hover:text-primary-foreground transition-colors" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-1 group-hover:text-primary transition-colors">
                    {specialty.name}
                  </h3>
                  <p className="text-muted-foreground text-sm">{specialty.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Show More Button */}
        <div className="text-center">
          <Button
            variant="outline"
            size="lg"
            onClick={() => setShowAll(!showAll)}
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
          >
            {showAll ? 'Ver Menos' : 'Ver Todas as Especialidades'}
            <ArrowRight className={`ml-2 h-4 w-4 transition-transform ${showAll ? 'rotate-90' : ''}`} />
          </Button>
        </div>
      </div>
    </section>
  )
}
