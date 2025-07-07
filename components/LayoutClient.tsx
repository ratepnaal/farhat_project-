"use client"
import { motion, AnimatePresence } from 'framer-motion'

export default function LayoutClient({ children }: { children: React.ReactNode }) {
  return (
    <AnimatePresence mode="wait">
      <motion.main
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 15 }}
        transition={{ duration: 0.5 }}
        key={typeof window !== 'undefined' ? window.location.pathname : ''}
      >
        {children}
      </motion.main>
    </AnimatePresence>
  )
} 