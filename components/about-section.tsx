import { Button } from '@/components/ui/button'
import { Building2, Users, Award, Heart } from 'lucide-react'

const features = [
  {
    icon: Building2,
    title: 'Infraestrutura Moderna',
    description: 'Instalações de última geração para melhor atendê-lo.',
  },
  {
    icon: Users,
    title: 'Equipe Qualificada',
    description: 'Profissionais altamente capacitados e dedicados.',
  },
  {
    icon: Award,
    title: 'Excelência Médica',
    description: 'Referência em assistência médica hospitalar na região.',
  },
  {
    icon: Heart,
    title: 'Atendimento Humanizado',
    description: 'Cuidado com carinho e respeito ao próximo.',
  },
]

export function AboutSection() {
  return (
    <section id="sobre" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Main About */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
              Rede Adventista de Saúde
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 leading-tight">
              Nossa rede hospitalar é composta pelo Hospital Souls Like de Belém e o Hospital Souls Like de Barcarena
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              Aqui, o cuidado com a sua saúde é a nossa prioridade! Faça parte da Rede Adventista de Saúde/Pará (RAS/PA) 
              e tenha acesso a uma equipe de profissionais altamente qualificados, instalações modernas e 
              equipamentos de última geração.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Tudo isso para garantir a sua saúde e satisfação. Nossa missão é proporcionar 
              assistência médica de qualidade seguindo os princípios cristãos de amor ao próximo.
            </p>
            <Button size="lg" className="bg-primary hover:bg-primary/90">
              Conheça Nossa História
            </Button>
          </div>

          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="rounded-2xl overflow-hidden shadow-lg">
                  <img 
                    src="https://images.unsplash.com/photo-1538108149393-fbbd81895907?w=400&h=300&fit=crop" 
                    alt="Fachada do hospital"
                    className="w-full h-48 object-cover"
                  />
                </div>
                <div className="rounded-2xl overflow-hidden shadow-lg">
                  <img 
                    src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=400&h=250&fit=crop" 
                    alt="Equipe médica"
                    className="w-full h-40 object-cover"
                  />
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="rounded-2xl overflow-hidden shadow-lg">
                  <img 
                    src="https://images.unsplash.com/photo-1551076805-e1869033e561?w=400&h=250&fit=crop" 
                    alt="Tecnologia médica"
                    className="w-full h-40 object-cover"
                  />
                </div>
                <div className="rounded-2xl overflow-hidden shadow-lg">
                  <img 
                    src="https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=400&h=300&fit=crop" 
                    alt="Atendimento hospitalar"
                    className="w-full h-48 object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Floating Card */}
            <div className="absolute -bottom-6 -left-6 bg-primary text-primary-foreground p-6 rounded-2xl shadow-xl max-w-[200px]">
              <p className="text-4xl font-bold mb-1">70+</p>
              <p className="text-sm opacity-90">Anos cuidando da sua saúde</p>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-card border border-border rounded-xl p-6 hover:shadow-lg transition-shadow group"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                <feature.icon className="h-7 w-7 text-primary group-hover:text-primary-foreground" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">{feature.title}</h3>
              <p className="text-muted-foreground text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
