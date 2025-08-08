import { MdDelete } from "react-icons/md";

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
    <div
      key={_id}
      className="h-full flex flex-col bg-white rounded-lg shadow-md overflow-hidden border border-gray-200 hover:shadow-lg transition-shadow duration-300"
    >
      {" "}
      {/* Project Header */}
      <div className="p-6 bg-gray-50 border-b border-gray-200">
        <div className="flex justify-between items-start">
          <h2 className="text-xl font-bold text-gray-800 truncate">
            {projectName}
          </h2>
          {tags && (
            <span className="bg-indigo-100 text-indigo-800 text-xs font-semibold px-2.5 py-0.5 rounded-full whitespace-nowrap">
              {tags}
            </span>
          )}
        </div>

        {ownerName && (

        <div className="mt-2 flex items-center justify-between">
          <div className="mt-2 flex items-center text-gray-600">
            <svg
              className="w-4 h-4 mr-1.5"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                clipRule="evenodd"
              />
            </svg>
            <span className="text-sm">{ownerName}</span>
          </div>
          <div>
            <button onClick={()=>handleDelete(_id)}
            className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded">
            <MdDelete></MdDelete>
            </button>
          </div>
          </div>
        )}
      </div>
      {/* Project Content */}
      <div className="p-6">
        {/* Descriptions */}
        <div className="space-y-4">
          {shortDescription && (
            <div>
              <h3 className="text-sm font-medium text-gray-700 mb-1">
                Short Description
              </h3>
              <p className="text-gray-600 text-sm line-clamp-3">
                {shortDescription}
              </p>
            </div>
          )}
          {Email}

          {projectDescription && (
            <div>
              <h3 className="text-sm font-medium text-gray-700 mb-1">
                Detailed Description
              </h3>
              <p className="text-gray-600 text-sm line-clamp-4">
                {projectDescription}
              </p>
            </div>
          )}
        </div>

        {/* Website Information */}
        {hasWebsite && (
          <div className="mt-4 pt-4 border-t border-gray-100">
            <h3 className="text-sm font-medium text-gray-700 mb-2">
              Website Information
            </h3>
            <div className="space-y-2 text-sm">
              {websiteUrl && (
                <div className="flex items-center">
                  <svg
                    className="w-4 h-4 mr-2 text-gray-500 flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <a
                    href={websiteUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-indigo-600 hover:text-indigo-800 truncate"
                  >
                    {websiteUrl}
                  </a>
                </div>
              )}

              {domainExpiry && (
                <div className="flex items-center text-gray-700">
                  <svg
                    className="w-4 h-4 mr-2 text-gray-500 flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>
                    Domain expires:{" "}
                    {new Date(domainExpiry).toLocaleDateString()}
                  </span>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Files Information */}
        <div className="mt-4 pt-4 border-t border-gray-100">
          <h3 className="text-sm font-medium text-gray-700 mb-2">
            Attachments
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
            <div className="flex items-center p-2 bg-gray-50 rounded">
              <svg
                className="w-5 h-5 mr-2 text-gray-500 flex-shrink-0"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"
                  clipRule="evenodd"
                />
              </svg>
              <div>
                <p className="font-medium text-gray-700">Project Image</p>
                <p className="text-gray-500 text-xs">
                  {projectImage && Object.keys(projectImage).length > 0
                    ? "Uploaded"
                    : "Not uploaded"}
                </p>
              </div>
            </div>

            <div className="flex items-center p-2 bg-gray-50 rounded">
              <svg
                className="w-5 h-5 mr-2 text-gray-500 flex-shrink-0"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z"
                  clipRule="evenodd"
                />
              </svg>
              <div>
                <p className="font-medium text-gray-700">Certificate</p>
                <p className="text-gray-500 text-xs">
                  {certificate && Object.keys(certificate).length > 0
                    ? "Uploaded"
                    : "Not uploaded"}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Notes */}
        {notes && (
          <div className="mt-4 pt-4 border-t border-gray-100">
            <h3 className="text-sm font-medium text-gray-700 mb-2">Notes</h3>
            <p className="text-gray-600 text-sm bg-gray-50 p-3 rounded">
              {notes}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default MapProject;
