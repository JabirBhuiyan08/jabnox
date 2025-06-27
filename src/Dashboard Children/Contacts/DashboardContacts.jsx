import useAxiosPublic from "../../hooks/useAxiosPublic";
import { IoCheckmarkDoneCircleOutline } from "react-icons/io5";
import { useContacts } from "../../hooks/ContactsContext";

const DashboardContacts = () => {
  const { contacts, setContacts, loading } = useContacts();
  const axiosPublic = useAxiosPublic();

  const handleDeleteContact = async (id) => {
    try {
      await axiosPublic.delete(`/contact/${id}`);
      setContacts((prevContacts) => prevContacts.filter((c) => c._id !== id));
    } catch (error) {
      console.error("Error deleting contact:", error);
    }
  };

  const handleMarkAsRead = async (id, currentStatus) => {
    const updatedStatus = !currentStatus;

    try {
      await axiosPublic.patch(`/contact/${id}`, {
        read: updatedStatus,
      });

      setContacts(prevContacts =>
        prevContacts.map(c =>
          c._id === id ? { ...c, read: updatedStatus } : c
        )
      );
    } catch (error) {
      console.error("Error updating contact status:", error);
    }
  };

  if (loading) return <div>Loading...</div>;

  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 gap-6 mt-10">
        {contacts
          .slice(0)
          .reverse()
          .map((contact) => (
            <div
              key={contact._id}
              className="p-6 rounded-2xl shadow-md border bg-white"
            >
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-3">
                  <h3 className="text-lg font-semibold text-gray-800">
                    {contact.name}
                  </h3>
                  <span 
                    onClick={() => handleDeleteContact(contact._id)} 
                    className="btn text-red-400 font-bold text-sm"
                  >
                    Delete
                  </span>
                </div>

                <button
                  onClick={() => handleMarkAsRead(contact._id, contact.read)}
                  className="transition-transform hover:scale-[1.1]"
                >
                  {contact.read === true ? (
                    <div className="btn btn-sm bg-violet-600 p-5">
                      <span className="text-white text-sm">Mark as Unread</span>
                    </div>
                  ) : (
                    <span className="text-violet-500 text-3xl">
                      <IoCheckmarkDoneCircleOutline />
                    </span>
                  )}
                </button>
              </div>
              <p className="text-gray-600">{contact.email}</p>
              <p className="text-black mt-5">{contact.message}</p>
            </div>
          ))}
      </div>
    </div>
  );
};

export default DashboardContacts;