import { Button } from '@/components/ui/button'
import { Phone, Calendar, ArrowRight } from 'lucide-react'

export function CTASection() {
  return (
    <section className="py-20 bg-gradient-to-r from-primary to-secondary relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-72 h-72 bg-white rounded-full -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full translate-x-1/3 translate-y-1/3" />
      </div>

      <div className="container mx-auto px-4 relative">
        <div className="max-w-4xl mx-auto text-center text-primary-foreground">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Agende sua consulta agora mesmo
          </h2>
          <p className="text-lg md:text-xl opacity-90 mb-10 leading-relaxed">
            Nossa equipe está pronta para cuidar da sua saúde com excelência e carinho. 
            Entre em contato e marque sua consulta ou exame.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Button 
              size="lg" 
              className="bg-white text-primary hover:bg-white/90 px-8"
            >
              <Calendar className="mr-2 h-5 w-5" />
              Agendar Consulta
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white text-white hover:bg-white hover:text-primary px-8"
            >
              <Phone className="mr-2 h-5 w-5" />
              +55 (91) 3084-7533
            </Button>
          </div>

          {/* Contact Cards */}
          <div className="grid sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-left">
              <h3 className="font-semibold text-lg mb-2">Agendamento de Consultas</h3>
              <p className="text-sm opacity-80 mb-3">Segunda a Sexta: 7h às 19h</p>
              <p className="font-medium text-lg">+55 (91) 3084-7533</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-left">
              <h3 className="font-semibold text-lg mb-2">Resultado de Exames</h3>
              <p className="text-sm opacity-80 mb-3">Disponível 24 horas online</p>
              <p className="font-medium text-lg">+55 (91) 3194-1133</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
