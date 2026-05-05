import { ProductCard } from './ProductCard';
import type { Product } from '../types';

interface ProductGridProps {
  products: Product[];
  loading?: boolean;
}

// Loading skeleton component
const ProductCardSkeleton = () => (
  <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
    <div className="skeleton h-64 w-full" />
    <div className="p-4 space-y-3">
      <div className="skeleton h-4 w-20" />
      <div className="skeleton h-4 w-full" />
      <div className="skeleton h-4 w-3/4" />
      <div className="skeleton h-4 w-16" />
      <div className="flex justify-between items-center">
        <div className="skeleton h-6 w-20" />
        <div className="skeleton h-8 w-16" />
      </div>
    </div>
  </div>
);

export const ProductGrid = ({ products, loading = false }: ProductGridProps) => {
  if (loading) {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {Array.from({ length: 8 }).map((_, index) => (
          <ProductCardSkeleton key={index} />
        ))}
      </div>
    );
  }

  if (products.length === 0) {
    return (
      <div className="text-center py-12">
        <div className="text-gray-500 text-lg mb-2">No products found</div>
        <p className="text-gray-400">Try adjusting your filters or search terms</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};
