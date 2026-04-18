import { Helmet } from "react-helmet-async";
import { FaEnvelope, FaFacebook, FaTelegram, FaWhatsapp, FaMapPin, FaClock, FaPhone } from "react-icons/fa";
import ContactForm from "../Home/ContactForm";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 py-16 px-6 lg:px-16">
      <Helmet>
        <title>Contact JABNOX | Web Development Company</title>
        <meta name="description" content="Contact JABNOX, a leading web application development company. Get in touch with our expert freelance web developers for custom web development solutions." />
        <meta name="keywords" content="web application development company, custom web application development company, best web development company, web app development company, custom web development company, need freelance web developer, web developer freelance" />
      </Helmet>
      
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-12">
          <div className="inline-block px-4 py-1.5 mb-4 rounded-full bg-gradient-to-r from-blue-500/10 to-indigo-500/10 border border-blue-500/20">
            <span className="text-blue-600 text-sm font-medium">Get In Touch</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Contact <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">JABNOX</span>
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Have a question or want to work with us? Fill out the form below,
            and we'll get back to you as soon as possible.
          </p>
        </div>

        {/* Contact Form and Info */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Contact Form */}
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
              <span className="w-8 h-8 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-lg flex items-center justify-center">
                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
              </span>
              Send Us a Message
            </h2>
            <ContactForm />
          </div>

          {/* Contact Information */}
          <div className="space-y-6">
            {/* Contact Cards */}
            <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
              <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
                <span className="w-8 h-8 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-lg flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                </span>
                Connect With Us
              </h2>
              
              <div className="grid grid-cols-2 gap-4">
                <Link
                  target="_blank"
                  to={"https://www.facebook.com/jabnoxdotcom?mibextid=ZbWKwL"}
                  className="group flex items-center gap-3 p-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl hover:shadow-lg transition-all duration-300 border border-blue-100 hover:border-blue-300"
                >
                  <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                    <FaFacebook className="text-white text-2xl" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800">Facebook</p>
                    <p className="text-sm text-gray-500">@jabnoxdotcom</p>
                  </div>
                </Link>

                <Link 
                  target="_blank" 
                  to={"t.me/Jabnoxdotcom"}
                  className="group flex items-center gap-3 p-4 bg-gradient-to-r from-cyan-50 to-blue-50 rounded-xl hover:shadow-lg transition-all duration-300 border border-cyan-100 hover:border-cyan-300"
                >
                  <div className="w-12 h-12 bg-cyan-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                    <FaTelegram className="text-white text-2xl" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800">Telegram</p>
                    <p className="text-sm text-gray-500">@Jabnoxdotcom</p>
                  </div>
                </Link>

                <Link 
                  target="_blank" 
                  to={"https://wa.me/+8801749424565"}
                  className="group flex items-center gap-3 p-4 bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl hover:shadow-lg transition-all duration-300 border border-green-100 hover:border-green-300"
                >
                  <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                    <FaWhatsapp className="text-white text-2xl" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800">WhatsApp</p>
                    <p className="text-sm text-gray-500">+880 1749-424565</p>
                  </div>
                </Link>

                <a
                  href="mailto:info.jabnox@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3 p-4 bg-gradient-to-r from-red-50 to-orange-50 rounded-xl hover:shadow-lg transition-all duration-300 border border-red-100 hover:border-red-300"
                >
                  <div className="w-12 h-12 bg-red-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                    <FaEnvelope className="text-white text-2xl" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800">Email</p>
                    <p className="text-sm text-gray-500">info.jabnox@gmail.com</p>
                  </div>
                </a>
              </div>
            </div>

            {/* Business Hours */}
            <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
              <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                <FaClock className="text-blue-500" />
                Business Hours
              </h2>
              <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-6 border border-green-200">
                <div className="flex items-center justify-center gap-4">
                  <div className="relative">
                    <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center">
                      <span className="text-white text-3xl font-bold">24</span>
                    </div>
                    <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-400 rounded-full animate-ping"></div>
                    <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full"></div>
                  </div>
                  <div className="text-center">
                    <p className="text-2xl font-bold text-green-700">24/7 Support</p>
                    <p className="text-green-600">Always Here For You</p>
                  </div>
                </div>
                <p className="text-center text-gray-600 mt-4">
                  We're available round the clock to assist you with your queries and projects.
                </p>
              </div>
            </div>

            {/* Map */}
            <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
              <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                <FaMapPin className="text-blue-500" />
                Our Location
              </h2>
              <div className="overflow-hidden rounded-xl border border-gray-200">
                <iframe
                  title="JABNOX Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d37695.12038832053!2d90.42966818190705!3d23.761784812124834!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b80e827f19df%3A0x9c7482b95bc6d57c!2sKhilgaon%2C%20Dhaka!5e1!3m2!1sen!2sbd!4v1741944652040!5m2!1sen!2sbd"
                  width="100%"
                  height="250"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  className="w-full"
                ></iframe>
              </div>
              <p className="text-gray-600 mt-4 flex items-center gap-2">
                <FaMapPin className="text-blue-500 text-sm" />
                Khilgaon, Dhaka, Bangladesh
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;