import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { CartItem, CartState } from '../types';

interface CartStore extends CartState {
  // Actions
  addItem: (item: CartItem) => void;
  removeItem: (id: number) => void;
  updateQuantity: (id: number, quantity: number) => void;
  clearCart: () => void;
  getTotalItems: () => number;
  getTotalPrice: () => number;
}

const calculateTotals = (items: CartItem[]): { total: number; itemCount: number } => {
  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const itemCount = items.reduce((sum, item) => sum + item.quantity, 0);
  return { total, itemCount };
};

export const useCartStore = create<CartStore>()(
  persist(
    (set, get) => ({
      // Initial state
      items: [],
      total: 0,
      itemCount: 0,

      // Actions
      addItem: (item: CartItem) => {
        const { items } = get();
        const existingItem = items.find(cartItem => cartItem.id === item.id);

        let newItems: CartItem[];
        if (existingItem) {
          newItems = items.map(cartItem =>
            cartItem.id === item.id
              ? { ...cartItem, quantity: cartItem.quantity + item.quantity }
              : cartItem
          );
        } else {
          newItems = [...items, item];
        }

        const { total, itemCount } = calculateTotals(newItems);
        set({ items: newItems, total, itemCount });
      },

      removeItem: (id: number) => {
        const { items } = get();
        const newItems = items.filter(item => item.id !== id);
        const { total, itemCount } = calculateTotals(newItems);
        set({ items: newItems, total, itemCount });
      },

      updateQuantity: (id: number, quantity: number) => {
        if (quantity <= 0) {
          get().removeItem(id);
          return;
        }

        const { items } = get();
        const newItems = items.map(item =>
          item.id === id ? { ...item, quantity } : item
        );
        const { total, itemCount } = calculateTotals(newItems);
        set({ items: newItems, total, itemCount });
      },

      clearCart: () => {
        set({ items: [], total: 0, itemCount: 0 });
      },

      getTotalItems: () => {
        return get().itemCount;
      },

      getTotalPrice: () => {
        return get().total;
      }
    }),
    {
      name: 'cart-storage', // localStorage key
      partialize: (state) => ({
        items: state.items,
        total: state.total,
        itemCount: state.itemCount
      })
    }
  )
);
