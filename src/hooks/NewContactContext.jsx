
import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from './axiosSecure';
import { createContext, useContext } from 'react';

export const NewContactContext = createContext();

export const NewContact = ({children}) => {
    
    const axiosSecure = useAxiosSecure();
    const {data:contact = [], refetch} = useQuery({
        queryKey: ['contact'],
        queryFn: async () => {
            const res = await axiosSecure.get('/contact');
            return res.data;
        }
    })
    

    const value ={
        contact,
        refetch
    }


    return (
        <NewContactContext.Provider value={value}>
            {children}
        </NewContactContext.Provider>
    );
};

export const useNewContact =()=>{
   return useContext(NewContactContext);
};