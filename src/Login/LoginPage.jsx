import { motion } from "framer-motion";
import GoogleSignIn from "../Components/GoogleSignIn/GoogleSignIn";
import jabnoxLogo from "../assets/jabnox logo.png";
import { Link } from "react-router-dom";
import { FiShield, FiZap, FiClock } from "react-icons/fi";

const LoginPage = () => {
  return (
    <div className="min-h-screen relative flex flex-col items-center justify-center p-4 overflow-hidden">
      {/* Background Design Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating circles */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-blue-100 opacity-20 blur-xl"></div>
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 rounded-full bg-indigo-100 opacity-20 blur-xl"></div>
        {/* Geometric pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgdmlld0JveD0iMCAwIDYwIDYwIj48Y2lyY2xlIGN4PSIxMCIgY3k9IjEwIiByPSIxIiBmaWxsPSIjMDA3OGZmIiBvcGFjaXR5PSIwLjEiLz48Y2lyY2xlIGN4PSIzMCIgY3k9IjMwIiByPSIxIiBmaWxsPSIjMDA3OGZmIiBvcGFjaXR5PSIwLjEiLz48Y2lyY2xlIGN4PSI1MCIgY3k9IjUwIiByPSIxIiBmaWxsPSIjMDA3OGZmIiBvcGFjaXR5PSIwLjEiLz48L3N2Zz4=')]"></div>
        </div>
      </div>

      {/* Animated Logo with Container */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-8 relative z-10"
      >
        <div className="relative group">
          {/* Logo shadow effect */}
          <div className="absolute inset-0 rounded-full bg-blue-500 opacity-0 group-hover:opacity-10 blur-md transition-opacity duration-300 -z-10"></div>
          
          {/* Logo with gradient border */}
         <Link to={"/"}>
          <div className="p-1 rounded-full bg-gradient-to-r from-blue-400 to-indigo-500">
            <motion.img 
              src={jabnoxLogo} 
              alt="Jabnox Logo" 
              className="w-48 md:w-56 rounded-full border-4 border-white bg-white p-2 shadow-lg transition-transform duration-500 group-hover:rotate-[5deg]"
              whileHover={{ scale: 1.05 }}
            />
          </div>
         </Link>
          
          {/* Floating dots around logo */}
          <div className="absolute -top-2 -right-2 w-4 h-4 rounded-full bg-blue-400 animate-pulse"></div>
          <div className="absolute -bottom-2 -left-2 w-3 h-3 rounded-full bg-indigo-400 animate-pulse delay-100"></div>
        </div>
      </motion.div>

      {/* Login Card */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md bg-white/95 backdrop-blur-sm rounded-2xl shadow-2xl overflow-hidden border border-white/20 relative z-10"
      >
        {/* Glow effect */}
        <div className="absolute -top-20 -right-20 w-40 h-40 rounded-full bg-blue-400 opacity-10 blur-3xl -z-10"></div>
        
        {/* Header */}
        <div className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-700"></div>
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgdmlld0JveD0iMCAwIDYwIDYwIj48Y2lyY2xlIGN4PSIxMCIgY3k9IjEwIiByPSIxIiBmaWxsPSJ3aGl0ZSIgb3BhY2l0eT0iMC4xIi8+PC9zdmc+')] opacity-20"></div>
          <div className="relative z-10 p-6 text-center">
            <motion.h1 
              className="text-2xl font-bold text-white"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              Welcome to Jabnox
            </motion.h1>
            <motion.p 
              className="text-blue-100 mt-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              The future of secure collaboration
            </motion.p>
          </div>
        </div>

        {/* Content Area */}
        <div className="p-8">
          {/* Benefits Section */}
          <div className="mb-8 space-y-5">
            {[
              { icon: <FiShield className="text-blue-500 mt-1 flex-shrink-0" />, 
                title: "Enterprise Security", 
                desc: "Military-grade encryption for your data" },
              { icon: <FiZap className="text-blue-500 mt-1 flex-shrink-0" />, 
                title: "Blazing Fast", 
                desc: "Instant access to your workspace" },
              { icon: <FiClock className="text-blue-500 mt-1 flex-shrink-0" />, 
                title: "Always Available", 
                desc: "24/7 access from anywhere" }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 + index * 0.1 }}
                className="flex items-start gap-4 p-3 rounded-lg hover:bg-blue-50/50 transition-colors"
              >
                <div className="p-2 bg-blue-100 rounded-lg">
                  {item.icon}
                </div>
                <div>
                  <h3 className="font-medium text-gray-800">{item.title}</h3>
                  <p className="text-sm text-gray-500">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Google Sign-In */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="mb-6"
          >
            <div className="text-center mb-4">
              <p className="text-sm text-gray-500 font-medium">
                Sign in with your organization account
              </p>
            </div>
            <GoogleSignIn />
          </motion.div>

          {/* Help Section */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
            className="pt-4 border-t border-gray-100 text-center"
          >
            <p className="text-sm text-gray-500">
              Need help?{' '}
              <Link 
                to="/contact" 
                className="text-blue-600 font-medium hover:underline hover:text-blue-700 transition-colors"
              >
                Contact our team
              </Link>
            </p>
          </motion.div>
        </div>
      </motion.div>

      {/* Footer */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="mt-8 text-center text-xs text-gray-500 relative z-10"
      >
        <div className="flex justify-center space-x-4">
          <Link 
            to="/privacy" 
            className="hover:text-blue-600 hover:underline transition-colors"
          >
            Privacy Policy
          </Link>
          <span>•</span>
          <Link 
            to="/terms" 
            className="hover:text-blue-600 hover:underline transition-colors"
          >
            Terms of Service
          </Link>
        </div>
        <p className="mt-2">© {new Date().getFullYear()} Jabnox Inc. All rights reserved.</p>
      </motion.div>
    </div>
  );
};

export default LoginPage;