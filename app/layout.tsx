import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/ThemeProvider'
import LayoutClient from '@/components/LayoutClient'
import { ProductModal } from '@/components/ProductModal'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    default: 'Farhat Savings Center | Groceries & Services in Al-Zahira, Damascus',
    template: '%s | Farhat Savings Center'
  },
  description: 'Your first destination for savings in Al-Zahira! We offer groceries, detergents, bakery items, bill payments, and wholesale deals with free local delivery and Damascus-wide delivery via Bee Order.',
  keywords: ['grocery store', 'Al-Zahira', 'Damascus', 'Syria', 'groceries', 'detergents', 'bakery', 'bill payments', 'wholesale', 'delivery'],
  authors: [{ name: 'Farhat Savings Center' }],
  creator: 'Farhat Savings Center',
  publisher: 'Farhat Savings Center',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://farhat-savings-center.com'),
  alternates: {
    canonical: '/',
    languages: {
      'en': '/en',
      'ar': '/ar',
    },
  },
  openGraph: {
    title: 'Farhat Savings Center | Groceries & Services in Al-Zahira, Damascus',
    description: 'Your first destination for savings in Al-Zahira! We offer groceries, detergents, bakery items, bill payments, and wholesale deals.',
    url: 'https://farhat-savings-center.com',
    siteName: 'Farhat Savings Center',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Farhat Savings Center | Groceries & Services in Al-Zahira, Damascus',
    description: 'Your first destination for savings in Al-Zahira! We offer groceries, detergents, bakery items, bill payments, and wholesale deals.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "GroceryStore",
              "name": "Farhat Savings Center",
              "alternateName": "سنتر فرحات للتوفير",
              "description": "Your first destination for savings in Al-Zahira! We offer groceries, detergents, bakery items, bill payments, and wholesale deals.",
              "url": "https://farhat-savings-center.com",
              "telephone": "+963-11-1234567",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Al-Zahira",
                "addressLocality": "Damascus",
                "addressCountry": "Syria"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": "33.5138",
                "longitude": "36.2765"
              },
              "openingHours": [
                "Sa-Th 10:00-23:00",
                "Fr 16:00-23:00"
              ],
              "priceRange": "$$",
              "paymentAccepted": ["Cash", "Credit Card", "Fattoura"],
              "currenciesAccepted": "SYP",
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Grocery Store Products",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Product",
                      "name": "Groceries"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Product",
                      "name": "Detergents"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Product",
                      "name": "Bakery Items"
                    }
                  }
                ]
              },
              "sameAs": [
                "https://www.facebook.com/farhatsavingscenter",
                "https://www.instagram.com/farhatsavingscenter"
              ]
            })
          }}
        />
      </head>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <LayoutClient>
            {children}
          </LayoutClient>
          <ProductModal />
        </ThemeProvider>
      </body>
    </html>
  )
} 