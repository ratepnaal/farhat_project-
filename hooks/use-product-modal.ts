import { create } from 'zustand';

interface Product {
  name: string;
  image: string;
  altText?: string;
  description: string;
  old_price?: string;
  new_price: string;
}

interface ProductModalStore {
  product: Product | null;
  isOpen: boolean;
  onOpen: (product: Product) => void;
  onClose: () => void;
}

export const useProductModal = create<ProductModalStore>((set) => ({
  product: null,
  isOpen: false,
  onOpen: (product) => set({ isOpen: true, product }),
  onClose: () => set({ isOpen: false, product: null }),
})); 