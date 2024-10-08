'use client';
import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';
import { motion } from 'framer-motion';
export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {/* Background wrapper */}
      <motion.div
        className="fixed inset-0 flex justify-center sm:px-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <motion.div
          className="flex w-full max-w-7xl lg:px-8"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          <div className="w-full bg-white ring-1 ring-zinc-100 dark:bg-zinc-900 dark:ring-zinc-300/20" />
        </motion.div>
      </motion.div>

      {/* Main content wrapper */}
      <motion.div
        className="relative flex w-full flex-col"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        {/* Header with animation */}
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <Header />
        </motion.div>

        {/* Main content */}
        <motion.main
          className="flex-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.9, ease: 'easeOut' }}
        >
          {children}
        </motion.main>

        {/* Footer with animation */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <Footer />
        </motion.div>
      </motion.div>
    </>
  );
}
