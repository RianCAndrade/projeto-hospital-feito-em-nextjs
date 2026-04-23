'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X, Phone, Mail, MapPin, Clock, Facebook, Instagram, Youtube, ChevronDown } from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'

const navigation = [
  { name: 'Início', href: '#' },
  { 
    name: 'Institucional', 
    href: '#',
    submenu: [
      { name: 'Sobre Nós', href: '#sobre' },
      { name: 'Nossa História', href: '#historia' },
      { name: 'Missão e Valores', href: '#missao' },
    ]
  },
  { 
    name: 'Serviços', 
    href: '#servicos',
    submenu: [
      { name: 'Pronto Atendimento', href: '#pronto-atendimento' },
      { name: 'Centro Cirúrgico', href: '#centro-cirurgico' },
      { name: 'Maternidade', href: '#maternidade' },
      { name: 'UTI', href: '#uti' },
      { name: 'Laboratório', href: '#laboratorio' },
    ]
  },
  { name: 'Especialidades', href: '#especialidades' },
  { name: 'Convênios', href: '#convenios' },
  { name: 'Notícias', href: '#noticias' },
  { name: 'Contato', href: '#contato' },
]

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Top Bar */}
      <div className="bg-primary text-primary-foreground py-2 hidden lg:block">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <span>+55 (91) 3084-8686</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <span>atendimento@hab.org.br</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                <span>Av. Almirante Barroso, 1758 - Marco, Belém - PA</span>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                <span>Atendimento 24 horas</span>
              </div>
              <div className="flex items-center gap-3 ml-4">
                <Link href="#" className="hover:opacity-80 transition-opacity">
                  <Facebook className="h-4 w-4" />
                </Link>
                <Link href="#" className="hover:opacity-80 transition-opacity">
                  <Instagram className="h-4 w-4" />
                </Link>
                <Link href="#" className="hover:opacity-80 transition-opacity">
                  <Youtube className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className={`transition-all duration-300 ${
        isScrolled 
          ? 'bg-background/95 backdrop-blur-md shadow-lg' 
          : 'bg-background/90 backdrop-blur-sm'
      }`}>
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3">
              <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-xl">H</span>
              </div>
              <div className="hidden sm:block">
                <h1 className="text-lg font-bold text-foreground leading-tight">Hospital Souls Like</h1>
                <p className="text-xs text-muted-foreground">de Belém</p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1">
              {navigation.map((item) => (
                item.submenu ? (
                  <DropdownMenu key={item.name}>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" className="text-foreground hover:text-primary hover:bg-primary/10">
                        {item.name}
                        <ChevronDown className="ml-1 h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="start" className="w-48">
                      {item.submenu.map((subItem) => (
                        <DropdownMenuItem key={subItem.name} asChild>
                          <Link href={subItem.href} className="w-full">
                            {subItem.name}
                          </Link>
                        </DropdownMenuItem>
                      ))}
                    </DropdownMenuContent>
                  </DropdownMenu>
                ) : (
                  <Link key={item.name} href={item.href}>
                    <Button variant="ghost" className="text-foreground hover:text-primary hover:bg-primary/10">
                      {item.name}
                    </Button>
                  </Link>
                )
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="hidden lg:flex items-center gap-3">
              <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                Resultado de Exames
              </Button>
              <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
                Agendar Consulta
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg hover:bg-muted"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6 text-foreground" />
              ) : (
                <Menu className="h-6 w-6 text-foreground" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-background border-t border-border">
            <div className="container mx-auto px-4 py-4">
              <div className="flex flex-col gap-2">
                {navigation.map((item) => (
                  <div key={item.name}>
                    <Link
                      href={item.href}
                      className="block px-4 py-3 rounded-lg hover:bg-muted text-foreground font-medium"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                    {item.submenu && (
                      <div className="ml-4 mt-1 space-y-1">
                        {item.submenu.map((subItem) => (
                          <Link
                            key={subItem.name}
                            href={subItem.href}
                            className="block px-4 py-2 rounded-lg hover:bg-muted text-muted-foreground text-sm"
                            onClick={() => setIsMobileMenuOpen(false)}
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
                <div className="flex flex-col gap-2 mt-4 pt-4 border-t border-border">
                  <Button variant="outline" className="w-full border-primary text-primary">
                    Resultado de Exames
                  </Button>
                  <Button className="w-full bg-primary text-primary-foreground">
                    Agendar Consulta
                  </Button>
                </div>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
