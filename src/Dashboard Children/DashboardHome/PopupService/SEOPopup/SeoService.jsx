import React, { useState } from 'react';

const SeoService = () => {
  const [selectedPlan, setSelectedPlan] = useState(null);

  const plans = [
    {
      id: 'week',
      duration: '1 Week',
      price: '$20-80',
      popular: false,
      features: [
        'Keyword research & analysis',
        'On-page optimization (5 pages)',
        'Basic technical SEO audit',
        'Competitor analysis report',
        'Google Analytics setup'
      ],
      whatsappMessage: "Hi, I'm interested in the 1 Week SEO plan for $20-80"
    },
    {
      id: 'month',
      duration: '1 Month',
      price: '$150-500',
      popular: true,
      features: [
        'Comprehensive site audit',
        'Full on-page optimization (up to 20 pages)',
        'Content optimization strategy',
        'Backlink analysis',
        'Monthly performance reporting',
        'Technical SEO improvements',
        'Local SEO optimization (if applicable)'
      ],
      whatsappMessage: "Hi, I'm interested in the 1 Month SEO plan for $150-500"
    },
    {
      id: 'custom',
      duration: 'Custom',
      price: 'Tailored Quote',
      popular: false,
      features: [
        'Enterprise-level SEO strategy',
        'Ongoing optimization & monitoring',
        'Advanced technical SEO',
        'International SEO (multi-language)',
        'E-commerce SEO optimization',
        'Continuous content strategy',
        'Dedicated SEO specialist',
        'Regular strategy meetings'
      ],
      whatsappMessage: "Hi, I'm interested in a Custom SEO plan"
    }
  ];

  const services = [
    {
      title: "Keyword Research",
      description: "We identify the most valuable keywords for your business to target, balancing search volume and competition.",
      icon: "🔍"
    },
    {
      title: "On-Page Optimization",
      description: "We optimize your page content, meta tags, headings, and images to rank higher in search results.",
      icon: "📄"
    },
    {
      title: "Technical SEO",
      description: "We improve site speed, fix crawl errors, implement schema markup, and ensure search engines can properly index your site.",
      icon: "⚙️"
    },
    {
      title: "Content Strategy",
      description: "We develop a content plan that attracts your target audience and establishes your authority in your industry.",
      icon: "✏️"
    },
    {
      title: "Local SEO",
      description: "For businesses with physical locations, we optimize your local listings and Google My Business profile.",
      icon: "📍"
    },
    {
      title: "Analytics & Reporting",
      description: "We track your performance, measure results, and provide transparent reporting on your SEO campaign progress.",
      icon: "📊"
    }
  ];

  const openWhatsApp = (message) => {
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/1234567890?text=${encodedMessage}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-green-500/10 text-gray-200">
      {/* Hero Section */}
      <section className="py-20 px-4 bg-green-500/10">
        <div className="container mx-auto max-w-6xl text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Professional SEO Services</h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Boost your search engine rankings, drive more traffic, and grow your business with our expert SEO strategies
          </p>
          <button 
            className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-8 rounded-lg transition duration-300 transform hover:scale-105"
            onClick={() => openWhatsApp("Hi, I'm interested in your SEO services")}
          >
            Get Started Today
          </button>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-12">Our SEO Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-green-500/10 p-6 rounded-xl backdrop-blur-sm border border-violet-400/20 hover:border-violet-400/40 transition-all duration-300">
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-gray-300">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-4">SEO Pricing Plans</h2>
          <p className="text-xl text-center mb-12 max-w-3xl mx-auto">
            Choose the plan that works best for your business needs
          </p>
          
          <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
            {plans.map((plan) => (
              <div 
                key={plan.id}
                className={`relative  p-8 rounded-2xl border backdrop-blur-sm transition-all duration-300 hover:scale-105
                  ${plan.popular 
                    ? 'border-green-400/40 border-2 transform scale-105 shadow-lg shadow-violet-500/20' 
                    : 'border-green-400/20'}`}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-green-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <h3 className="text-2xl font-bold text-center mb-2">{plan.duration}</h3>
                <div className="text-3xl font-bold text-center mb-6 text-green-300">{plan.price}</div>
                
                <ul className="my-6 space-y-3 mb-8">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-green-400 mr-2">✓</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <button 
                  className={`w-full py-3 rounded-lg font-bold transition duration-300
                    ${plan.popular 
                      ? 'bg-green-600 hover:bg-green-700 text-white' 
                      : 'bg-green-500/20 text-gray-300 hover:bg-green-500/30'}`}
                  onClick={() => openWhatsApp(plan.whatsappMessage)}
                >
                  Select Plan
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WhatsApp Floating Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <button 
          className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-all duration-300 transform hover:scale-110 flex items-center justify-center"
          onClick={() => openWhatsApp("Hi, I'm interested in your SEO services")}
          aria-label="Contact via WhatsApp"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.297-.497.1-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.864 3.49"/>
          </svg>
        </button>
      </div>

      {/* FAQ Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
          <div className="space-y-6">
            <div className="bg-green-500/10 p-6 rounded-xl">
              <h3 className="text-xl font-semibold mb-2">How long does it take to see results from SEO?</h3>
              <p className="text-gray-300">SEO is a long-term strategy. While some improvements can be seen in weeks, significant results typically take 3-6 months of consistent effort.</p>
            </div>
            <div className="bg-green-500/10 p-6 rounded-xl">
              <h3 className="text-xl font-semibold mb-2">Do you offer ongoing support?</h3>
              <p className="text-gray-300">Yes, our monthly and custom plans include ongoing optimization, monitoring, and regular reporting to ensure continuous improvement.</p>
            </div>
            <div className="bg-green-500/10 p-6 rounded-xl">
              <h3 className="text-xl font-semibold mb-2">Will I need to provide access to my website?</h3>
              <p className="text-gray-300">For technical implementations, we'll need limited access to your website. Alternatively, we can provide instructions for your team to implement.</p>
            </div>
            <div className="bg-green-500/10 p-6 rounded-xl">
              <h3 className="text-xl font-semibold mb-2">Do you work with local businesses?</h3>
              <p className="text-gray-300">Absolutely! We have specific strategies for local SEO that help businesses appear in local search results and Google Maps.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Improve Your Search Rankings?</h2>
          <p className="text-xl mb-8">Contact us today for a free SEO audit and consultation</p>
          <button 
            className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-8 rounded-lg transition duration-300 transform hover:scale-105"
            onClick={() => openWhatsApp("Hi, I'd like a free SEO audit and consultation")}
          >
            Get Free Consultation
          </button>
        </div>
      </section>
    </div>
  );
};

export default SeoService;