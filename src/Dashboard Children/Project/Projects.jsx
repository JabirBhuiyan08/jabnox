import { Link, useLoaderData } from "react-router-dom";
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
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="mb-10">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
                My Projects
              </h1>
              <p className="text-gray-400 mt-2">Manage and track all your development projects</p>
            </div>
            
            {/* Stats Card */}
            <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl px-6 py-4 shadow-lg">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-blue-500/10 rounded-lg">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-gray-400">Total Projects</p>
                  <p className="text-2xl font-bold text-white">{projectsData.length}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Projects Grid */}
        {projectsData.length === 0 ? (
          /* Empty State */
          <div className="flex flex-col items-center justify-center py-20 text-center bg-gray-800/30 backdrop-blur-sm rounded-2xl border border-gray-700/50 shadow-xl">
            <div className="mb-6 p-5 bg-blue-500/10 rounded-full">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-blue-400/70" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            </div>
            <h3 className="text-2xl font-semibold text-gray-200 mb-3">No projects yet</h3>
            <p className="text-gray-400 max-w-md mx-auto mb-8">
              When you create projects, they'll appear here in your dashboard. Start by creating your first project!
            </p>
            <Link to={"/dashboard/projects-form"}>
            <button className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 rounded-lg font-medium transition-all duration-300 shadow-lg shadow-blue-500/20 hover:shadow-blue-500/40">
              Create New Project
            </button>
            </Link>
          </div>
        ) : (
          /* Projects Grid */
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {projectsData.slice().reverse().map((project) => (
              <div
                key={project._id}
                className="transform transition-all duration-300 hover:scale-[1.02] hover:-translate-y-1"
              >
                <MapProject 
                  project={project} 
                  handleDelete={() => {handleDelete.mutate(project._id)}}
                />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Projects;