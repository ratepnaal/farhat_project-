'use client';

import { useProductModal } from '@/hooks/use-product-modal';
import Image from 'next/image';
import { X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { usePathname } from 'next/navigation';
import { useEffect } from 'react';

export function ProductModal() {
  const { isOpen, onClose, product } = useProductModal();
  const pathname = usePathname();
  const isArabic = pathname.startsWith('/ar');

  // Close modal on ESC key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      // Prevent body scroll when modal is open
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!product) {
    return null;
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
        >
          {/* Backdrop */}
          <motion.div 
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={onClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />
          
          {/* Modal */}
          <motion.div 
            className={`relative bg-white dark:bg-gray-900 rounded-xl shadow-2xl max-w-md w-full max-h-[90vh] overflow-y-auto ${isArabic ? 'text-right' : 'text-left'}`}
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className={`absolute top-4 z-10 p-2 rounded-full bg-white/80 dark:bg-gray-800/80 hover:bg-white dark:hover:bg-gray-800 backdrop-blur-sm transition-all duration-200 shadow-lg ${isArabic ? 'left-4' : 'right-4'}`}
              aria-label={isArabic ? 'إغلاق' : 'Close'}
            >
              <X className="w-5 h-5 text-gray-600 dark:text-gray-400" />
            </button>

            {/* Content */}
            <div className="p-6">
              {/* Title */}
              <h2 id="modal-title" className={`text-2xl font-bold text-gray-900 dark:text-white mb-4 text-center ${isArabic ? 'pr-10' : 'pl-10'}`}>
                {product.name}
              </h2>

              {/* Image */}
              <div className="relative w-full h-64 rounded-lg overflow-hidden mb-6 shadow-lg">
                            <Image 
              src={product.image} 
              alt={product.altText || product.name} 
              fill 
              className="object-cover hover:scale-105 transition-transform duration-300"
            />
              </div>

              {/* Description */}
              <p className="text-gray-600 dark:text-gray-400 mb-6 text-center leading-relaxed">
                {product.description}
              </p>

              {/* Price */}
              <div className="flex items-center justify-center gap-4 mb-6">
                {product.old_price && (
                  <p className="text-lg text-gray-500 line-through font-medium">
                    {product.old_price}
                  </p>
                )}
                <p className="text-3xl font-bold text-primary-600 dark:text-primary-400">
                  {product.new_price}
                </p>
              </div>

              {/* WhatsApp Button */}
              <motion.a 
                href={`https://wa.me/963945712929?text=مرحباً، أنا مهتم بالمنتج: ${product.name}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-4 px-6 rounded-lg text-center block transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                💬 {isArabic ? 'اطلب عبر واتساب' : 'Order via WhatsApp'}
              </motion.a>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
} 