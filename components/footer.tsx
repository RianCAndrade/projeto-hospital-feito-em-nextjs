import Link from 'next/link'
import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Youtube, Linkedin } from 'lucide-react'

const quickLinks = [
  { name: 'Sobre Nós', href: '#sobre' },
  { name: 'Serviços', href: '#servicos' },
  { name: 'Especialidades', href: '#especialidades' },
  { name: 'Convênios', href: '#convenios' },
  { name: 'Notícias', href: '#noticias' },
  { name: 'Trabalhe Conosco', href: '#trabalhe-conosco' },
]

const services = [
  { name: 'Pronto Atendimento', href: '#' },
  { name: 'Centro Cirúrgico', href: '#' },
  { name: 'Maternidade', href: '#' },
  { name: 'UTI', href: '#' },
  { name: 'Laboratório', href: '#' },
  { name: 'Diagnóstico por Imagem', href: '#' },
]

const socialLinks = [
  { name: 'Facebook', icon: Facebook, href: '#' },
  { name: 'Instagram', icon: Instagram, href: '#' },
  { name: 'Youtube', icon: Youtube, href: '#' },
  { name: 'LinkedIn', icon: Linkedin, href: '#' },
]

export function Footer() {
  return (
    <footer className="bg-[#1a3a4a] text-white">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* About Column */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-xl">H</span>
              </div>
              <div>
                <h3 className="text-lg font-bold leading-tight">Hospital Souls Like</h3>
                <p className="text-sm text-white/70">de Belém</p>
              </div>
            </div>
            <p className="text-white/80 text-sm leading-relaxed mb-6">
              Há mais de 70 anos cuidando da saúde da população de Belém e região com excelência, 
              carinho e dedicação. Nossa missão é proporcionar assistência médica de qualidade 
              seguindo os princípios cristãos de amor ao próximo.
            </p>
            <div className="flex items-center gap-3">
              {socialLinks.map((social) => (
                <Link
                  key={social.name}
                  href={social.href}
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors"
                  aria-label={social.name}
                >
                  <social.icon className="h-5 w-5" />
                </Link>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6 relative">
              Links Rápidos
              <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-primary -mb-2"></span>
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href}
                    className="text-white/80 hover:text-primary transition-colors text-sm flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6 relative">
              Nossos Serviços
              <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-primary -mb-2"></span>
            </h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.name}>
                  <Link 
                    href={service.href}
                    className="text-white/80 hover:text-primary transition-colors text-sm flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6 relative">
              Contato
              <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-primary -mb-2"></span>
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                  <Phone className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-white/60">Telefone</p>
                  <p className="text-white font-medium">+55 (91) 3084-8686</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                  <Mail className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-white/60">E-mail</p>
                  <p className="text-white font-medium">atendimento@hab.org.br</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                  <MapPin className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-white/60">Endereço</p>
                  <p className="text-white font-medium">
                    Av. Almirante Barroso, 1758<br />
                    Marco, Belém - PA<br />
                    CEP: 66093-904
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                  <Clock className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-white/60">Horário</p>
                  <p className="text-white font-medium">Atendimento 24 horas</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-white/60 text-sm text-center md:text-left">
              © {new Date().getFullYear()} Hospital Souls Like de Belém. Todos os direitos reservados.
            </p>
            <div className="flex items-center gap-6 text-sm">
              <Link href="#" className="text-white/60 hover:text-primary transition-colors">
                Política de Privacidade
              </Link>
              <Link href="#" className="text-white/60 hover:text-primary transition-colors">
                Termos de Uso
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
