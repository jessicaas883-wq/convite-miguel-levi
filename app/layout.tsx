import type { Metadata, Viewport } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Missão Nº 01 — O Incrível Miguel faz 1 aninho',
  description:
    'Convite oficial da Missão Nº 01: O Incrível Miguel completa 1 aninho! 25 de outubro de 2026, 16:00, no Espaço Dolphin.',
  generator: 'v0.app',
}

export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: '#0b0b0d',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" className="dark scroll-smooth">
      <body className="bg-background font-sans antialiased">
        {children}
      </body>
    </html>
  )
}
