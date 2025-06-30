const PortfolioData = ({ portfolio, handleDelete }) => {
    const {
        portfolioName,
        portfolioDescription,
        portfolioNotes,
        portfolioClientName,
        portfolioImage,
        completionDate,
        projectCategory,
        portfolioLink,
        portfolioOwnerName,
        technologiesUsed,
        _id
    } = portfolio;

    return (
        <div className="max-w-sm rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 bg-white dark:bg-gray-800">
            {/* Portfolio Image */}
            <div className="relative h-48 overflow-hidden">
                <img 
                    src={portfolioImage} 
                    alt={portfolioName} 
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
                <div className="absolute bottom-0 left-0 bg-gradient-to-t from-black/70 to-transparent w-full p-4">
                    <span className="inline-block bg-violet-600 text-white text-xs px-2 py-1 rounded-full mb-1">
                        {projectCategory}
                    </span>
                    <h3 className="text-xl font-bold text-white">{portfolioName}</h3>
                </div>
            </div>

            {/* Portfolio Content */}
            <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                    <div>
                        <p className="text-gray-500 dark:text-gray-300 text-sm">Client: {portfolioClientName}</p>
                        <p className="text-gray-500 dark:text-gray-300 text-sm">By: {portfolioOwnerName}</p>
                    </div>
                    <p className="text-gray-500 dark:text-gray-300 text-sm">{new Date(completionDate).toLocaleDateString()}</p>
                </div>

                <p className="text-gray-700 dark:text-gray-300 mb-4 line-clamp-3">{portfolioDescription}</p>
                
                {portfolioNotes && (
                    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-3 rounded-lg mb-4">
                        <p className="text-yellow-700 dark:text-yellow-300 text-sm italic">{portfolioNotes}</p>
                    </div>
                )}

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                    {technologiesUsed?.split(',').map((tech, index) => (
                        <span 
                            key={index} 
                            className="inline-block bg-gray-200 dark:bg-gray-700 rounded-full px-3 py-1 text-xs font-semibold text-gray-700 dark:text-gray-300"
                        >
                            {tech.trim()}
                        </span>
                    ))}
                </div>

                {/* Action Buttons */}
                <div className="flex justify-between md:gap-2 items-center mt-4">
                    <a 
                        href={portfolioLink} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-4 py-2 bg-violet-600 hover:bg-violet-700 text-white text-sm font-medium rounded-lg transition-colors duration-300"
                    >
                        View Live Site
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                    </a>
                    <button 
                        onClick={() => handleDelete(_id)}
                        className="inline-flex items-center px-4 py-2 bg-red-500 hover:bg-red-600 text-white text-sm font-medium rounded-lg transition-colors duration-300"
                    >
                        Delete
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default PortfolioData;