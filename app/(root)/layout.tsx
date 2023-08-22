import { ClerkProvider } from '@clerk/nextjs'
import '../globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import Topbar from '@/components/shared/Topbar'
import Bottombar from '@/components/shared/Bottombar'
import Leftbar from '@/components/shared/Leftbar'
import Rightbar from '@/components/shared/Rightbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Threads',
  discription: ' A Next.js 13 Meta Threads Application'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={inter.className}>
          <Topbar />
          <main>
            <Leftbar />
            <section className="main-container">
              <div className="w-full max-w-4xl">
                {children}
              </div>
            </section>

            
            <Rightbar />
          </main>
          <Bottombar />
        </body>
      </html>
    </ClerkProvider>
  )
}
