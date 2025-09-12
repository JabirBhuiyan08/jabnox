import React, { useState } from 'react';

const BusinessCoding = () => {
  const [selectedPlan, setSelectedPlan] = useState('pro');

  const pricingPlans = [
    {
      id: 'basic',
      name: 'Basic Page',
      price: '$30-50',
      description: 'Perfect for simple landing pages or basic content',
      features: [
        'Responsive Design',
        'Basic SEO Optimization',
        'Contact Form',
        '1-2 Day Delivery',
        '1 Round of Revisions'
      ],
      isPopular: false
    },
    {
      id: 'pro',
      name: 'Pro Package',
      price: '$60-80',
      description: 'Our best seller for business websites',
      features: [
        'Custom Design',
        'Advanced SEO',
        'Interactive Elements',
        '3-5 Day Delivery',
        '3 Rounds of Revisions',
        'Basic CMS Integration',
        'Google Analytics Setup'
      ],
      isPopular: true
    },
    {
      id: 'custom',
      name: 'Custom Project',
      price: 'Custom Quote',
      description: 'For complex applications and special requirements',
      features: [
        'Full-stack Development',
        'Database Integration',
        'User Authentication',
        'Admin Dashboard',
        'E-commerce Functionality',
        'Ongoing Support',
        'Priority Development'
      ],
      isPopular: false
    }
  ];

  const technologies = [
    {
      name: 'MongoDB',
      icon: '🗄️',
      description: 'NoSQL database for flexible data management'
    },
    {
      name: 'Express.js',
      icon: '🚀',
      description: 'Fast backend framework for Node.js applications'
    },
    {
      name: 'React',
      icon: '⚛️',
      description: 'Modern frontend library for interactive user interfaces'
    },
    {
      name: 'Node.js',
      icon: '🔄',
      description: 'JavaScript runtime for server-side development'
    },
    {
      name: 'Firebase',
      icon: '🔥',
      description: 'Google\'s platform for authentication and real-time databases'
    },
    {
      name: 'Vercel',
      icon: '☁️',
      description: 'Platform for optimal deployment and hosting'
    }
  ];

  return (
    <div className="min-h-screen bg-violet-500/10">
      {/* Header */}
      <header className="bg-gradient-to-r from-violet-500 to-pink-500 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Professional Web Development Services</h1>
          <p className="text-xl max-w-3xl mx-auto">
            We build high-quality websites and applications using modern technologies at competitive prices
          </p>
        </div>
      </header>

      {/* Technology Stack Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Technology Stack</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {technologies.map((tech, index) => (
              <div key={index} className="bg-gray-50/10 rounded-lg p-6 text-center shadow-md hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-4">{tech.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{tech.name}</h3>
                <p className="text-gray-200">{tech.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 bg-violet-500/10">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">Transparent Pricing</h2>
          <p className="text-gray-200 text-center max-w-2xl mx-auto mb-12">
            We offer competitive pricing for all types of web projects. All packages include responsive design and basic SEO.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {pricingPlans.map((plan) => (
              <div 
                key={plan.id} 
                className={`relative rounded-lg overflow-hidden shadow-lg transition-transform hover:scale-105 ${
                  plan.isPopular 
                    ? 'border-4 border-blue-500/20 transform scale-105' 
                    : 'border border-gray-200/20'
                }`}
              >
                {plan.isPopular && (
                  <div className="absolute top-0 right-0 bg-blue-500 text-white px-4 py-1 text-sm font-semibold rounded-bl-lg">
                    BEST SELLER
                  </div>
                )}
                
                <div className="p-6 sm:h-200 xl:h-150">
                  <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                  <div className="text-3xl font-bold text-violet-400 mb-4">{plan.price}</div>
                  <p className="text-gray-200 mb-6">{plan.description}</p>
                  
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <button 
                    className={`w-full py-3 rounded-lg font-semibold ${
                      plan.isPopular
                        ? 'bg-blue-600 hover:bg-blue-700 text-white'
                        : 'bg-gray-100 hover:bg-gray-200 text-gray-800'
                    }`}
                  >
                    {plan.id === 'custom' ? 'Request Quote' : 'Get Started'}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-violet-500/10">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
          
          <div className="space-y-6">
            <div className="bg-violet-500/30 p-6 rounded-lg hover:bg-violet-500/50 transform hover:scale-105">
              <h3 className="text-xl font-semibold mb-2">What's included in the per page cost?</h3>
              <p className="text-gray-200">
                Our per page cost includes design, development, basic SEO optimization, and responsive layout. Additional functionality like forms, animations, or integrations may affect the final price.
              </p>
            </div>
            
            <div className="bg-violet-500/30 p-6 rounded-lg hover:bg-violet-500/50 transform hover:scale-105">
              <h3 className="text-xl font-semibold mb-2">How long does a typical project take?</h3>
              <p className="text-gray-200">
                Basic pages can be delivered in 1-2 days. More complex projects with multiple pages and features typically take 3-5 days. Custom applications vary based on requirements.
              </p>
            </div>
            
            <div className="bg-violet-500/30 p-6 rounded-lg hover:bg-violet-500/50  transform hover:scale-105">
              <h3 className="text-xl font-semibold mb-2">Do you provide ongoing support?</h3>
              <p className="text-gray-200">
                Yes, we offer various support packages after project completion. Our custom projects include one month of free support, with optional extended support plans available.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-violet-600 to-violet-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to start your project?</h2>
          <p className="text-xl max-w-2xl mx-auto mb-8">
            Get in touch with us today for a free consultation and project estimate.
          </p>
          <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors">
            Contact Us Now
          </button>
        </div>
      </section>
    </div>
  );
};

export default BusinessCoding;