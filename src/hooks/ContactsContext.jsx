// src/hooks/ContactsContext.js
import { createContext, useContext, useState, useEffect } from "react";
import axiosPublic from "./axiosPublic";

const ContactsContext = createContext();

export const ContactsProvider = ({ children }) => {
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchContacts = async () => {
      try {
        const response = await axiosPublic.get("/contact");
        setContacts(response.data);
      } catch (error) {
        console.error("Failed to fetch contacts:", error);
      } finally {
        setLoading(false);
      }
    };
    
    fetchContacts();
  }, []);

  const value = {
    contacts,
    setContacts,
    loading,
    unreadCount: contacts.filter(c => c.read).length
  };

  return (
    <ContactsContext.Provider value={value}>
      {children}
    </ContactsContext.Provider>
  );
};

export const useContacts = () => useContext(ContactsContext);