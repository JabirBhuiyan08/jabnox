import React, { useState } from "react";
import JabirBhuiyan from '../assets/JabirBhuiyan.jpg';
import NoyonKhan from '../assets/SabbirMdNoyonKhan.jpg';
import { Link } from "react-router-dom";
import { FaInstagram } from "react-icons/fa";

const OurProfile = () => {
  const [selectedProfile, setSelectedProfile] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

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
      // linkedin: "https://linkedin.com/in/noyon",
      instagram: "https://www.instagram.com/noyon_28?igsh=NW02YXN2OTJuemRy",
      email: "noyonkhan81777@gmail.com"
    }
  ];

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
          return (
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
            </svg>
          );
        case 'linkedin':
          return (
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
          );
        case 'instagram':
          return (
            <FaInstagram />
          );
        case 'email':
          return (
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
            </svg>
          );
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
        className={`w-8 h-8 rounded-full bg-gradient-to-r ${gradient} flex items-center justify-center text-white hover:scale-110 transform transition-all duration-300 shadow-lg`}
      >
        {getIcon()}
      </a>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-violet-900 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <div className="inline-block bg-gradient-to-r from-purple-600 to-blue-600 rounded-full px-4 py-1 mb-4">
            <span className="text-white text-xs font-semibold tracking-wide">
              LEADERSHIP TEAM
            </span>
          </div>
          <h1 className="text-2xl md:text-6xl font-bold text-white mb-4">
            Meet Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">Co-Founders</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
            The visionary minds behind <span className="text-purple-400 font-semibold">JABNOX.COM</span>, 
            combining technical excellence with creative innovation to build extraordinary digital experiences.
          </p>
        </div>

        {/* Profile Cards Grid - Two cards in one row for all devices */}
        <div className="grid grid-cols-2 gap-4 md:gap-6 max-w-4xl mx-auto">
          {profiles.map((profile) => (
            <div
              key={profile.id}
              className="group relative cursor-pointer"
              onClick={() => openModal(profile)}
            >
              {/* Background Glow Effect */}
              <div className={`absolute inset-0 bg-gradient-to-r ${profile.gradient} rounded-xl blur-lg opacity-20 group-hover:opacity-30 transition-all duration-500`}></div>
              
              {/* Main Card - Compact for two columns */}
              <div className="relative bg-gray-800/50 backdrop-blur-xl rounded-xl border border-gray-700/50 p-4 hover:border-gray-600/50 transition-all duration-500 group-hover:scale-105 h-full">
                
                {/* Content */}
                <div className="flex flex-col items-center text-center h-full">
                  {/* Profile Image - Smaller */}
                  <div className="relative mb-3">
                    <div className={`absolute inset-0 bg-gradient-to-r ${profile.gradient} rounded-lg blur-md opacity-50`}></div>
                    <img
                      src={profile.image}
                      alt={profile.name}
                      className="relative w-16 h-16 md:w-20 md:h-20 object-cover rounded-lg border-2 border-gray-700 group-hover:border-gray-600 transition-all duration-500"
                    />
                  </div>

                  {/* Name & Title - Compact */}
                  <div className="flex-1">
                    <h2 className="text-sm md:text-lg font-bold text-white mb-1 line-clamp-1">
                      {profile.name}
                    </h2>
                    <p className="text-xs md:text-sm text-gray-300 mb-2 line-clamp-2">
                      {profile.title}
                    </p>
                    <div className={`inline-block bg-gradient-to-r ${profile.gradient} text-white px-2 py-1 rounded-full text-xs font-bold shadow-lg mb-3`}>
                      {profile.role}
                    </div>
                  </div>

                  {/* View Profile Button - Compact */}
                  <button className={`mt-auto bg-gradient-to-r ${profile.gradient} hover:scale-105 transform transition-all duration-300 text-white font-semibold py-1 px-3 rounded-full text-xs shadow-lg hover:shadow-xl flex items-center gap-1`}>
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/>
                    </svg>
                    View
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Footer CTA */}
        <div className="text-center mt-12">
          <div className="bg-gradient-to-r from-purple-900/50 to-blue-900/50 rounded-xl p-6 border border-purple-500/20">
            <h3 className="text-xl md:text-3xl font-bold text-white mb-3">
              Ready to Build Something Amazing?
            </h3>
            <p className="text-gray-300 text-base md:text-lg mb-4 max-w-2xl mx-auto">
              Let's collaborate and bring your digital vision to life with cutting-edge technology and creative design.
            </p>
            <Link to={'/contact'} className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-bold py-3 px-8 md:py-4 md:px-12 rounded-full text-base md:text-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
              Start Your Project
            </Link>
          </div>
        </div>
      </div>

      {/* Profile Modal with All Information */}
      {isModalOpen && selectedProfile && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <div className="relative max-w-4xl w-full max-h-[90vh] overflow-y-auto bg-gray-900 rounded-3xl border border-gray-700/50">
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 z-10 w-8 h-8 md:w-10 md:h-10 rounded-full bg-gray-800/80 hover:bg-gray-700/80 flex items-center justify-center text-white hover:scale-110 transition-all duration-300"
            >
              <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Modal Content */}
            <div className="p-6 md:p-8">
              {/* Header with Image and Title */}
              <div className="flex flex-col md:flex-row items-center gap-6 md:gap-8 mb-6 md:mb-8">
                <div className="relative flex-shrink-0">
                  <div className={`absolute inset-0 bg-gradient-to-r ${selectedProfile.gradient} rounded-xl md:rounded-2xl blur-md opacity-50`}></div>
                  <img
                    src={selectedProfile.image}
                    alt={selectedProfile.name}
                    className="relative w-24 h-24 md:w-32 md:h-32 object-cover rounded-xl md:rounded-2xl border-4 border-gray-700"
                  />
                </div>
                <div className="text-center md:text-left flex-1">
                  <h2 className="text-2xl md:text-4xl font-bold text-white mb-2">
                    {selectedProfile.name}
                  </h2>
                  <p className="text-lg md:text-xl text-gray-300 mb-3">
                    {selectedProfile.title}
                  </p>
                  <div className={`inline-block bg-gradient-to-r ${selectedProfile.gradient} text-white px-4 py-2 rounded-full text-sm md:text-lg font-bold shadow-lg mb-4`}>
                    {selectedProfile.role} & Co-Founder
                  </div>
                  <div className="text-gray-300 text-sm md:text-base mb-2">Email:
                    <span className="text-blue-500 hover:underline ml-1 cursor-pointer">
                     {selectedProfile.email}
                    </span>
                    </div>
                  
                  {/* Social Media Links */}
                  <div className="flex gap-2 md:gap-3 justify-center md:justify-start">
                    <SocialIcon platform="facebook" url={selectedProfile.facebook} gradient={selectedProfile.gradient} />
                    <SocialIcon platform="linkedin" url={selectedProfile.linkedin} gradient={selectedProfile.gradient} />
                    <SocialIcon platform="instagram" url={selectedProfile.instagram} gradient={selectedProfile.gradient} />
                    
                  </div>
                </div>
              </div>

              {/* Full Biography */}
              <div className="mb-6 md:mb-8">
                <h3 className="text-xl md:text-2xl font-bold text-white mb-3 md:mb-4 flex items-center">
                  <div className={`w-2 h-2 md:w-3 md:h-3 bg-gradient-to-r ${selectedProfile.gradient} rounded-full mr-2 md:mr-3`}></div>
                  About
                </h3>
                <p className="text-gray-300 text-base md:text-lg leading-relaxed">
                  {selectedProfile.biography}
                </p>
              </div>

              {/* Details Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-6 md:mb-8">
                {/* Experience */}
                <div>
                  <h3 className="text-lg md:text-xl font-bold text-white mb-3 md:mb-4 flex items-center">
                    <div className={`w-1.5 h-1.5 md:w-2 md:h-2 bg-gradient-to-r ${selectedProfile.gradient} rounded-full mr-2`}></div>
                    Experience
                  </h3>
                  <p className="text-gray-300 text-sm md:text-base leading-relaxed">
                    {selectedProfile.experience}
                  </p>
                </div>

                {/* Education */}
                <div>
                  <h3 className="text-lg md:text-xl font-bold text-white mb-3 md:mb-4 flex items-center">
                    <div className={`w-1.5 h-1.5 md:w-2 md:h-2 bg-gradient-to-r ${selectedProfile.gradient} rounded-full mr-2`}></div>
                    Education
                  </h3>
                  <p className="text-gray-300 text-sm md:text-base leading-relaxed">
                    {selectedProfile.education}
                  </p>
                </div>
              </div>

              {/* Skills Section */}
              <div className="mb-6 md:mb-8">
                <h3 className="text-lg md:text-xl font-bold text-white mb-3 md:mb-4 flex items-center">
                  <div className={`w-1.5 h-1.5 md:w-2 md:h-2 bg-gradient-to-r ${selectedProfile.gradient} rounded-full mr-2`}></div>
                  Skills & Expertise
                </h3>
                <div className="flex flex-wrap gap-2 md:gap-3">
                  {selectedProfile.skills.map((skill, index) => (
                    <span
                      key={index}
                      className={`px-3 py-1 md:px-4 md:py-2 rounded-full text-xs md:text-sm font-medium bg-gray-800 text-gray-300 border border-gray-700 hover:border-${selectedProfile.color}-400/50 transition-all duration-300`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Interests/Soft Skills */}
              <div className="mb-6 md:mb-8">
                <h3 className="text-lg md:text-xl font-bold text-white mb-3 md:mb-4 flex items-center">
                  <div className={`w-1.5 h-1.5 md:w-2 md:h-2 bg-gradient-to-r ${selectedProfile.gradient} rounded-full mr-2`}></div>
                  {selectedProfile.interests ? "Interests" : "Soft Skills"}
                </h3>
                <div className="flex flex-wrap gap-2 md:gap-3">
                  {(selectedProfile.interests || selectedProfile.softSkills)?.map((item, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 md:px-4 md:py-2 rounded-full text-xs md:text-sm font-medium bg-gradient-to-r from-gray-800 to-gray-900 text-gray-300 border border-gray-700/50 hover:border-gray-600/50 transition-all duration-300"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              {/* Call to Action */}
              <div className="text-center pt-4 md:pt-6 border-t border-gray-700/50">
                <p className="text-gray-300 text-base md:text-lg mb-3 md:mb-4">
                  Interested in working with {selectedProfile.name.split(' ')[0]}?
                </p>
                <Link 
                  to="/contact" 
                  onClick={closeModal}
                  className={`inline-block bg-gradient-to-r ${selectedProfile.gradient} hover:scale-105 transform transition-all duration-300 text-white font-bold py-2 px-6 md:py-3 md:px-8 rounded-full text-base md:text-lg shadow-lg hover:shadow-xl`}
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