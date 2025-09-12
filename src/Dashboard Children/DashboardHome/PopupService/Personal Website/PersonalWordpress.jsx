import React from 'react';

const PersonalWordpress = () => {
  return (
    <div className="min-h-screen bg-violet-500/10 text-gray-200">
      {/* Header */}
      <header className="py-12 text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-violet-300 to-purple-300">
            WordPress Services
          </h1>
          <p className="text-xl text-violet-200 max-w-2xl mx-auto">
            Professional WordPress development, customization, and maintenance at affordable prices
          </p>
        </div>
      </header>

      {/* Pricing Section */}
      <section className="py-12 bg-violet-500/10">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">Simple Pricing</h2>
          <p className="text-violet-200 text-center max-w-2xl mx-auto mb-12">
            Choose the perfect package for your WordPress needs
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Basic Plan */}
            <div className="bg-gradient-to-b from-violet-800/30 to-violet-900/50 rounded-xl p-6 border border-violet-700/50 backdrop-blur-sm">
              <h3 className="text-2xl font-bold mb-2">Basic Page</h3>
              <div className="text-3xl font-bold mb-4">$10-20</div>
              <p className="text-violet-200 mb-6">Perfect for simple WordPress pages</p>
              
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-emerald-400 mr-2 mt-0.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>1-2 Page Setup</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-emerald-400 mr-2 mt-0.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>Theme Installation</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-emerald-400 mr-2 mt-0.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>Basic Customization</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-emerald-400 mr-2 mt-0.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>Contact Form Setup</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-emerald-400 mr-2 mt-0.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>1 Day Delivery</span>
                </li>
              </ul>
              
              <button className="w-full bg-violet-700 hover:bg-violet-600 text-white py-2 rounded-lg font-semibold transition-colors">
                Get Started
              </button>
            </div>

            {/* Best Selling Plan */}
            <div className="bg-gradient-to-b from-purple-800/40 to-purple-900/60 rounded-xl p-6 border-2 border-purple-500 backdrop-blur-sm relative transform scale-105">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-purple-500 to-fuchsia-500 text-white px-4 py-1 text-sm font-semibold rounded-full">
                BEST SELLING
              </div>
              <h3 className="text-2xl font-bold mb-2">Standard Package</h3>
              <div className="text-3xl font-bold mb-4">$20-30</div>
              <p className="text-violet-200 mb-6">Ideal for small business websites</p>
              
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-emerald-400 mr-2 mt-0.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>3-5 Page Website</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-emerald-400 mr-2 mt-0.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>Theme Customization</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-emerald-400 mr-2 mt-0.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>Plugin Installation</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-emerald-400 mr-2 mt-0.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>SEO Optimization</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-emerald-400 mr-2 mt-0.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>2-3 Day Delivery</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-emerald-400 mr-2 mt-0.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>Mobile Responsive</span>
                </li>
              </ul>
              
              <button className="w-full bg-gradient-to-r from-purple-500 to-fuchsia-500 hover:from-purple-600 hover:to-fuchsia-600 text-white py-2 rounded-lg font-semibold transition-colors">
                Get Started
              </button>
            </div>

            {/* Custom Plan */}
            <div className="bg-gradient-to-b from-violet-800/30 to-violet-900/50 rounded-xl p-6 border border-violet-700/50 backdrop-blur-sm">
              <h3 className="text-2xl font-bold mb-2">Custom Project</h3>
              <div className="text-3xl font-bold mb-4">Custom Quote</div>
              <p className="text-violet-200 mb-6">For complex WordPress solutions</p>
              
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-emerald-400 mr-2 mt-0.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 极 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>Custom Theme Development</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-emerald-400 mr-2 mt-0.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M极.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>Plugin Customization</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-emerald-400 mr-2 mt-0.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 极 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>WooCommerce Setup</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-emerald-400 mr-2 mt-0.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>API Integrations</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-emerald-400 mr-2 mt-0.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586极7.293-7.293a1 1 0 011.414 0极" clipRule="evenodd" />
                  </svg>
                  <span>Ongoing Maintenance</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-emerald-400 mr-2 mt-0.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>Priority Support</span>
                </li>
              </ul>
              
              <button className="w-full bg-violet-700 hover:bg-violet-600 text-white py-2 rounded-lg font-semibold transition-colors">
                Request Quote
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">WordPress Services</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-violet-500/10 p-6 rounded-xl border border-violet-700/30 backdrop-blur-sm">
              <div className="text-4xl mb-4">🎨</div>
              <h3 className="text-xl font-semibold mb-2">Theme Customization</h3>
              <p className="text-violet-200">Customize existing themes to match your brand identity and requirements.</p>
            </div>
            
            <div className="bg-violet-500/10 p-6 rounded-xl border border-violet-700/30 backdrop-blur-sm">
              <div className="text-4xl mb-4">🔌</div>
              <h3 className="text-xl font-semibold mb-2">Plugin Development</h3>
              <p className="text-violet-200">Create custom plugins to extend your WordPress functionality.</p>
            </div>
            
            <div className="bg-violet-500/10 p-6 rounded-xl border border-violet-700/30 backdrop-blur-sm">
              <div className="text-4xl mb-4">🛒</div>
              <h3 className="text-xl font-semibold mb-2">WooCommerce</h3>
              <p className="text-violet-200">Set up online stores with payment processing and inventory management.</p>
            </div>
            
            <div className="bg-violet-500/10 p-6 rounded-xl border border-violet-700/30 backdrop-blur-sm">
              <div className="text-4xl mb-4">🚀</div>
              <h3 className="text-xl font-semibold mb-2">Performance Optimization</h3>
              <p className="text-violet-200">Speed up your WordPress site with caching and optimization techniques.</p>
            </div>
            
            <div className="bg-violet-500/10 p-6 rounded-xl border border-violet-700/30 backdrop-blur-sm">
              <div className="text-4xl mb-4">🔒</div>
              <h3 className="text-xl font-semibold mb-2">Security Hardening</h3>
              <p className="text-violet-200">Protect your site from vulnerabilities and malware attacks.</p>
            </div>
            
            <div className="bg-violet-500/10 p-6 rounded-xl border border-violet-700/30 backdrop-blur-sm">
              <div className="text-4xl mb-4">📊</div>
              <h3 className="text-xl font-semibold mb-2">Maintenance & Support</h3>
              <p className="text-violet-200">Regular updates, backups, and technical support for your WordPress site.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-violet-500/10">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Start Your WordPress Project?</h2>
          <p className="text-xl text-violet-200 max-w-2xl mx-auto mb-8">
            Get in touch for a free consultation and project estimate
          </p>
          <button className="bg-gradient-to-r from-purple-500 to-fuchsia-500 hover:from-purple-600 hover:to-fuchsia-600 text-white px-8 py-3 rounded-lg font-semibold text-lg transition-colors">
            Contact Us Now
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-violet-900/70 text-center">
        <div className="container mx-auto px-4">
          <p className="text-violet-200">Professional WordPress Services</p>
          <p className="text-violet-300/70 mt-2">Page Development: $10-30 | Custom Solutions Available</p>
        </div>
      </footer>
    </div>
  );
};

export default PersonalWordpress;