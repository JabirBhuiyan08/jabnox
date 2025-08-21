import { useState } from "react";
import useAxiosPublic from "../hooks/useAxiosPublic";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

const ExcelDetails = () => {
  const axiosPublic = useAxiosPublic();
  const [search, setSearch] = useState("");
  const queryClient = useQueryClient();

  const { data: files = [], isLoading } = useQuery({
    queryKey: ["files"],
    queryFn: async () => {
      const res = await axiosPublic.get("/excel");
      return res.data;
    },
  });

  const deleteFile = useMutation({
    mutationFn: async (id) => axiosPublic.delete(`/excel/${id}`),
    onSuccess: () => queryClient.invalidateQueries(["files"]),
  });

  if (isLoading) return (
    <div className="flex justify-center items-center h-64">
      <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
    </div>
  );

  // Filter search across all sheets/data
  const filteredFiles = files.map((file) => {
    // Handle files with direct data property (single sheet)
    if (file.data) {
      const filteredData = file.data.filter((row) =>
        Object.values(row)
          .join(" ")
          .toLowerCase()
          .includes(search.toLowerCase())
      );
      return { ...file, data: filteredData };
    }
    
    // Handle files with sheets array (multiple sheets)
    if (file.sheets) {
      const filteredSheets = file.sheets.map((sheet) => ({
        ...sheet,
        data: sheet.data.filter((row) =>
          Object.values(row)
            .join(" ")
            .toLowerCase()
            .includes(search.toLowerCase())
        ),
      }));
      return { ...file, sheets: filteredSheets };
    }
    
    return file;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Search Box */}
      <div className="mb-8">
        <div className="relative max-w-md">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <svg className="h-5 w-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
            </svg>
          </div>
          <input
            type="search"
            className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-700 placeholder-gray-400 transition duration-150 ease-in-out"
            placeholder="Search across all files..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </div>

      {filteredFiles.slice().reverse().map((file, i) => (
        <div key={i} className="mb-10 bg-white rounded-xl shadow-md overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-200 bg-gradient-to-r from-blue-50 to-gray-50">
            <div className="flex justify-between items-center">
              <div>
                <h2 className="text-xl font-semibold text-gray-800">{file.filename}</h2>
                <p className="text-sm text-gray-500 mt-1">
                  Uploaded: {new Date(file.uploadedAt).toLocaleString()}
                </p>
              </div>
              <button
                className="bg-red-500 hover:bg-red-600 text-white font-medium py-2 px-4 rounded-lg transition duration-200 ease-in-out transform hover:scale-105 shadow-sm"
                onClick={() => deleteFile.mutate(file._id)}
              >
                Delete File
              </button>
            </div>
          </div>

          {/* Render single-sheet files */}
          {file.data && (
            <div className="p-6">
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      {file.data[0] && Object.keys(file.data[0]).map((header) => (
                        <th
                          key={header}
                          className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                          {header}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {file.data.map((row, idx) => (
                      <tr key={idx} className={idx % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                        {file.data[0] && Object.keys(file.data[0]).map((header) => (
                          <td
                            key={header}
                            className="px-6 py-4 whitespace-nowrap text-sm text-gray-700"
                          >
                            {row[header]}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
                {file.data.length === 0 && (
                  <div className="text-center py-8 text-gray-500">
                    No matching data found in this file
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Render multi-sheet files */}
          {file.sheets && file.sheets.map((sheet, sheetIndex) => (
            <div key={sheetIndex} className="p-6 border-t border-gray-200">
              <h3 className="text-lg font-medium text-gray-700 mb-4">
                Sheet: {sheet.sheetName}
              </h3>
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      {sheet.data[0] && Object.keys(sheet.data[0]).map((header) => (
                        <th
                          key={header}
                          className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                          {header}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {sheet.data.map((row, idx) => (
                      <tr key={idx} className={idx % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                        {sheet.data[0] && Object.keys(sheet.data[0]).map((header) => (
                          <td
                            key={header}
                            className="px-6 py-4 whitespace-nowrap text-sm text-gray-700"
                          >
                            {row[header]}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
                {sheet.data.length === 0 && (
                  <div className="text-center py-8 text-gray-500">
                    No matching data found in this sheet
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      ))}

      {filteredFiles.length === 0 && (
        <div className="text-center py-12 bg-white rounded-xl shadow-sm">
          <svg
            className="mx-auto h-12 w-12 text-gray-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
            />
          </svg>
          <h3 className="mt-2 text-lg font-medium text-gray-900">No files found</h3>
          <p className="mt-1 text-sm text-gray-500">
            {search ? "Try a different search term" : "Upload some Excel files to get started"}
          </p>
        </div>
      )}
    </div>
  );
};

export default ExcelDetails;