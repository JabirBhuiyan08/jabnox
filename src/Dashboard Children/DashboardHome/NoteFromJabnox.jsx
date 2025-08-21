import React from "react";
import useAxiosSecure from "../../hooks/axiosSecure";
import { useQuery } from "@tanstack/react-query";
import useAuth from "../../hooks/useAuth";
import { FiBook, FiUser, FiMail, FiFileText } from "react-icons/fi";
import LoadingSpinner from "../../components/LoadingSpinner"; // Assume you have or will create this

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
    <div className="min-h-screen py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-indigo-600 mb-2">
            Your Notes from Jabnox
          </h1>
          <p className="">
            {noteData.length === 0 
              ? "You don't have any notes yet" 
              : `You have ${noteData.length} note${noteData.length !== 1 ? 's' : ''}`}
          </p>
        </div>

        {/* Notes Grid */}
        <div className="space-y-6">
          {noteData.length === 0 ? (
            <div className="text-center py-12 rounded-lg shadow-sm border border-gray-200">
              <FiBook className="mx-auto h-12 w-12 " />
              <h3 className="mt-2 text-lg font-medium ">
                No notes found
              </h3>
              <p className="mt-1 text-sm ">
                Create your first note to get started
              </p>
            </div>
          ) : (
            noteData.slice().reverse().map((note) => (
              <div
                key={note._id}
                className=" overflow-hidden shadow rounded-lg hover:shadow-md transition-shadow duration-200"
              >
                <div className="px-4 py-5 sm:p-6">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 bg-indigo-100 p-3 rounded-full">
                      <FiFileText className="h-6 w-6 text-indigo-600" />
                    </div>
                    <div className="ml-4 flex-1">
                      <h3 className="text-lg font-medium  mb-2">
                        {note.title}
                      </h3>
                      <p className="text-red-400 whitespace-pre-line">
                        {note.text}
                      </p>
                      <div className="mt-4 flex gap-2 items-center text-sm">
                        <FiMail className="flex-shrink-0 mr-1.5 h-4 w-4" />
                        <span>Notification Form Jabnox.com</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default NoteFromJabnox;