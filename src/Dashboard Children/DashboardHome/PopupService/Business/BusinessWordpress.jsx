import React, { useState } from 'react';

const BusinessWordpress = () => {
  const [activeTab, setActiveTab] = useState('services');

  return (
    <div className="min-h-screen bg-violet-500/10">
      {/* Header */}
      <header className="bg-gradient-to-b from-violate-600 to-violet-800 text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <div className="flex justify-center mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M21.5 11.5c0 4.136-3.364 7.5-7.5 7.5-4.136 0-7.5-3.364-7.5-7.5 0-1.528.466-2.942 1.257-4.125l-1.257 4.125 2.708.903-2.708-.903c.159.53.247 1.092.247 1.688 0 2.762-2.238 5-5 5s-5-2.238-5-5 2.238-5 5-5c.596 0 1.158.088 1.688.247l-.903-2.708 4.125 1.257c1.183-.791 2.597-1.257 4.125-1.257 4.136 0 7.5 3.364 7.5 7.5z"/>
            </svg>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">WordPress Solutions</h1>
          <p className="text-xl opacity-90">Professional WordPress development, customization, and maintenance</p>
        </div>
      </header>

      {/* Navigation Tabs */}
      <nav className=" shadow-lg">
        <div className="container mx-auto px-4">
          <div className="flex justify-center">
            <button 
              className={`px-6 py-4 font-medium ${activeTab === 'services' ? 'text-violet-600 border-b-2 border-violet-600' : 'text-gray-200 hover:text-violet-500'}`}
              onClick={() => setActiveTab('services')}
            >
              Services
            </button>
            <button 
              className={`px-6 py-4 font-medium ${activeTab === 'themes' ? 'text-violet-600 border-b-2 border-violet-600' : 'text-gray-200 hover:text-violet-500'}`}
              onClick={() => setActiveTab('themes')}
            >
              Themes & Plugins
            </button>
            <button 
              className={`px-6 py-4 font-medium ${activeTab === 'pricing' ? 'text-violet-600 border-b-2 border-violet-600' : 'text-gray-200 hover:text-violet-500'}`}
              onClick={() => setActiveTab('pricing')}
            >
              Pricing
            </button>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        {/* Services Tab */}
        {activeTab === 'services' && (
          <section>
            <h2 className="text-3xl font-bold text-center text-gray-200 mb-10">Our WordPress Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-violet-500/20 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
                <div className="text-blue-600 mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Custom WordPress Development</h3>
                <p className="text-gray-400">Tailor-made WordPress solutions built to your exact specifications and business needs.</p>
              </div>
              
              <div className="bg-violet-500/20 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
                <div className="text-blue-600 mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Theme Customization</h3>
                <p className="text-gray-400">Modify existing themes to match your brand identity and add custom functionality.</p>
              </div>
              
              <div className="bg-violet-500/20 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
                <div className="text-blue-600 mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Plugin Development</h3>
                <p className="text-gray-400">Custom WordPress plugins to extend functionality and meet specific requirements.</p>
              </div>
              
              <div className="bg-violet-500/20 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
                <div className="text-blue-600 mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">WooCommerce Solutions</h3>
                <p className="text-gray-400">Set up and customize online stores with WooCommerce, payment gateways, and inventory systems.</p>
              </div>
              
              <div className="bg-violet-500/20 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
                <div className="text-blue-600 mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Security & Maintenance</h3>
                <p className="text-gray-400">Regular updates, security hardening, backups, and performance optimization for your WordPress site.</p>
              </div>
              
              <div className="bg-violet-500/20 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
                <div className="text-blue-600 mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Performance Optimization</h3>
                <p className="text-gray-400">Speed up your WordPress site with caching, image optimization, and code improvements.</p>
              </div>
            </div>
          </section>
        )}

        {/* Themes & Plugins Tab */}
        {activeTab === 'themes' && (
          <section>
            <h2 className="text-3xl font-bold text-center text-gray-200 mb-10">Themes & Plugins</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-violet-500/20 rounded-lg shadow-md p-6">
                <h3 className="text-2xl font-semibold mb-4 text-blue-600">Premium Themes</h3>
                <p className="text-gray-200 mb-6">We work with all major WordPress theme frameworks and marketplaces:</p>
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="flex items-center p-3 bg-gray-800/50 rounded-lg">
                    <span className="font-medium">Divi</span>
                  </div>
                  <div className="flex items-center p-3 bg-gray-800/50 rounded-lg">
                    <span className="font-medium">Avada</span>
                  </div>
                  <div className="flex items-center p-3 bg-gray-800/50 rounded-lg">
                    <span className="font-medium">Elementor</span>
                  </div>
                  <div className="flex items-center p-3 bg-gray-800/50 rounded-lg">
                    <span className="font-medium">Beaver Builder</span>
                  </div>
                  <div className="flex items-center p-3 bg-gray-800/50 rounded-lg">
                    <span className="font-medium">Astra</span>
                  </div>
                  <div className="flex items-center p-3 bg-gray-800/50 rounded-lg">
                    <span className="font-medium">OceanWP</span>
                  </div>
                </div>
              </div>
              
              <div className="bg-violet-500/20 rounded-lg shadow-md p-6">
                <h3 className="text-2xl font-semibold mb-4 text-blue-600">Plugin Expertise</h3>
                <p className="text-gray-200 mb-6">We have extensive experience with essential WordPress plugins:</p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center  bg-gray-800/50 rounded-lg">
                    <span className="font-medium">WooCommerce</span>
                  </div>
                  <div className="flex items-center p-3 bg-gray-800/50 rounded-lg">
                    <span className="font-medium">Yoast SEO</span>
                  </div>
                  <div className="flex items-center p-3 bg-gray-800/50 rounded-lg">
                    <span className="font-medium">Advanced Custom Fields</span>
                  </div>
                  <div className="flex items-center p-3 bg-gray-800/50 rounded-lg">
                    <span className="font-medium">Gravity Forms</span>
                  </div>
                  <div className="flex items-center p-3 bg-gray-800/50 rounded-lg">
                    <span className="font-medium">Wordfence Security</span>
                  </div>
                  <div className="flex items-center p-3 bg-gray-800/50 rounded-lg">
                    <span className="font-medium">WP Rocket</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-blue-50 rounded-lg p-8 mt-10">
              <h3 className="text-2xl font-semibold mb-4 text-blue-800">Why Choose Our WordPress Services?</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600 mr-2 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <div className='text-gray-900'>
                    <h4 className="font-semibold mb-1">Expert Developers</h4>
                    <p className="text-gray-700">Our team specializes in WordPress development with years of experience.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600 mr-2 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <div className='text-gray-900'>
                    <h4 className="font-semibold mb-1">Responsive Design</h4>
                    <p className="text-gray-700">All our WordPress sites are fully responsive and mobile-friendly.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600 mr-2 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <div className='text-gray-900'>
                    <h4 className="font-semibold mb-1">SEO Optimized</h4>
                    <p className="text-gray-700">We build sites with SEO best practices to help you rank higher.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Pricing Tab */}
        {activeTab === 'pricing' && (
          <section>
            <h2 className="text-3xl font-bold text-center text-gray-200 mb-10">WordPress Pricing</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-violet-500/10 rounded-lg shadow-md p-6 border border-gray-200">
                <h3 className="text-xl font-semibold mb-4 text-gray-200">Basic WordPress Site</h3>
                <div className="text-xl font-bold text-blue-600 mb-4">$300-500</div>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mr-2" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Theme Installation & Setup
                  </li>
                  <li className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mr-2" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Basic Customization
                  </li>
                  <li className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mr-2" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Contact Form Setup
                  </li>
                  <li className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mr-2" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Essential Plugin Installation
                  </li>
                  <li className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mr-2" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    5-7 Day Delivery
                  </li>
                </ul>
                <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors">
                  Get Started
                </button>
              </div>
              
              <div className="bg-violet-900 rounded-lg shadow-lg p-6 border-2 border-blue-600 transform scale-105">
                <div className="absolute top-0 right-0 bg-blue-600 text-white px-4 py-1 text-sm font-semibold rounded-bl-lg">
                  Most Popular
                </div>
                <h3 className="text-xl font-semibold mb-4 text-gray-200">E-Commerce WordPress</h3>
                <div className="text-xl font-bold text-blue-600 mb-4">$800-1200</div>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mr-2" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    WooCommerce Setup
                  </li>
                  <li className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mr-2" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Payment Gateway Integration
                  </li>
                  <li className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mr-2" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Product Catalog Setup
                  </li>
                  <li className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mr-2" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Custom Design
                  </li>
                  <li className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mr-2" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    10-14 Day Delivery
                  </li>
                </ul>
                <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors">
                  Get Started
                </button>
              </div>
              
              <div className="bg-violet-500/10 rounded-lg shadow-md p-6 border border-gray-200">
                <h3 className="text-xl font-semibold mb-4 text-gray-200">Custom WordPress Project</h3>
                <div className="text-3xl font-bold text-blue-600 mb-4">Custom Quote</div>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mr-2" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Custom Theme Development
                  </li>
                  <li className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mr-2" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Plugin Development
                  </li>
                  <li className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mr-2" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    API Integrations
                  </li>
                  <li className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mr-2" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Ongoing Maintenance
                  </li>
                  <li className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mr-2" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Priority Support
                  </li>
                </ul>
                <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors">
                  Contact Us
                </button>
              </div>
            </div>
          </section>
        )}
      </main>

    
    </div>
  );
};

export default BusinessWordpress;