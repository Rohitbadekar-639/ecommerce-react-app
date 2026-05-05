import type { Product } from '../types';
import { mockProducts } from './mockData';

// Simulate API delay
const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

export const api = {
  // Get all products
  getProducts: async (): Promise<Product[]> => {
    await delay(800); // Simulate network delay
    return mockProducts;
  },

  // Get product by ID
  getProductById: async (id: number): Promise<Product | null> => {
    await delay(300);
    return mockProducts.find(product => product.id === id) || null;
  },

  // Get products by category
  getProductsByCategory: async (category: string): Promise<Product[]> => {
    await delay(500);
    if (category === 'All') return mockProducts;
    return mockProducts.filter(product => product.category === category);
  },

  // Search products
  searchProducts: async (query: string): Promise<Product[]> => {
    await delay(400);
    const lowercaseQuery = query.toLowerCase();
    return mockProducts.filter(product =>
      product.title.toLowerCase().includes(lowercaseQuery) ||
      product.description.toLowerCase().includes(lowercaseQuery) ||
      product.category.toLowerCase().includes(lowercaseQuery)
    );
  }
};
