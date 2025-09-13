import { MdDelete } from "react-icons/md";
import { FiExternalLink, FiCalendar, FiUser, FiFileText, FiImage, FiAward } from "react-icons/fi";

const MapProject = ({ project, handleDelete }) => {
  const {
    _id,
    projectName,
    ownerName,
    Email,
    shortDescription,
    projectDescription,
    tags,
    notes,
    hasWebsite,
    websiteUrl,
    domainExpiry,
    projectImage,
    certificate,
  } = project;

  return (
    <div className="h-full flex flex-col bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl shadow-lg overflow-hidden border border-gray-700/50 hover:shadow-xl hover:border-gray-600 transition-all duration-300 group">
      {/* Project Header with Gradient */}
      <div className="p-6 bg-gradient-to-r from-blue-600/20 to-purple-600/20 border-b border-gray-700/50">
        <div className="flex justify-between items-start mb-3">
          <h2 className="text-xl font-bold text-white truncate group-hover:text-blue-300 transition-colors">
            {projectName}
          </h2>
          {tags && (
            <span className="bg-blue-500/10 text-blue-300 text-xs font-semibold px-3 py-1 rounded-full whitespace-nowrap border border-blue-500/20">
              {tags}
            </span>
          )}
        </div>

        {ownerName && (
          <div className="flex items-center justify-between">
            <div className="flex items-center text-gray-300">
              <FiUser className="w-4 h-4 mr-2 text-blue-400" />
              <span className="text-sm">{ownerName}</span>
            </div>
            <button
              onClick={() => handleDelete(_id)}
              className="p-2 bg-red-500/10 hover:bg-red-500/20 text-red-400 hover:text-red-300 rounded-lg border border-red-500/20 transition-all duration-200"
              title="Delete project"
            >
              <MdDelete className="w-5 h-5" />
            </button>
          </div>
        )}
      </div>
      
      {/* Project Content */}
      <div className="p-6 flex-1 flex flex-col">
        {/* Descriptions */}
        <div className="space-y-4 mb-5">
          {shortDescription && (
            <div>
              <div className="flex items-center mb-2">
                <FiFileText className="w-4 h-4 mr-2 text-blue-400" />
                <h3 className="text-sm font-medium text-gray-300">
                  Short Description
                </h3>
              </div>
              <p className="text-gray-400 text-sm pl-6 line-clamp-2">
                {shortDescription}
              </p>
            </div>
          )}

          {Email && (
            <div className="flex items-center text-gray-400 text-sm">
              <svg className="w-4 h-4 mr-2 text-blue-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
              <span className="truncate">{Email}</span>
            </div>
          )}

          {projectDescription && (
            <div>
              <div className="flex items-center mb-2">
                <FiFileText className="w-4 h-4 mr-2 text-blue-400" />
                <h3 className="text-sm font-medium text-gray-300">
                  Detailed Description
                </h3>
              </div>
              <p className="text-gray-400 text-sm pl-6 line-clamp-3">
                {projectDescription}
              </p>
            </div>
          )}
        </div>

        {/* Website Information */}
        {hasWebsite && (
          <div className="mt-4 pt-4 border-t border-gray-700/50">
            <h3 className="flex items-center text-sm font-medium text-gray-300 mb-3">
              <FiExternalLink className="w-4 h-4 mr-2 text-green-400" />
              Website Information
            </h3>
            <div className="space-y-2 text-sm pl-6">
              {websiteUrl && (
                <div className="flex items-center">
                  <a
                    href={websiteUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:text-blue-300 truncate flex items-center transition-colors"
                  >
                    <FiExternalLink className="w-3 h-3 mr-1" />
                    {websiteUrl.replace(/^https?:\/\//, '')}
                  </a>
                </div>
              )}

              {domainExpiry && (
                <div className="flex items-center text-gray-400">
                  <FiCalendar className="w-3 h-3 mr-2 text-purple-400" />
                  <span>Expires: {new Date(domainExpiry).toLocaleDateString()}</span>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Files Information */}
        <div className="mt-4 pt-4 border-t border-gray-700/50">
          <h3 className="text-sm font-medium text-gray-300 mb-3">
            Attachments
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
            {/* Project Image */}
            {projectImage && (
              <div className="flex flex-col p-3 bg-gray-700/30 rounded-lg border border-gray-600/30 hover:bg-gray-700/50 transition-colors">
                <div className="flex items-center mb-2">
                  <FiImage className="w-4 h-4 mr-2 text-blue-400" />
                  <span className="text-gray-300">Project Image</span>
                </div>
                <img
                  src={projectImage}
                  alt="Project"
                  className="w-full h-24 object-cover rounded-md border border-gray-600/50"
                />
              </div>
            )}

            {/* Certificate */}
            {certificate && (
              <div className="flex flex-col p-3 bg-gray-700/30 rounded-lg border border-gray-600/30 hover:bg-gray-700/50 transition-colors">
                <div className="flex items-center mb-2">
                  <FiAward className="w-4 h-4 mr-2 text-yellow-400" />
                  <span className="text-gray-300">Certificate</span>
                </div>
                <img
                  src={certificate}
                  alt="Certificate"
                  className="w-full h-24 object-cover rounded-md border border-gray-600/50"
                />
              </div>
            )}
          </div>
        </div>

        {/* Notes */}
        {notes && (
          <div className="mt-4 pt-4 border-t border-gray-700/50">
            <h3 className="flex items-center text-sm font-medium text-gray-300 mb-2">
              <svg className="w-4 h-4 mr-2 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
              </svg>
              Notes
            </h3>
            <p className="text-gray-400 text-sm bg-gray-700/30 p-3 rounded-lg border border-gray-600/30">
              {notes}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default MapProject;