
// import { useLoaderData } from "react-router-dom";
import MapProject from "./MapProject";
import useAxiosSecure from "../../hooks/axiosSecure";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";


const Projects = () => {

  // const loader = useLoaderData();
  const axiosSecure = useAxiosSecure();
  const queryClient = useQueryClient();

  const {data: projectsData = [], refetch} = useQuery({
    queryKey:["projects"],
    queryFn: async()=>{
      const res = await axiosSecure.get("/projects");
      return res.data;
    }
  })
  const handleDelete = useMutation({
    mutationFn: async (id) =>{
      const res = await axiosSecure.delete(`/projects/${id}`);
      return res.data;
    },
    onSuccess: () =>{
      queryClient.invalidateQueries(["projects"]);
      refetch();
    },
    onError: (error) => {
      console.error("Error deleting project:", error);
      alert("Failed to delete project. Please try again.");
    } 
  })

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header with decorative element */}
      <div className="relative pb-8 mb-8 border-b border-gray-200">
        <h1 className="text-3xl font-bold text-gray-900">
          Projects
          <span className="absolute bottom-0 left-0 h-1 w-16 bg-indigo-600 rounded-full"></span>
        </h1>

        {/* Stats card with subtle animation */}
        <div className="mt-4 inline-block px-4 py-3 bg-gradient-to-r from-indigo-50 to-blue-50 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
          <p className="text-sm font-medium text-gray-700">
            Total Projects:{" "}
            <span className="text-indigo-600 font-bold text-lg">
              {projectsData.length}
            </span>
          </p>
        </div>
      </div>

      {projectsData.length === 0 ? (
        /* Enhanced empty state */
        <div className="text-center py-12 bg-gray-50 rounded-xl border-2 border-dashed border-gray-300">
          <svg
            className="mx-auto h-12 w-12 text-gray-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1}
              d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <h3 className="mt-4 text-lg font-medium text-gray-900">
            No projects yet
          </h3>
          <p className="mt-2 text-gray-500 max-w-md mx-auto">
            When you create projects, they'll appear here in your dashboard.
          </p>
        </div>
      ) : (
        /* Enhanced grid with subtle hover effects */
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projectsData.map((project) => (
            <div
              key={project._id}
              className="h-full transition-all duration-200 hover:-translate-y-1"
            >
              <MapProject project={project} handleDelete={()=>{handleDelete.mutate(project._id)}}/>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Projects;
