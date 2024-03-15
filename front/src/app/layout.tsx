import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Provider from "./Provider"

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: '어떤대스크',
  description: 'Generated by create next app',
  icons: {
    icon: "/logo.png"
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Provider>{children}</Provider></body>
    </html>
  )
}