import { Button } from '@/components/ui/button'
import { MapPin, Phone, ArrowRight } from 'lucide-react'

const units = [
  {
    name: 'Hospital Souls Like de Belém',
    description: 'Nossa unidade principal oferece uma ampla gama de serviços médicos, incluindo pronto atendimento 24 horas, centro cirúrgico, maternidade, UTI e muito mais.',
    address: 'Av. Almirante Barroso, 1758 - Marco, Belém - PA',
    phone: '+55 (91) 3084-8686',
    image: 'https://images.unsplash.com/photo-1587351021759-3e566b6af7cc?w=600&h=400&fit=crop',
    featured: true,
  },
  {
    name: 'Hospital Souls Like de Barcarena',
    description: 'Conheça a unidade hospitalar da RAS/PA localizada em Barcarena. Referência em assistência médica hospitalar na região com atendimento de qualidade.',
    address: 'R. Cônego Jerônimo Pimentel, Quadra 329 - Vila dos Cabanos, Barcarena - PA',
    phone: '+55 (91) 3754-1100',
    image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=600&h=400&fit=crop',
    featured: false,
  },
]

const additionalServices = [
  {
    title: 'Coleta Domiciliar',
    description: 'Serviço de coleta laboratorial no conforto do seu lar. Contamos com equipe qualificada e equipamentos de última geração.',
    image: 'https://images.unsplash.com/photo-1581595220892-b0739db3ba8c?w=500&h=300&fit=crop',
  },
  {
    title: 'Hotelaria Hospitalar',
    description: 'Novo conceito de internação com arquitetura moderna e acolhedora. Experiência de primeira classe durante sua estadia.',
    image: 'https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=500&h=300&fit=crop',
  },
]

export function UnitsSection() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
            Nossas Unidades
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Encontre a unidade mais próxima de você
          </h2>
          <p className="text-muted-foreground text-lg">
            A Rede Adventista de Saúde/Pará possui unidades estrategicamente localizadas para melhor atender você e sua família.
          </p>
        </div>

        {/* Units Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {units.map((unit, index) => (
            <div 
              key={index}
              className={`bg-card rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow ${
                unit.featured ? 'ring-2 ring-primary' : ''
              }`}
            >
              <div className="relative h-56">
                <img 
                  src={unit.image} 
                  alt={unit.name}
                  className="w-full h-full object-cover"
                />
                {unit.featured && (
                  <span className="absolute top-4 right-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-medium">
                    Unidade Principal
                  </span>
                )}
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-3">{unit.name}</h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">{unit.description}</p>
                
                <div className="space-y-3 mb-6">
                  <div className="flex items-start gap-3">
                    <MapPin className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-sm text-muted-foreground">{unit.address}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="h-5 w-5 text-primary shrink-0" />
                    <span className="text-sm font-medium text-foreground">{unit.phone}</span>
                  </div>
                </div>

                <Button className="w-full bg-primary hover:bg-primary/90">
                  Saiba Mais
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Services */}
        <div className="grid md:grid-cols-2 gap-8">
          {additionalServices.map((service, index) => (
            <div 
              key={index}
              className="group relative rounded-2xl overflow-hidden h-72"
            >
              <img 
                src={service.image} 
                alt={service.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1a3a4a]/90 via-[#1a3a4a]/50 to-transparent" />
              <div className="absolute inset-0 p-8 flex flex-col justify-end">
                <h3 className="text-2xl font-bold text-white mb-2">{service.title}</h3>
                <p className="text-white/80 mb-4 leading-relaxed">{service.description}</p>
                <Button 
                  variant="outline" 
                  className="w-fit border-white text-white hover:bg-white hover:text-[#1a3a4a]"
                >
                  Conheça o Serviço
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
