import React from 'react';

const OurProfile = () => {
  return (
    <div className="max-w-screen-xl mx-auto px-4 py-12">
      {/* Heading */}
      <h1 className="text-3xl md:text-4xl font-extrabold text-center mb-10 text-white">
        Meet the Co-Founders of <span className="text-violet-700">JABNOX.COM</span>
      </h1>

      {/* Profile Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-center">
        {/* Profile 1 */}
        <div className="bg-gradient-to-br from-pink-300 via-purple-300 to-indigo-300 rounded-lg p-5 text-black shadow-md hover:shadow-xl transition-all duration-300 text-sm max-w-md mx-auto">
          <img
            src="https://via.placeholder.com/300x160"
            alt="Co-Founder 1"
            className="w-full h-40 object-cover rounded-md mb-3"
          />
          <p className="mb-1"><strong>Name:</strong> John Doe</p>
          <p className="mb-1"><strong>Job Title:</strong> CEO & Co-Founder</p>
          <p className="mb-1"><strong>Biography:</strong> Passionate tech entrepreneur with 10+ years.</p>
          <p className="mb-1"><strong>Experience:</strong> 10+ Years in Full Stack Development</p>
          <p className="mb-1"><strong>Education:</strong> B.Sc. in Computer Science</p>
          <p className="mb-1"><strong>Skills:</strong> MERN, DevOps, UI/UX</p>
          <p className="mb-3"><strong>Interests:</strong> Coding, AI, Gaming</p>
          <button className="bg-violet-700 hover:bg-violet-800 text-white font-medium py-1.5 px-4 rounded">
            View Full Profile
          </button>
        </div>

        {/* Profile 2 */}
        <div className="bg-gradient-to-br from-pink-300 via-purple-300 to-indigo-300 rounded-lg p-5 text-black shadow-md hover:shadow-xl transition-all duration-300 text-sm max-w-md mx-auto">
          <img
            src="https://via.placeholder.com/300x160"
            alt="Co-Founder 2"
            className="w-full h-40 object-cover rounded-md mb-3"
          />
          <p className="mb-1"><strong>Name:</strong> Jane Smith</p>
          <p className="mb-1"><strong>Job Title:</strong> CTO & Co-Founder</p>
          <p className="mb-1"><strong>Biography:</strong> Tech visionary leading innovation at Jabnox.</p>
          <p className="mb-1"><strong>Experience:</strong> 8+ Years in Software Architecture</p>
          <p className="mb-1"><strong>Education:</strong> M.Sc. in Data Science</p>
          <p className="mb-1"><strong>Skills:</strong> Cloud, AI, Cybersecurity</p>
          <p className="mb-3"><strong>Interests:</strong> Research, Tech Talks, Music</p>
          <button className="bg-violet-700 hover:bg-violet-700 text-white font-medium py-1.5 px-4 rounded">
            View Full Profile
          </button>
        </div>
      </div>
    </div>
  );
};

export default OurProfile;
