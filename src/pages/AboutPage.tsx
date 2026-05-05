import { Link } from 'react-router-dom';
import { ArrowRight, Shield, Truck, Headphones, Award } from 'lucide-react';

export const AboutPage = () => {
  const features = [
    {
      icon: Shield,
      title: 'Secure Shopping',
      description: 'Your payment information is secure with our encrypted checkout process.'
    },
    {
      icon: Truck,
      title: 'Fast Delivery',
      description: 'Free shipping on orders over ₹50. Fast and reliable delivery nationwide.'
    },
    {
      icon: Headphones,
      title: '24/7 Support',
      description: 'Our customer service team is here to help you anytime, anywhere.'
    },
    {
      icon: Award,
      title: 'Quality Guaranteed',
      description: 'All products are carefully selected and quality tested before shipping.'
    }
  ];

  const stats = [
    { number: '50K+', label: 'Happy Customers' },
    { number: '1000+', label: 'Products' },
    { number: '99%', label: 'Satisfaction Rate' },
    { number: '24/7', label: 'Customer Support' }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              About ECommerce
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              We're passionate about bringing you the best products with exceptional service and unbeatable prices.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Why Choose ECommerce?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
                  <feature.icon className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              Our Story
            </h2>
            <div className="prose prose-lg mx-auto text-gray-600">
              <p className="mb-6">
                Founded in 2020, ECommerce started with a simple mission: to make quality products accessible to everyone. 
                We believe that great products shouldn't come with complicated shopping experiences or unreasonable prices.
              </p>
              <p className="mb-6">
                What began as a small operation has grown into a trusted platform serving thousands of customers across the country. 
                Our team works tirelessly to curate the best products, ensure competitive pricing, and provide exceptional customer service.
              </p>
              <p>
                We're not just selling products – we're building relationships. Every purchase is an opportunity to make someone's day better, 
                and we take that responsibility seriously.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Meet Our Team
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: 'Sarah Johnson',
                role: 'Founder & CEO',
                description: 'Visionary leader with 15+ years in e-commerce'
              },
              {
                name: 'Michael Chen',
                role: 'Head of Product',
                description: 'Product expert focused on quality and innovation'
              },
              {
                name: 'Emily Davis',
                role: 'Customer Success',
                description: 'Dedicated to ensuring customer satisfaction'
              }
            ].map((member, index) => (
              <div key={index} className="text-center bg-white p-6 rounded-lg shadow-lg">
                <div className="w-24 h-24 bg-gray-300 rounded-full mx-auto mb-4"></div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {member.name}
                </h3>
                <p className="text-blue-600 font-medium mb-2">{member.role}</p>
                <p className="text-gray-600 text-sm">{member.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Shop with Us?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Join thousands of satisfied customers and experience the ECommerce difference
          </p>
          <Link
            to="/products"
            className="btn bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 text-lg font-semibold inline-flex items-center"
          >
            Start Shopping
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};
