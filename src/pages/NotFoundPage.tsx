import { Link } from 'react-router-dom';
import { Home, Search } from 'lucide-react';

export const NotFoundPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="text-center">
        {/* 404 Text */}
        <div className="mb-8">
          <h1 className="text-9xl font-bold text-gray-900 mb-4">404</h1>
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">Page Not Found</h2>
          <p className="text-gray-600 mb-8 max-w-md mx-auto">
            Sorry, we couldn't find the page you're looking for. The page might have been moved, deleted, or never existed.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link
            to="/"
            className="btn-primary px-6 py-3 font-semibold flex items-center justify-center"
          >
            <Home className="w-5 h-5 mr-2" />
            Go Home
          </Link>
          
          <Link
            to="/products"
            className="btn-secondary px-6 py-3 font-semibold flex items-center justify-center"
          >
            <Search className="w-5 h-5 mr-2" />
            Browse Products
          </Link>
        </div>

        {/* Popular Categories */}
        <div className="mt-12">
          <h3 className="text-lg font-semibold text-gray-900 mb-6">Popular Categories</h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-2xl mx-auto">
            {[
              { name: 'Electronics', href: '/products?category=Electronics' },
              { name: 'Fashion', href: '/products?category=Fashion' },
              { name: 'Sports', href: '/products?category=Sports' }
            ].map((category, index) => (
              <Link
                key={index}
                to={category.href}
                className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 text-center"
              >
                <div className="text-gray-600 mb-2">
                  {category.name === 'Electronics' && '📱'}
                  {category.name === 'Fashion' && '👕'}
                  {category.name === 'Sports' && '⚽'}
                </div>
                <div className="font-medium text-gray-900">{category.name}</div>
              </Link>
            ))}
          </div>
        </div>

        {/* Help Section */}
        <div className="mt-12 bg-white p-6 rounded-lg shadow-md max-w-2xl mx-auto">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Need Help?</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
            <div>
              <h4 className="font-medium text-gray-900 mb-2">Customer Service</h4>
              <p className="text-gray-600">Our team is here to help you find what you need.</p>
              <Link to="/contact" className="text-blue-600 hover:text-blue-700 font-medium">
                Contact Support →
              </Link>
            </div>
            <div>
              <h4 className="font-medium text-gray-900 mb-2">Search Tips</h4>
              <p className="text-gray-600">Try using different keywords or browse our categories.</p>
              <Link to="/products" className="text-blue-600 hover:text-blue-700 font-medium">
                Browse All Products →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
