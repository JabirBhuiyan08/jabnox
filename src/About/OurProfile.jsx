import React, { useState, useRef, useEffect } from "react";
import JabirBhuiyan from '../assets/JabirBhuiyan.jpg';
import NoyonKhan from '../assets/SabbirMdNoyonKhan.jpg';
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { FaInstagram, FaFacebook, FaLinkedin, FaEnvelope, FaTimes, FaStar, FaCheckCircle } from "react-icons/fa";

const OurProfile = () => {
  const [selectedProfile, setSelectedProfile] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const modalRef = useRef(null);

  const profiles = [
    {
      id: 1,
      image: JabirBhuiyan,
      name: "Jabir Bhuiyan",
      title: "Web Developer & Digital Creator",
      role: "Technical Lead",
      biography: "Passionate and creative web developer skilled in front-end and MERN stack technologies. Experienced in building interactive, user-focused applications with animation, Firebase authentication, and JWT security.",
      experience: "Skilled in MERN Stack, Firebase, and Tailwind CSS projects",
      education: "BBA in MIS & FINANCE (focus on MIS and Web Systems)",
      skills: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS", "WordPress", "Power BI", "Illustrator"],
      interests: ["Web design", "AI integration", "Animation", "Digital Business Solutions"],
      gradient: "from-blue-500 via-purple-500 to-pink-500",
      color: "blue",
      facebook: "https://www.facebook.com/jabir.bhuiyann",
      linkedin: "https://www.linkedin.com/in/jabir-bhuiyan/",
      instagram: "https://www.instagram.com/jbrbhuiyan/",
      email: "jabirbhuiyan08@gmail.com"
    },
    {
      id: 2,
      image: NoyonKhan,
      name: "Sabbir Khan",
      title: "Designer, Planner & Thinker",
      role: "Creative Director",
      biography: "Creative mind behind Javanox's visual identity and strategic concepts. Noyon blends design thinking with marketing insights to craft innovative brand experiences that connect ideas with impact.",
      experience: "Expertise in creative direction, brand planning, and project visualization",
      education: "BBA in Marketing & HRM (focus on Marketing and Consumer Behavior)",
      skills: ["Graphic Design", "Marketing Strategy", "Brand Development", "Research"],
      softSkills: ["Creative Planning", "Strategic Thinking", "Team Collaboration", "Visual Communication"],
      gradient: "from-green-500 via-cyan-500 to-blue-500",
      color: "green",
      facebook: "https://www.facebook.com/share/1Lp5ZwnYjT/",
      instagram: "https://www.instagram.com/noyon_28?igsh=NW02YXN2OTJuemRy",
      email: "noyonkhan81777@gmail.com"
    }
  ];

  // Handle click outside modal
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        closeModal();
      }
    };

    if (isModalOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      // Prevent body scroll when modal is open
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.body.style.overflow = 'unset';
    };
  }, [isModalOpen]);

  const openModal = (profile) => {
    setSelectedProfile(profile);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProfile(null);
  };

  const SocialIcon = ({ platform, url, gradient }) => {
    const getIcon = () => {
      switch (platform) {
        case 'facebook':
          return <FaFacebook />;
        case 'linkedin':
          return <FaLinkedin />;
        case 'instagram':
          return <FaInstagram />;
        case 'email':
          return <FaEnvelope />;
        default:
          return null;
      }
    };

    const isEmail = platform === 'email';
    
    return (
      <a
        href={url}
        target={isEmail ? '_self' : '_blank'}
        rel={isEmail ? '' : 'noopener noreferrer'}
        className={`w-10 h-10 rounded-xl bg-gradient-to-r ${gradient} flex items-center justify-center text-white hover:scale-110 transform transition-all duration-300 shadow-lg hover:shadow-xl`}
      >
        {getIcon()}
      </a>
    );
  };

  return (
    <div className="min-h-screen bg-black py-16 px-4 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-transparent to-blue-900/20" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl" />
      
      <Helmet>
        <title>Our Team | JABNOX</title>
        <meta name="description" content="Meet the team behind JABNOX. Our web development company is led by expert freelance web developers creating custom web solutions." />
        <meta name="keywords" content="web application development company, custom web application development company, best web development company, web app development company, custom web development company, need freelance web developer, web developer freelance" />
      </Helmet>
      
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-block bg-gradient-to-r from-purple-600 to-blue-600 rounded-full px-4 py-1.5 mb-4">
            <span className="text-white text-xs font-semibold tracking-wide">
              LEADERSHIP TEAM
            </span>
          </div>
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            Meet Our <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">Co-Founders</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto">
            The visionary minds behind <span className="text-purple-400 font-semibold">JABNOX.COM</span>, 
            combining technical excellence with creative innovation to build extraordinary digital experiences.
          </p>
        </div>

        {/* Profile Cards Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {profiles.map((profile) => (
            <div
              key={profile.id}
              className="group relative cursor-pointer"
              onClick={() => openModal(profile)}
            >
              {/* Background Glow Effect */}
              <div className={`absolute inset-0 bg-gradient-to-r ${profile.gradient} rounded-2xl blur-xl opacity-20 group-hover:opacity-30 transition-all duration-500`}></div>
              
              {/* Main Card */}
              <div className="relative bg-gray-900/60 backdrop-blur-xl rounded-2xl border border-gray-800 p-8 hover:border-gray-700 transition-all duration-500 group-hover:scale-105 h-full">
                {/* Content */}
                <div className="flex flex-col items-center text-center h-full">
                  {/* Profile Image */}
                  <div className="relative mb-6">
                    <div className={`absolute inset-0 bg-gradient-to-r ${profile.gradient} rounded-2xl blur-md opacity-50`}></div>
                    <img
                      src={profile.image}
                      alt={profile.name}
                      className="relative w-32 h-32 md:w-40 md:h-40 object-cover rounded-2xl border-2 border-gray-700 shadow-xl"
                    />
                    <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center shadow-lg">
                      <FaStar className="text-white text-sm" />
                    </div>
                  </div>

                  {/* Name & Title */}
                  <div className="flex-1">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
                      {profile.name}
                    </h2>
                    <p className="text-gray-400 mb-3">
                      {profile.title}
                    </p>
                    <div className={`inline-block bg-gradient-to-r ${profile.gradient} text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg mb-4`}>
                      {profile.role} & Co-Founder
                    </div>
                  </div>

                  {/* Quick Stats */}
                  <div className="grid grid-cols-2 gap-4 w-full mb-6">
                    <div className="text-center p-3 bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700">
                      <div className="text-2xl font-bold text-white">2+</div>
                      <div className="text-xs text-gray-400">Years Exp</div>
                    </div>
                    <div className="text-center p-3 bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700">
                      <div className="text-2xl font-bold text-white">5+</div>
                      <div className="text-xs text-gray-400">Projects</div>
                    </div>
                  </div>

                  {/* View Profile Button */}
                  <button className={`mt-auto w-full bg-gradient-to-r ${profile.gradient} hover:shadow-lg transform transition-all duration-300 text-white font-semibold py-3 px-6 rounded-xl flex items-center justify-center gap-2`}>
                    View Full Profile
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Footer CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-purple-900/40 to-blue-900/40 backdrop-blur-sm rounded-3xl p-12 border border-purple-500/30">
            <h3 className="text-2xl md:text-4xl font-bold text-white mb-4">
              Ready to Build Something Amazing?
            </h3>
            <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
              Let's collaborate and bring your digital vision to life with cutting-edge technology and creative design.
            </p>
            <Link 
              to={'/contact'} 
              className="inline-block bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-bold py-4 px-10 rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-lg shadow-purple-500/30"
            >
              Start Your Project
            </Link>
          </div>
        </div>
      </div>

      {/* Profile Modal */}
      {isModalOpen && selectedProfile && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <div 
            ref={modalRef}
            className="relative max-w-4xl w-full max-h-[90vh] overflow-y-auto bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl border border-gray-700 shadow-2xl"
          >
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-gray-800/80 hover:bg-gray-700/80 flex items-center justify-center text-white hover:scale-110 transition-all duration-300"
            >
              <FaTimes className="text-xl" />
            </button>

            {/* Modal Content */}
            <div className="p-8">
              {/* Header with Image and Title */}
              <div className="flex flex-col md:flex-row items-center gap-8 mb-8">
                <div className="relative flex-shrink-0">
                  <div className={`absolute inset-0 bg-gradient-to-r ${selectedProfile.gradient} rounded-2xl blur-md opacity-50`}></div>
                  <img
                    src={selectedProfile.image}
                    alt={selectedProfile.name}
                    className="relative w-36 h-36 md:w-40 md:h-40 object-cover rounded-2xl border-4 border-gray-700 shadow-xl"
                  />
                </div>
                <div className="text-center md:text-left flex-1">
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
                    {selectedProfile.name}
                  </h2>
                  <p className="text-lg text-gray-300 mb-3">
                    {selectedProfile.title}
                  </p>
                  <div className={`inline-block bg-gradient-to-r ${selectedProfile.gradient} text-white px-5 py-2 rounded-full text-sm font-semibold shadow-lg mb-4`}>
                    {selectedProfile.role} & Co-Founder
                  </div>
                  <div className="text-gray-400 mb-4">
                    <FaEnvelope className="inline mr-2" />
                    <span className="text-purple-400 hover:underline cursor-pointer">
                      {selectedProfile.email}
                    </span>
                  </div>
                  
                  {/* Social Media Links */}
                  <div className="flex gap-3 justify-center md:justify-start">
                    <SocialIcon platform="facebook" url={selectedProfile.facebook} gradient={selectedProfile.gradient} />
                    {selectedProfile.linkedin && <SocialIcon platform="linkedin" url={selectedProfile.linkedin} gradient={selectedProfile.gradient} />}
                    <SocialIcon platform="instagram" url={selectedProfile.instagram} gradient={selectedProfile.gradient} />
                  </div>
                </div>
              </div>

              {/* Full Biography */}
              <div className="mb-8">
                <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                  <div className={`w-2 h-2 bg-gradient-to-r ${selectedProfile.gradient} rounded-full mr-3`}></div>
                  About
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {selectedProfile.biography}
                </p>
              </div>

              {/* Details Grid */}
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                {/* Experience */}
                <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700">
                  <h3 className="text-lg font-bold text-white mb-4 flex items-center">
                    <div className={`w-2 h-2 bg-gradient-to-r ${selectedProfile.gradient} rounded-full mr-2`}></div>
                    Experience
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    {selectedProfile.experience}
                  </p>
                </div>

                {/* Education */}
                <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700">
                  <h3 className="text-lg font-bold text-white mb-4 flex items-center">
                    <div className={`w-2 h-2 bg-gradient-to-r ${selectedProfile.gradient} rounded-full mr-2`}></div>
                    Education
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    {selectedProfile.education}
                  </p>
                </div>
              </div>

              {/* Skills Section */}
              <div className="mb-8">
                <h3 className="text-lg font-bold text-white mb-4 flex items-center">
                  <div className={`w-2 h-2 bg-gradient-to-r ${selectedProfile.gradient} rounded-full mr-2`}></div>
                  Skills & Expertise
                </h3>
                <div className="flex flex-wrap gap-2">
                  {selectedProfile.skills.map((skill, index) => (
                    <span
                      key={index}
                      className="px-4 py-2 rounded-lg text-sm font-medium bg-gray-800 text-gray-300 border border-gray-700 hover:border-purple-400/50 hover:text-white transition-all duration-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Interests/Soft Skills */}
              <div className="mb-8">
                <h3 className="text-lg font-bold text-white mb-4 flex items-center">
                  <div className={`w-2 h-2 bg-gradient-to-r ${selectedProfile.gradient} rounded-full mr-2`}></div>
                  {selectedProfile.interests ? "Interests" : "Soft Skills"}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {(selectedProfile.interests || selectedProfile.softSkills)?.map((item, index) => (
                    <span
                      key={index}
                      className="px-4 py-2 rounded-lg text-sm font-medium bg-gradient-to-r from-gray-800 to-gray-900 text-gray-300 border border-gray-700/50 hover:border-gray-600/50 transition-all duration-300"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              {/* Call to Action */}
              <div className="text-center pt-6 border-t border-gray-700">
                <p className="text-gray-300 mb-4">
                  Interested in working with {selectedProfile.name.split(' ')[0]}?
                </p>
                <Link 
                  to="/contact" 
                  onClick={closeModal}
                  className={`inline-block bg-gradient-to-r ${selectedProfile.gradient} hover:shadow-lg transform transition-all duration-300 text-white font-bold py-3 px-8 rounded-xl hover:scale-105`}
                >
                  Get In Touch
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default OurProfile;