import useAxiosSecure from "../../hooks/axiosSecure";
import { useQueryClient, useMutation, useQuery } from "@tanstack/react-query";
import useAuth from "../../hooks/useAuth";
import {
  FiBook,
  FiMail,
  FiFileText,
  FiMessageSquare,
  FiCalendar,
} from "react-icons/fi";
import LoadingSpinner from "../../Components/LoadingSpinner";
import { FaDeleteLeft } from "react-icons/fa6";

const NoteFromJabnox = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();
  const queryClient = useQueryClient();

  const { data: noteData = [], isLoading } = useQuery({
    queryKey: ["note", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/notes/${user?.email}`);
      return res.data;
    },
    enabled: !!user?.email,
  });

  const mutationDelete = useMutation({
    mutationFn: async (id) => {
      const res = await axiosSecure.delete(`/notes/${id}`);
      return res.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["note", user?.email] });
    },
    onError: (error) => {
      console.error("Delete failed:", error.response?.data || error.message);
    },
  });

  if (isLoading) return <LoadingSpinner />;

  return (
    <div className="min-h-screen sm:py-8 sm:px-4 lg:px-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-6 sm:mb-8 md:mb-10">
          <div className="inline-flex items-center justify-center p-2 sm:p-3 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-xl sm:rounded-2xl mb-3 sm:mb-4">
            <FiMessageSquare className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
          </div>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent mb-2">
            Your Notes from Jabnox
          </h1>
          <p className="text-gray-400 text-sm sm:text-base max-w-md mx-auto px-2">
            {noteData.length === 0
              ? "You don't have any notes yet"
              : `You have ${noteData.length} note${
                  noteData.length !== 1 ? "s" : ""
                } from our team`}
          </p>
        </div>

        {/* Notes Container */}
        <div className="space-y-4 sm:space-y-6">
          {noteData.length === 0 ? (
            <div className="text-center py-8 sm:py-10 px-4 sm:px-6 rounded-2xl sm:rounded-6xl bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 shadow-lg">
              <div className="inline-flex items-center justify-center p-3 sm:p-4 bg-gray-700 rounded-xl sm:rounded-2xl mb-3 sm:mb-4">
                <FiBook className="h-8 w-8 sm:h-10 sm:w-10 text-indigo-400" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-gray-200 mb-2">
                No notes found
              </h3>
              <p className="text-gray-400 text-sm sm:text-base max-w-md mx-auto">
                When Jabnox sends you notifications, they will appear here
              </p>
            </div>
          ) : (
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 rounded-xl sm:rounded-2xl shadow-lg p-4 sm:p-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 md:gap-5 max-h-[70vh] overflow-y-auto pr-1 sm:pr-2">
                {noteData
                  .slice()
                  .reverse()
                  .map((note) => (
                    <div
                      key={note._id}
                      className="group relative  bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 rounded-lg sm:rounded-xl p-3 sm:p-4 md:p-5 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5 sm:hover:-translate-y-1"
                    >
                      {/* Corner accent */}
                      <div className="absolute top-0 right-0 w-12 h-12 sm:w-16 sm:h-16 overflow-hidden">
                        <div className="absolute top-0 right-0 w-24 h-24 sm:w-32 sm:h-32 bg-indigo-500/10 group-hover:bg-indigo-500/20 transition-colors duration-300 transform rotate-45 -translate-y-10 sm:-translate-y-12 translate-x-6 sm:translate-x-8"></div>
                      </div>

                      <div className="flex items-start  gap-3 sm:gap-4 relative z-10">
                        {/* Icon */}
                        <div className="flex-shrink-0 mt-6 p-2 sm:p-3 rounded-lg sm:rounded-xl bg-gradient-to-br from-indigo-500/20 to-purple-500/20 group-hover:from-indigo-500/30 group-hover:to-purple-500/30 transition-all duration-300">
                          <FiFileText className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 text-indigo-400 group-hover:text-indigo-300" />
                        </div>

                        {/* Content */}
                        <div className="flex-1 min-w-0 mt-6">
                          <h3 className="text-base sm:text-lg font-semibold text-white truncate group-hover:text-indigo-300 transition-colors duration-300">
                            {note.title}
                          </h3>
                          <p className="mt-1 sm:mt-2 text-sm sm:text-base text-gray-300 whitespace-pre-line break-words max-h-20 overflow-y-auto">
                            {note.text}
                          </p>

                          {/* Footer */}
                          <div className="mt-2 sm:mt-3 flex flex-col xs:flex-row xs:items-center gap-1 xs:gap-2 text-xs text-gray-400">
                            <div className="flex items-center gap-1">
                              <FiMail className="h-3 w-3 text-indigo-400" />
                              <span className="truncate">Jabnox Team</span>
                            </div>
                            <span className="hidden xs:inline text-gray-500">
                              •
                            </span>
                            <div className="flex items-center gap-1">
                              <FiCalendar className="h-3 w-3 text-indigo-400" />
                              <span>
                                {new Date(
                                  note.createdAt || Date.now()
                                ).toLocaleDateString()}
                              </span>
                            </div>
                          </div>


                          {/* Delete button */}
                          <div className="absolute top-0 right-0 text-3xl text-red-500">
                            <button
                              onClick={() => {
                                console.log("Deleting note:", note._id);
                                mutationDelete.mutate(note._id);
                              }}
                            >
                              <FaDeleteLeft />
                            </button>
                          </div>
                        </div>
                      </div>

                      {/* Hover glow effect */}
                      <div className="absolute inset-0 rounded-lg sm:rounded-xl bg-gradient-to-r from-indigo-500/0 to-purple-500/0 group-hover:from-indigo-500/5 group-hover:to-purple-500/5 transition-all duration-300"></div>
                    </div>
                  ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default NoteFromJabnox;
