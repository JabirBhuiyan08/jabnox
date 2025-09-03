import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import PortfolioData from "./PorfolioDatas";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import useAxiosSecure from "../../hooks/axiosSecure";
import useAdmin from "../../hooks/useAdmin";

const Portfolios = () => {
  const [portfolios, setPortfolios] = useState([]);
  const [loading, setLoading] = useState(true);
  const datas = useLoaderData();
  const axiosSecure = useAxiosSecure();
  const [isAdmin] = useAdmin();

  useEffect(() => {
    if (datas) {
      setPortfolios(datas);
      setLoading(false);
    }
  }, [datas]);

  const handleDelete = async (id) => {
    // const confirmDelete = window.confirm(
    //   "Are you sure you want to delete this portfolio?"
    // );
    // if (!confirmDelete) return;

    try {
      const response = await axiosSecure.delete(`portfolios/${id}`);

      if (response.status === 200) {
        // Remove the deleted portfolio from state
        setPortfolios((prevPortfolios) =>
          prevPortfolios.filter((portfolio) => portfolio._id !== id)
        );
      } else {
        alert("Failed to delete the portfolio");
      }
    } catch (error) {
      console.error("Error deleting portfolio:", error);
      alert("Something went wrong. Check console for details.");
    }
  };

  if (loading) return <div>Loading...</div>;
  if(portfolios.length === 0) return <div>No portfolios found</div>
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-8 p-4">
      {portfolios
        .slice()
        .reverse()
        .map((portfolio) => (
          <div
            key={portfolio._id}
            className="transition-all duration-300 hover:scale-[1.02] hover:shadow-lg"
          >
            <PortfolioData portfolio={portfolio} handleDelete={handleDelete} isAdmin={isAdmin}/>
          </div>
        ))}
    </div>
  );
};

export default Portfolios;
