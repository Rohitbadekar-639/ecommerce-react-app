import { Filter, X } from 'lucide-react';
import type { FilterCategory, SortOption } from '../types';
import { categories } from '../services/mockData';

interface FilterSidebarProps {
  selectedCategory: FilterCategory;
  setSelectedCategory: (category: FilterCategory) => void;
  sortBy: SortOption;
  setSortBy: (sort: SortOption) => void;
  isOpen: boolean;
  onClose: () => void;
}

export const FilterSidebar = ({
  selectedCategory,
  setSelectedCategory,
  sortBy,
  setSortBy,
  isOpen,
  onClose
}: FilterSidebarProps) => {
  const sortOptions: { value: SortOption; label: string }[] = [
    { value: 'name', label: 'Name (A-Z)' },
    { value: 'price-low', label: 'Price (Low to High)' },
    { value: 'price-high', label: 'Price (High to Low)' },
    { value: 'rating', label: 'Highest Rated' }
  ];

  return (
    <>
      {/* Mobile backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <div className={`
        fixed lg:static inset-y-0 left-0 z-50 w-72 bg-white shadow-lg lg:shadow-none lg:z-0 transform transition-transform duration-300 ease-in-out
        ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
      `}>
        <div className="h-full overflow-y-auto">
          {/* Mobile header */}
          <div className="lg:hidden flex items-center justify-between p-4 border-b border-gray-200">
            <h2 className="text-lg font-semibold text-gray-900">Filters</h2>
            <button
              onClick={onClose}
              className="p-2 rounded-md hover:bg-gray-100 transition-colors"
            >
              <X className="w-5 h-5 text-gray-500" />
            </button>
          </div>

          <div className="p-4 lg:p-6 space-y-6">
            {/* Categories */}
            <div>
              <h3 className="text-sm font-semibold text-gray-900 mb-3 flex items-center">
                <Filter className="w-4 h-4 mr-2" />
                Categories
              </h3>
              <div className="space-y-2">
                {categories.map((category) => (
                  <label
                    key={category}
                    className="flex items-center space-x-3 cursor-pointer"
                  >
                    <input
                      type="radio"
                      name="category"
                      value={category}
                      checked={selectedCategory === category}
                      onChange={(e) => setSelectedCategory(e.target.value as FilterCategory)}
                      className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                    />
                    <span className="text-sm text-gray-700">{category}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Sort Options */}
            <div>
              <h3 className="text-sm font-semibold text-gray-900 mb-3">Sort By</h3>
              <div className="space-y-2">
                {sortOptions.map((option) => (
                  <label
                    key={option.value}
                    className="flex items-center space-x-3 cursor-pointer"
                  >
                    <input
                      type="radio"
                      name="sort"
                      value={option.value}
                      checked={sortBy === option.value}
                      onChange={(e) => setSortBy(e.target.value as SortOption)}
                      className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                    />
                    <span className="text-sm text-gray-700">{option.label}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Clear Filters */}
            <button
              onClick={() => {
                setSelectedCategory('All');
                setSortBy('name');
              }}
              className="w-full btn-outline text-sm"
            >
              Clear All Filters
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
