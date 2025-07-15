import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

const Users = () => {
    const loaderData = useLoaderData(); // assuming this is an array of user objects
    const [users, setUsers] = useState([]);

    useEffect(() => {
        setUsers(loaderData);
    }, [loaderData]);

    return (
        <div>
            <h2>Total Users: {users.length}</h2>
            <ul>
                {users.map((user, index) => (
                    <li key={index} className="border p-4 mb-2 rounded-lg shadow-md flex justify-between items-center">
                        <h3>{user.name}</h3>
                        <p><strong>Email:</strong> {user.email}</p>
                        {/* <p><strong>Age:</strong> {user.age}</p> */}
                        <p className="bg-red-500 text-white px-2 py-1 rounded">Delete</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Users;
