import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const poppins = Poppins({ 
  subsets: ["latin"],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-poppins'
})

export const metadata: Metadata = {
  title: 'Hospital Souls Like de Belém - HAB',
  description: 'Hospital Souls Like de Belém - Cuidando da sua saúde com excelência e carinho. Atendimento 24 horas, especialidades médicas, exames e muito mais.',
  keywords: 'hospital, belém, adventista, saúde, consultas, exames, emergência, especialidades médicas',
  openGraph: {
    title: 'Hospital Souls Like de Belém - HAB',
    description: 'Cuidando da sua saúde com excelência e carinho.',
    type: 'website',
  },
}

export const viewport = {
  themeColor: '#0d9488',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${poppins.variable} font-sans antialiased`}>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
