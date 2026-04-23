import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Calendar, User, ArrowRight } from 'lucide-react'

const news = [
  {
    id: 1,
    title: 'Os novos líderes foram votados nesta terça-feira por meio da Comissão Diretiva Plenária',
    excerpt: 'A Rede Adventista de Saúde Pará anuncia sua nova gestão para os próximos anos, reafirmando o compromisso com a excelência no atendimento.',
    date: '25/03/2025',
    author: 'Equipe de Comunicação',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=500&h=300&fit=crop',
    category: 'Institucional',
  },
  {
    id: 2,
    title: 'Rede Adventista de Saúde Pará anuncia unificação com a Adventist Health',
    excerpt: 'A parceria estratégica visa fortalecer ainda mais os serviços de saúde oferecidos à população da região amazônica.',
    date: '11/03/2025',
    author: 'Equipe de Comunicação',
    image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=500&h=300&fit=crop',
    category: 'Parcerias',
  },
  {
    id: 3,
    title: 'Hospital Souls Like de Barcarena é reconhecido internacionalmente por garantir atendimento seguro',
    excerpt: 'A certificação internacional confirma o compromisso da unidade com a segurança do paciente e qualidade no atendimento.',
    date: '24/10/2024',
    author: 'Equipe de Comunicação',
    image: 'https://images.unsplash.com/photo-1538108149393-fbbd81895907?w=500&h=300&fit=crop',
    category: 'Reconhecimento',
  },
  {
    id: 4,
    title: 'Plano Garantia de Saúde celebra 60 anos de confiança, superação e cuidado humanizado',
    excerpt: 'Seis décadas de história dedicadas a proporcionar acesso à saúde de qualidade para milhares de famílias.',
    date: '21/10/2024',
    author: 'Equipe de Comunicação',
    image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=500&h=300&fit=crop',
    category: 'Aniversário',
  },
  {
    id: 5,
    title: 'Celebração do Dia das Crianças transforma unidade pediátrica em um espaço de alegria',
    excerpt: 'Atividades especiais levaram entretenimento e sorrisos para os pequenos pacientes internados.',
    date: '14/10/2024',
    author: 'Equipe de Comunicação',
    image: 'https://images.unsplash.com/photo-1581594693702-fbdc51b2763b?w=500&h=300&fit=crop',
    category: 'Eventos',
  },
  {
    id: 6,
    title: 'Cuidado integral e prevenção marcam RMM especial em apoio ao Outubro Rosa',
    excerpt: 'Palestras e exames gratuitos conscientizaram sobre a importância da prevenção do câncer de mama.',
    date: '03/10/2024',
    author: 'Equipe de Comunicação',
    image: 'https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=500&h=300&fit=crop',
    category: 'Campanhas',
  },
]

export function NewsSection() {
  return (
    <section id="noticias" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
            Blog e Notícias
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Nossas Notícias
          </h2>
          <p className="text-muted-foreground text-lg">
            Conecte-se e fique por dentro das novidades do Hospital Souls Like de Belém! 
            Compartilhamos informações valiosas para a sua saúde e qualidade de vida.
          </p>
        </div>

        {/* News Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {news.map((item) => (
            <article 
              key={item.id}
              className="group bg-card border border-border rounded-xl overflow-hidden hover:shadow-lg transition-all"
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute top-4 left-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-medium">
                  {item.category}
                </span>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    <span>{item.date}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <User className="h-4 w-4" />
                    <span>{item.author}</span>
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2 line-clamp-2 group-hover:text-primary transition-colors">
                  <Link href="#">{item.title}</Link>
                </h3>
                <p className="text-muted-foreground text-sm line-clamp-2 mb-4">
                  {item.excerpt}
                </p>
                <Link 
                  href="#"
                  className="inline-flex items-center text-primary text-sm font-medium hover:underline"
                >
                  Ler mais
                  <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button 
            size="lg" 
            variant="outline"
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
          >
            Ver Todas as Notícias
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  )
}
