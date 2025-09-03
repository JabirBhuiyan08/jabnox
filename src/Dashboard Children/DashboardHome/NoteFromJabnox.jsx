import React from "react";
import useAxiosSecure from "../../hooks/axiosSecure";
import { useQuery } from "@tanstack/react-query";
import useAuth from "../../hooks/useAuth";
import { FiBook, FiUser, FiMail, FiFileText } from "react-icons/fi";
import LoadingSpinner from "../../Components/LoadingSpinner";

const NoteFromJabnox = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();

  const { data: noteData = [], isLoading } = useQuery({
    queryKey: ["note", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/notes/${user?.email}`);
      return res.data;
    },
    enabled: !!user?.email,
  });

  if (isLoading) return <LoadingSpinner />;

  return (
    <div className="min-h-screen py-8 px-4 sm:px-6 lg:px-8 ">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-indigo-600 mb-2">
            Your Notes from Jabnox
          </h1>
          <p className="">
            {noteData.length === 0
              ? "You don't have any notes yet"
              : `You have ${noteData.length} note${
                  noteData.length !== 1 ? "s" : ""
                }`}
          </p>
        </div>

        {/* Notes Grid */}
        <div className="space-y-6 ">
          {noteData.length === 0 ? (
            <div className="text-center py-12 rounded-lg shadow-sm border border-gray-200">
              <FiBook className="mx-auto h-12 w-12 " />
              <h3 className="mt-2 text-lg font-medium ">No notes found</h3>
              <p className="mt-1 text-sm ">
                Create your first note to get started
              </p>
            </div>
          ) : (
            <div className="overflow-y-auto max-h-[500px] space-y-4 bg-white/10 backdrop-blur-2xl border border-white/20 rounded-3xl shadow-2xl ring-1 ring-white/30 p-6">
              {noteData
                .slice()
                .reverse()
                .map((note) => (
                  <div
                    key={note._id}
                    className="group relative border border-white/20 rounded-2xl p-5 bg-white/5 backdrop-blur-md shadow-lg hover:shadow-2xl transition duration-300"
                  >
                    <div className="flex items-start gap-4">
                      {/* Icon */}
                      <div className="flex-shrink-0 p-3 rounded-xl bg-indigo-500/20 group-hover:bg-indigo-500/30 transition">
                        <FiFileText className="h-6 w-6 text-indigo-400 group-hover:text-indigo-300" />
                      </div>

                      {/* Content */}
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-white/90 group-hover:text-white mb-1">
                          {note.title}
                        </h3>
                        <p className="text-sm text-gray-300 whitespace-pre-line">
                          {note.text}
                        </p>

                        {/* Footer */}
                        <div className="mt-4 flex items-center gap-2 text-xs text-gray-400">
                          <FiMail className="h-4 w-4 text-indigo-400" />
                          <span>Notification from Jabnox.com</span>
                        </div>
                      </div>
                    </div>

                    {/* Glow effect on hover */}
                    <div className="absolute inset-0 rounded-2xl ring-2 ring-transparent group-hover:ring-indigo-500/30 transition"></div>
                  </div>
                ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default NoteFromJabnox;
