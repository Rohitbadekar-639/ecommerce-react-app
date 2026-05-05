import { useState, useEffect } from 'react';
import type { Product, SortOption, FilterCategory } from '../types';
import { api } from '../services/api';
import { debounce } from '../utils/format';

export const useProducts = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<FilterCategory>('All');
  const [sortBy, setSortBy] = useState<SortOption>('name');

  // Fetch all products
  const fetchProducts = async () => {
    try {
      setLoading(true);
      const data = await api.getProducts();
      setProducts(data);
      setError(null);
    } catch (err) {
      setError('Failed to fetch products');
      console.error('Error fetching products:', err);
    } finally {
      setLoading(false);
    }
  };

  // Filter and sort products
  const getFilteredAndSortedProducts = () => {
    let filtered = [...products];

    // Filter by category
    if (selectedCategory !== 'All') {
      filtered = filtered.filter(product => product.category === selectedCategory);
    }

    // Filter by search query
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(product =>
        product.title.toLowerCase().includes(query) ||
        product.description.toLowerCase().includes(query) ||
        product.category.toLowerCase().includes(query)
      );
    }

    // Sort products
    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'price-low':
          return a.price - b.price;
        case 'price-high':
          return b.price - a.price;
        case 'rating':
          return b.rating.rate - a.rating.rate;
        case 'name':
        default:
          return a.title.localeCompare(b.title);
      }
    });

    return filtered;
  };

  // Debounced search
  const debouncedSearch = debounce((query: string) => {
    setSearchQuery(query);
  }, 300);

  // Initial fetch
  useEffect(() => {
    fetchProducts();
  }, []);

  return {
    products: getFilteredAndSortedProducts(),
    loading,
    error,
    searchQuery,
    setSearchQuery: debouncedSearch,
    selectedCategory,
    setSelectedCategory,
    sortBy,
    setSortBy,
    refetch: fetchProducts
  };
};
