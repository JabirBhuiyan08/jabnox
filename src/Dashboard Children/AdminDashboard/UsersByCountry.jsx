import { useEffect, useState } from "react";
import axios from "axios";

const UsersByCountry = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/analytics/users-by-country", {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("access-token")}`
      }
    })
    .then(res => setData(res.data))
    .catch(err => console.error(err));
  }, []);

  return (
    <div>
      <h2>Users by Country (7 days)</h2>
      <ul>
        {data.map((row, i) => (
          <li key={i}>{row.country}: {row.users}</li>
        ))}
      </ul>
    </div>
  );
};

export default UsersByCountry;
