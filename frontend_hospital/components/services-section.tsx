import { Button } from '@/components/ui/button'
import { 
  Scan, 
  Scissors, 
  Ambulance, 
  Baby, 
  Bed, 
  FlaskConical,
  HeartPulse,
  Pill,
  Stethoscope,
  Activity,
  ArrowRight
} from 'lucide-react'

const services = [
  {
    icon: Scan,
    title: 'Diagnóstico de Imagem',
    description: 'Exames de imagem com equipamentos de última geração para diagnósticos precisos.',
  },
  {
    icon: Scissors,
    title: 'Centro Cirúrgico',
    description: 'Infraestrutura completa para procedimentos cirúrgicos de diversas especialidades.',
  },
  {
    icon: Ambulance,
    title: 'Pronto Atendimento',
    description: 'Atendimento de urgência e emergência 24 horas, todos os dias da semana.',
  },
  {
    icon: Baby,
    title: 'Maternidade',
    description: 'Acompanhamento completo da gestação ao parto com estrutura humanizada.',
  },
  {
    icon: Bed,
    title: 'Internação',
    description: 'Quartos confortáveis e equipe dedicada para sua recuperação.',
  },
  {
    icon: FlaskConical,
    title: 'Laboratórios',
    description: 'Análises clínicas com tecnologia avançada e resultados rápidos.',
  },
  {
    icon: HeartPulse,
    title: 'Centro Cardiológico',
    description: 'Diagnóstico e tratamento especializado em cardiologia.',
  },
  {
    icon: Pill,
    title: 'Oncologia/Hematologia',
    description: 'Tratamento humanizado e especializado para pacientes oncológicos.',
  },
  {
    icon: Stethoscope,
    title: 'Consultórios',
    description: 'Consultas médicas em diversas especialidades com profissionais qualificados.',
  },
  {
    icon: Activity,
    title: 'U.T.I',
    description: 'Unidade de Terapia Intensiva com monitoramento 24 horas.',
  },
]

export function ServicesSection() {
  return (
    <section id="servicos" className="py-20 bg-[#1a3a4a] text-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-2 bg-white/10 text-primary rounded-full text-sm font-medium mb-4">
            Nossos Serviços
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Serviços de Excelência
          </h2>
          <p className="text-white/80 text-lg">
            Oferecemos uma estrutura completa para atender todas as suas necessidades de saúde, 
            com tecnologia de ponta e profissionais altamente qualificados.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-5 hover:bg-white/10 hover:border-primary/50 transition-all cursor-pointer text-center"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/20 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary transition-colors">
                <service.icon className="h-7 w-7 text-primary group-hover:text-primary-foreground transition-colors" />
              </div>
              <h3 className="text-sm font-semibold mb-2 group-hover:text-primary transition-colors">
                {service.title}
              </h3>
              <p className="text-white/60 text-xs leading-relaxed hidden md:block">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <Button 
            size="lg" 
            className="bg-primary hover:bg-primary/90 text-primary-foreground"
          >
            Conheça Todos os Serviços
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  )
}
