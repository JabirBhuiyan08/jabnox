import { useForm } from "react-hook-form";
import useAxiosPublic from "../../hooks/useAxiosPublic";

const ProjectsForm = () => {
    const { register, handleSubmit, reset, watch } = useForm();
    const axiosPublic = useAxiosPublic();
    
    const onSubmit = async(data) => {
        console.log("Form submitted", data);
        const res =await axiosPublic.post('/projects', data);
        if (res.data.insertedId) {
            console.log("Project added successfully", res.data);
            alert("Project added successfully");
        }else{
            console.log("Failed to add project", res.data);
            alert("Failed to add project");
        }
        // Here you would typically send data to your backend
        reset();
    };

    // For conditional rendering based on hasWebsite value
    const hasWebsite = watch("hasWebsite");

    return (
        <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-md">
            <h1 className="text-2xl font-bold mb-6 text-gray-800">Add New Project</h1>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                {/* Basic Information */}
                <div className="space-y-4">
                    <h2 className="text-lg font-medium text-gray-700">Basic Information</h2>
                    
                    <div>
                        <label htmlFor="projectName" className="block text-sm font-medium text-gray-700">Project Name*</label>
                        <input 
                            type="text" 
                            {...register("projectName", { required: true })} 
                            id="projectName" 
                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                            required 
                        />
                    </div>

                    <div>
                        <label htmlFor="ownerName" className="block text-sm font-medium text-gray-700">Owner Name*</label>
                        <input 
                            type="text" 
                            {...register("ownerName", { required: true })} 
                            id="ownerName" 
                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                            required 
                        />
                    </div>

                    <div>
                        <label htmlFor="Email" className="block text-sm font-medium text-gray-700">Email</label>
                        <input 
                            type="text" 
                            {...register("Email", { required: true })} 
                            id="Email" 
                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                            required 
                        />
                    </div>

                    <div>
                        <label htmlFor="shortDescription" className="block text-sm font-medium text-gray-700">Short Description*</label>
                        <textarea 
                            {...register("shortDescription", { required: true })} 
                            id="shortDescription" 
                            rows="3"
                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                            required
                        ></textarea>
                    </div>

                    <div>
                        <label htmlFor="projectDescription" className="block text-sm font-medium text-gray-700">Detailed Description</label>
                        <textarea 
                            {...register("projectDescription")} 
                            id="projectDescription" 
                            rows="4"
                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                        ></textarea>
                    </div>
                    <div>
                        <label htmlFor="projectPorgress" className="block text-sm font-medium text-gray-700">Project Porgress</label>
                        <input 
                            type="number" 
                            {...register("projectPorgress")} 
                            id="projectPorgress" 
                            rows="4"
                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                        ></input>
                    </div>
                </div>

                {/* Website Information */}
                <div className="space-y-4">
                    <h2 className="text-lg font-medium text-gray-700">Website Information</h2>
                    
                    <div className="flex items-center">
                        <input 
                            type="checkbox" 
                            {...register("hasWebsite")} 
                            id="hasWebsite" 
                            className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                        />
                        <label htmlFor="hasWebsite" className="ml-2 block text-sm text-gray-700">
                            This project has a website
                        </label>
                    </div>

                    {hasWebsite && (
                        <>
                            <div>
                                <label htmlFor="websiteUrl" className="block text-sm font-medium text-gray-700">Website URL</label>
                                <input 
                                    type="url" 
                                    {...register("websiteUrl")} 
                                    id="websiteUrl" 
                                    placeholder="https://example.com"
                                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                                />
                            </div>

                            <div>
                                <label htmlFor="domainExpiry" className="block text-sm font-medium text-gray-700">Domain Expiry Date</label>
                                <input 
                                    type="date" 
                                    {...register("domainExpiry")} 
                                    id="domainExpiry" 
                                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                                />
                            </div>
                        </>
                    )}
                </div>

                {/* File Uploads */}
                <div className="space-y-4">
                    <h2 className="text-lg font-medium text-gray-700">Documents & Images</h2>
                    
                    <div>
                        <label htmlFor="projectImage" className="block text-sm font-medium text-gray-700">Project Image</label>
                        <input 
                            type="file" 
                            {...register("projectImage")} 
                            id="projectImage" 
                            accept="image/*"
                            className="mt-1 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-indigo-50 file:text-indigo-700 hover:file:bg-indigo-100"
                        />
                    </div>

                    <div>
                        <label htmlFor="certificate" className="block text-sm font-medium text-gray-700">Certificate/Proof Document</label>
                        <input 
                            type="file" 
                            {...register("certificate")} 
                            id="certificate" 
                            accept=".pdf,.doc,.docx,.jpg,.png"
                            className="mt-1 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-indigo-50 file:text-indigo-700 hover:file:bg-indigo-100"
                        />
                        <p className="mt-1 text-xs text-gray-500">PDF, DOC, JPG, or PNG (Max. 5MB)</p>
                    </div>
                </div>

                {/* Additional Information */}
                <div className="space-y-4">
                    <h2 className="text-lg font-medium text-gray-700">Additional Information</h2>
                    
                    <div>
                        <label htmlFor="tags" className="block text-sm font-medium text-gray-700">Tags</label>
                        <input 
                            type="text" 
                            {...register("tags")} 
                            id="tags" 
                            placeholder="comma separated tags"
                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                        />
                    </div>

                    <div>
                        <label htmlFor="notes" className="block text-sm font-medium text-gray-700">Notes</label>
                        <textarea 
                            {...register("notes")} 
                            id="notes" 
                            rows="3"
                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                        ></textarea>
                    </div>
                </div>

                <div className="flex justify-end space-x-3">
                    <button 
                        type="button" 
                        onClick={() => reset()} 
                        className="px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                        Reset
                    </button>
                    <button 
                        type="submit" 
                        className="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                        Submit Project
                    </button>
                </div>
            </form>
        </div>
    );
};

export default ProjectsForm;