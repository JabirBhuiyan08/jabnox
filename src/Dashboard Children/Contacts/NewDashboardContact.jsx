import React, { useEffect } from "react";
import { useNewContact } from "../../hooks/NewContactContext";
import useAxiosSecure from "../../hooks/axiosSecure";

const NewDashboardContact = () => {
  const { contact, refetch } = useNewContact();
  const axiosSecure = useAxiosSecure();

  useEffect(() => {
    refetch(); // Refresh data on mount
  }, [refetch]);

  const handleToggleReadStatus = async(id , currentStatus) => {
    try{
        const res = await axiosSecure.patch(`/contact/${id}`,{
            read: !currentStatus
        })
        if(res.data.modifiedCount > 0){
            refetch(); // Refetch to get updated data
        }
    }
    catch(error) {
        console.error("Error updating read status:", error);
    }
  }

  return (
    <div className="p-4">
      <h2 className="text-2xl font-semibold mb-4">
        All Contacts ({contact.length})
      </h2>
      <div className="grid gap-4">
        {contact.map((c) => (
          <div
            key={c._id}
            className="bg-white/10 shadow-md rounded-xl p-4 border border-gray-200/20"
          >
            <div className="flex justify-between items-center mb-2">
              <h3 className="text-lg font-bold text-gray-200">{c.name}</h3>
              <span
                className={`text-sm px-2 py-1 rounded-full ${
                  c.read
                    ? "bg-green-100 text-green-600"
                    : "bg-red-100 text-red-600"
                }`}
              >
                <button onClick={() => handleToggleReadStatus(c._id, c.read)}>Mark as {c.read ? "Unread" : "Read"}</button>
              </span>
            </div>
            <p className="text-sm text-gray-200 mb-1">
              <strong>Email:</strong> {c.email}
            </p>
            <p className="text-sm text-gray-200">
              <strong>Message:</strong> {c.message}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewDashboardContact;
