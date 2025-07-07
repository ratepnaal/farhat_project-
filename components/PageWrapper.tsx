'use client'

import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'
import { getDirection, type Locale } from '@/lib/translations'

interface PageWrapperProps {
  locale: Locale
  children: React.ReactNode
}

export function PageWrapper({ locale, children }: PageWrapperProps) {
  const dir = getDirection(locale)

  return (
    <div className="min-h-screen flex flex-col" dir={dir}>
      <Navbar locale={locale} />
      <main className="flex-1">
        {children}
      </main>
      <Footer locale={locale} />
    </div>
  )
} 