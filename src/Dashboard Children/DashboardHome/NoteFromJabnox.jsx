import useAxiosSecure from "../../hooks/axiosSecure";
import { useQueryClient, useMutation, useQuery } from "@tanstack/react-query";
import useAuth from "../../hooks/useAuth";
import { FiMessageSquare, FiBell } from "react-icons/fi";
import LoadingSpinner from "../../Components/LoadingSpinner";
import { FaRegTrashAlt } from "react-icons/fa";

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
    <div className="w-76 bg-white rounded-lg shadow-lg overflow-hidden flex flex-col h-[400px]">
      {/* Header */}
      <div className="bg-blue-600 px-3 py-2 flex items-center justify-between">
        <div className="flex items-center">
          <FiBell className="h-4 w-4 text-white mr-2" />
          <h2 className="text-white font-semibold text-sm">Notifications</h2>
        </div>
        <span className="bg-blue-800 text-white text-xs font-medium px-1.5 py-0.5 rounded-full">
          {noteData.length}
        </span>
      </div>

      {/* Notification content with fixed height and scroll */}
      <div className="flex-1 overflow-y-auto p-2">
        {noteData.length === 0 ? (
          <div className="text-center py-6 px-2">
            <FiBell className="h-8 w-8 text-gray-400 mx-auto mb-2" />
            <p className="text-gray-500 text-xs">No notifications yet</p>
            <p className="text-gray-400 text-xs mt-1">
              Notifications from Jabnox will appear here.
            </p>
          </div>
        ) : (
          <div className="space-y-2">
            {noteData
              .slice()
              .reverse()
              .map((note) => (
                <div
                  key={note._id}
                  className="bg-gray-50 rounded-md p-2 border border-gray-200 hover:bg-blue-50 transition-colors"
                >
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mr-2">
                      <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center">
                        <FiMessageSquare className="h-3 w-3 text-blue-600" />
                      </div>
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex justify-between items-start mb-1">
                        <h4 className="text-xs font-semibold text-gray-900 truncate">
                          {note.title || "Jabnox Notification"}
                        </h4>
                        <span className="text-[10px] text-gray-500 whitespace-nowrap ml-1">
                          {new Date(note.createdAt || Date.now()).toLocaleDateString()}
                        </span>
                      </div>
                      
                      <div className="text-[11px] text-gray-700 break-words whitespace-pre-line max-h-16 overflow-y-auto">
                        {note.text}
                      </div>
                    </div>

                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        console.log("Deleting note:", note._id);
                        mutationDelete.mutate(note._id);
                      }}
                      className="ml-1 opacity-70 hover:opacity-100 transition-opacity p-0.5 rounded-full hover:bg-gray-200 flex-shrink-0"
                      title="Delete notification"
                    >
                      <FaRegTrashAlt className="h-2.5 w-2.5 text-gray-500" />
                    </button>
                  </div>
                </div>
              ))}
          </div>
        )}
      </div>

      {/* Footer with clear all option */}
      {noteData.length > 0 && (
        <div className="border-t border-gray-200 px-3 py-1.5 bg-gray-50 flex justify-between items-center">
          <span className="text-[11px] text-gray-500">
            {noteData.length} {noteData.length === 1 ? 'note' : 'notes'}
          </span>
          <button 
            className="text-[11px] text-blue-600 hover:text-blue-800 font-medium"
            onClick={(e) => {
              e.stopPropagation();
              // Add clear all functionality here
              console.log("Clear all clicked");
            }}
          >
            Clear all
          </button>
        </div>
      )}
    </div>
  );
};

export default NoteFromJabnox;