import React from "react";
import { FaWhatsapp } from "react-icons/fa6";
import { Link } from "react-router-dom";
import Whatsapp from "../../Components/Whatsapp";

const Pricing = () => {
  return (
    <div>
      <div className="relative py-16 bg-gradient-to-b from-blue-200 to-blue-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-600 to-orange-600">
              Tailored Solutions
            </span>
            <br />
            <span className="text-white text-xl font-medium mt-2 block">
              Choose Your Digital Foundation
            </span>
          </h2>

          <div className="grid md:grid-cols-3 gap-8 lg:gap-12 relative">
            {/* Decorative elements */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="hidden md:block w-72 h-72 bg-amber-200/30 rounded-full blur-3xl -z-10" />
            </div>

            {[
              {
                plan: "Starter",
                price: "$299",
                features: [
                  "3-Page Framework",
                  "Basic MERN Stack",
                  "2 Design Iterations",
                  "1-month Support",
                ],
                popular: false,
              },
              {
                plan: "Growth",
                price: "$599",
                features: [
                  "7-Page System",
                  "Advanced MERN Features",
                  "4 Design Iterations",
                  "3-month Support",
                  "SEO Setup",
                ],
                popular: true,
              },
              {
                plan: "Enterprise",
                price: "$999",
                features: [
                  "Unlimited Pages",
                  "Custom MERN Architecture",
                  "Unlimited Revisions",
                  "6-month Support",
                  "Premium SEO",
                  "Analytics Integration",
                ],
                popular: false,
              },
            ].map((item, index) => (
              <Link to="https://wa.me/+8801749424565">
              <div
                key={index}
                className={`relative group transition-all duration-300 ${
                  item.popular ? "md:-translate-y-4" : "hover:-translate-y-2"
                }`}
              >
                {/* Popular badge */}
                {item.popular && (
                  <div className="absolute top-0 right-4 -translate-y-4 bg-gradient-to-r from-amber-400 to-orange-500 text-white text-xs font-bold px-4 py-1 rounded-full shadow-lg">
                    Most Chosen
                  </div>
                )}

                <div
                  className={`h-full bg-white p-8 rounded-2xl border-2 ${
                    item.popular
                      ? "border-amber-300 bg-gradient-to-b from-white to-amber-50/50"
                      : "border-slate-100 hover:border-amber-200"
                  } shadow-lg ${
                    item.popular ? "shadow-amber-100/50" : "shadow-slate-100"
                  } overflow-hidden`}
                >
                  {/* Animated background element */}
                  <div className="absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity">
                    <div className="absolute -right-10 -top-10 w-28 h-28 bg-amber-200 rounded-full blur-xl" />
                  </div>

                  <div className="relative space-y-6">
                    <h3
                      className={`text-3xl font-extrabold ${
                        item.popular ? "text-amber-700" : "text-slate-800"
                      }`}
                    >
                      {item.plan}
                    </h3>

                    <div className="flex items-end justify-center gap-2">
                      <span className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-amber-600 to-orange-600">
                        {item.price}
                      </span>
                      <span className="text-slate-500 text-lg mb-1">
                        /project
                      </span>
                    </div>

                    <div className="space-y-4">
                      {item.features.map((feature, fIndex) => (
                        <div
                          key={fIndex}
                          className="flex items-center space-x-3 text-slate-600"
                        >
                          <svg
                            className="flex-shrink-0 w-5 h-5 text-amber-600"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                              clipRule="evenodd"
                            />
                          </svg>
                          <span className="text-left">{feature}</span>
                        </div>
                      ))}
                    </div>

                    {/* <button
                      className={`w-full py-4 font-semibold rounded-xl transition-all duration-300 ${
                        item.popular
                          ? "bg-gradient-to-r from-amber-500 to-orange-500 hover:to-orange-600 text-white shadow-lg shadow-amber-200/50"
                          : "bg-slate-300 hover:bg-orange-500 text-slate-700 hover:text-slate-900"
                      }`}
                    >
                      Start with {item.plan}
                    </button> */}
                  </div>
                </div>
              </div>
              </Link>
            ))}
          </div>
          <div className="flex justify-center ">
          <Whatsapp></Whatsapp>
          </div>

          <p className="text-center text-slate-500 mt-12 text-sm">
            Need custom solution?{" "}
            <Link to="/contact"
              className="text-amber-700 hover:text-amber-800 font-semibold underline"
            >
              Let's discuss →
            </Link>
          </p>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Why Choose Us?
        </h2>
        <p className="text-center text-gray-600">
          We specialize in cutting-edge MERN stack development with scalable,
          high-performance solutions for your business needs.
        </p>
      </div>
    </div>
  );
};

export default Pricing;
