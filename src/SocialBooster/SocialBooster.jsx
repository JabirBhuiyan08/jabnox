import React from "react";
import { Helmet } from "react-helmet-async";
import { FaFacebook, FaInstagram, FaChartLine, FaBullhorn, FaUsers, FaRocket, FaCheckCircle, FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import Whatsapp from "../Components/Whatsapp";

const SocialBoost = () => {
  const platforms = [
    {
      icon: FaFacebook,
      title: "Facebook Growth",
      description: "We provide targeted Facebook promotions, ad campaigns, and organic strategies to boost your page likes, followers, and engagement.",
      gradient: "from-blue-500 to-cyan-500",
      iconColor: "text-blue-400",
      stats: ["2x Engagement", "50% More Reach"]
    },
    {
      icon: FaInstagram,
      title: "Instagram Boost",
      description: "Our Instagram strategies include influencer collaborations, ad campaigns, and content optimization to increase visibility and engagement.",
      gradient: "from-purple-500 to-pink-500",
      iconColor: "text-pink-400",
      stats: ["3x Followers", "80% Story Views"]
    }
  ];

  const features = [
    {
      icon: FaChartLine,
      title: "Data-Driven Strategy",
      description: "We analyze market trends to optimize your ad spend and audience reach.",
      gradient: "from-green-500 to-emerald-500"
    },
    {
      icon: FaBullhorn,
      title: "Powerful Engagement",
      description: "We craft compelling content and ads to attract and convert your audience.",
      gradient: "from-red-500 to-orange-500"
    },
    {
      icon: FaUsers,
      title: "Targeted Audience",
      description: "Precise targeting to reach your ideal customers and grow your brand.",
      gradient: "from-purple-500 to-indigo-500"
    },
    {
      icon: FaRocket,
      title: "Fast Results",
      description: "Quick and sustainable growth with our proven strategies.",
      gradient: "from-yellow-500 to-orange-500"
    }
  ];

  const pricingPlans = [
    {
      name: "Starter Boost",
      price: "$199",
      period: "/month",
      features: [
        "Facebook OR Instagram Management",
        "10 Posts per month",
        "Basic Analytics Report",
        "Community Management",
        "2 Ad Campaigns"
      ],
      gradient: "from-blue-500 to-cyan-500",
      popular: false
    },
    {
      name: "Growth Pro",
      price: "$399",
      period: "/month",
      features: [
        "Facebook + Instagram Management",
        "20 Posts per month",
        "Advanced Analytics & Insights",
        "Priority Community Management",
        "5 Ad Campaigns",
        "Influencer Outreach",
        "Content Calendar"
      ],
      gradient: "from-purple-500 to-pink-500",
      popular: true
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "",
      features: [
        "All Platforms Management",
        "Unlimited Posts",
        "Dedicated Account Manager",
        "Custom Strategy Development",
        "Unlimited Ad Campaigns",
        "24/7 Priority Support",
        "Monthly Strategy Calls"
      ],
      gradient: "from-orange-500 to-red-500",
      popular: false
    }
  ];

  return (
    <div className="min-h-screen bg-black py-16 px-6 lg:px-16 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-pink-900/20" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-pink-600/10 rounded-full blur-3xl" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-600/5 rounded-full blur-3xl" />
      
      <Helmet>
        <title>Social Media Marketing | JABNOX</title>
        <meta name="description" content="JABNOX provides expert social media marketing services including Facebook and Instagram growth. Our web development company also offers digital marketing solutions to boost your online presence." />
        <meta name="keywords" content="web application development company, custom web application development company, best web development company, web app development company, custom web development company, need freelance web developer, web developer freelance" />
      </Helmet>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-1.5 mb-6 rounded-full bg-gradient-to-r from-blue-500/20 to-pink-500/20 border border-blue-500/30">
            <span className="text-blue-300 text-sm font-medium">Social Media Experts</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="text-white">Social </span>
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Boost
            </span>
            <span className="text-white"> Services</span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Grow your brand with our expert Facebook and Instagram marketing strategies. 
            Get more followers, engagement, and reach your target audience 
            <span className="text-white font-medium"> effortlessly.</span>
          </p>

          <div className="flex items-center justify-center gap-6 mt-8">
            <div className="flex items-center gap-2">
              <FaFacebook className="text-blue-400 text-xl" />
              <FaInstagram className="text-pink-400 text-xl" />
              <span className="text-gray-400 ml-2">Meta Partners</span>
            </div>
            <div className="w-px h-6 bg-gray-700" />
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <span className="text-gray-400">500+ Campaigns Delivered</span>
            </div>
          </div>
        </div>

        {/* Platform Cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          {platforms.map((platform, index) => {
            const Icon = platform.icon;
            return (
              <div
                key={index}
                className="group relative overflow-hidden rounded-3xl bg-gray-900/40 backdrop-blur-sm border border-gray-800 hover:border-blue-500/50 transition-all duration-300 shadow-xl hover:shadow-2xl hover:shadow-blue-500/20"
              >
                <div className="p-8">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${platform.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg`}>
                    <Icon className="text-white text-3xl" />
                  </div>
                  
                  <h2 className="text-3xl font-bold text-white mb-4">{platform.title}</h2>
                  <p className="text-gray-400 leading-relaxed mb-6">
                    {platform.description}
                  </p>
                  
                  <div className="flex gap-4">
                    {platform.stats.map((stat, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <FaCheckCircle className="text-green-400 text-sm" />
                        <span className="text-gray-300 text-sm">{stat}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Why Choose Us Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <div className="inline-block px-4 py-1.5 mb-6 rounded-full bg-gradient-to-r from-blue-500/20 to-pink-500/20 border border-blue-500/30">
              <span className="text-blue-300 text-sm font-medium">Why Choose Us</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Why Choose Our Social Media Services?
              </span>
            </h2>
            <p className="text-lg text-gray-400 max-w-3xl mx-auto">
              We use AI-driven insights, ad optimization, and content strategies to ensure 
              your brand reaches the right audience with maximum impact.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className="group p-6 bg-gray-900/40 backdrop-blur-sm rounded-2xl border border-gray-800 hover:border-purple-500/50 transition-all duration-300 shadow-xl hover:shadow-2xl hover:shadow-purple-500/20"
                >
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${feature.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <Icon className="text-white text-xl" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Pricing Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <div className="inline-block px-4 py-1.5 mb-6 rounded-full bg-gradient-to-r from-blue-500/20 to-pink-500/20 border border-blue-500/30">
              <span className="text-blue-300 text-sm font-medium">Pricing Plans</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Choose Your Growth Plan
              </span>
            </h2>
            <p className="text-lg text-gray-400 max-w-3xl mx-auto">
              Flexible packages tailored to your business needs
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {pricingPlans.map((plan, index) => (
              <div
                key={index}
                className={`relative group transition-all duration-300 ${
                  plan.popular ? "md:-translate-y-4" : "hover:-translate-y-2"
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-20">
                    <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white text-xs font-bold px-4 py-1.5 rounded-full shadow-lg shadow-purple-500/50">
                      Most Popular
                    </div>
                  </div>
                )}
                
                <div className={`h-full p-6 md:p-8 rounded-3xl backdrop-blur-sm transition-all duration-300 ${
                  plan.popular 
                    ? "bg-gradient-to-b from-purple-900/40 to-gray-900/40 border-2 border-purple-500 shadow-xl shadow-purple-500/30" 
                    : "bg-gray-900/40 border border-gray-800 hover:border-gray-700"
                }`}>
                  <h3 className={`text-2xl font-bold mb-2 ${
                    plan.popular ? "text-transparent bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text" : "text-white"
                  }`}>
                    {plan.name}
                  </h3>
                  
                  <div className="flex items-end gap-2 mb-6">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    {plan.period && <span className="text-gray-400 mb-1">{plan.period}</span>}
                  </div>
                  
                  <div className="space-y-3 mb-8">
                    {plan.features.map((feature, fIndex) => (
                      <div key={fIndex} className="flex items-start gap-3">
                        <FaCheckCircle className="text-green-400 text-sm flex-shrink-0 mt-1" />
                        <span className="text-gray-300 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <Link to="https://wa.me/+8801749424565">
                    <button className={`w-full py-3 px-6 rounded-xl font-semibold transition flex items-center justify-center gap-2 ${
                      plan.popular
                        ? "bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white shadow-lg shadow-purple-500/30"
                        : "bg-gray-800 hover:bg-gray-700 text-white border border-gray-700"
                    }`}>
                      Get Started <FaArrowRight className="text-sm" />
                    </button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call-to-Action */}
        <div className="text-center">
          <div className="max-w-4xl mx-auto bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-pink-900/20 backdrop-blur-sm rounded-3xl p-12 border border-blue-500/30">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Boost Your Social Presence Today!
              </span>
            </h2>
            <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto">
              Take your brand to the next level with our expert social media growth strategies.
            </p>
            <Whatsapp />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SocialBoost;