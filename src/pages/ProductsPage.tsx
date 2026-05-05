import { useState } from 'react';
import { Filter, Search } from 'lucide-react';
import { useProducts } from '../hooks/useProducts';
import { ProductGrid } from '../components/ProductGrid';
import { FilterSidebar } from '../components/FilterSidebar';

export const ProductsPage = () => {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [searchInput, setSearchInput] = useState('');
  
  const {
    products,
    loading,
    error,
    setSearchQuery,
    selectedCategory,
    setSelectedCategory,
    sortBy,
    setSortBy
  } = useProducts();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setSearchQuery(searchInput);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Products</h1>
          
          {/* Search Bar */}
          <form onSubmit={handleSearch} className="max-w-2xl mx-auto mb-6">
            <div className="relative">
              <input
                type="text"
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
                placeholder="Search for products..."
                className="w-full px-4 py-3 pl-12 pr-4 text-gray-900 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <button
                type="submit"
                className="absolute right-2 top-1/2 transform -translate-y-1/2 btn-primary px-4 py-2 text-sm"
              >
                Search
              </button>
            </div>
          </form>

          {/* Mobile Filter Toggle */}
          <div className="flex lg:hidden justify-between items-center mb-6">
            <button
              onClick={() => setIsFilterOpen(true)}
              className="btn-outline flex items-center space-x-2"
            >
              <Filter className="w-4 h-4" />
              <span>Filters</span>
            </button>
            
            {/* Results count */}
            <div className="text-sm text-gray-600">
              {loading ? 'Loading...' : `${products.length} products found`}
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex gap-8">
          {/* Sidebar - Desktop */}
          <div className="hidden lg:block w-72 flex-shrink-0">
            <FilterSidebar
              selectedCategory={selectedCategory}
              setSelectedCategory={setSelectedCategory}
              sortBy={sortBy}
              setSortBy={setSortBy}
              isOpen={false}
              onClose={() => {}}
            />
          </div>

          {/* Products */}
          <div className="flex-1">
            {/* Desktop Results Header */}
            <div className="hidden lg:flex justify-between items-center mb-6">
              <div className="text-sm text-gray-600">
                {loading ? 'Loading...' : `${products.length} products found`}
              </div>
            </div>

            {/* Error State */}
            {error && (
              <div className="text-center py-12">
                <div className="text-red-500 text-lg mb-2">Error loading products</div>
                <p className="text-gray-600">{error}</p>
              </div>
            )}

            {/* Products Grid */}
            <ProductGrid products={products} loading={loading} />
          </div>
        </div>
      </div>
    </div>
  );
};
