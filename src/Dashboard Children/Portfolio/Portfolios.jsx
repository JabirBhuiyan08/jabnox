import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import PortfolioData from "./PorfolioDatas";

const Portfolios = () => {
  const [portfolios, setPortfolios] = useState([]);
  const [loading, setLoading] = useState(true);
  const datas = useLoaderData();

  useEffect(() => {
    if (datas) {
      setPortfolios(datas);
      setLoading(false);
    }
  }, [datas]);

  if (loading) return <div>Loading...</div>;

  return (
    <div className=" grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 gap-6 mt-10">
      {portfolios.map((portfolio) => (
        <div key={portfolio._id} className="">
            <PortfolioData  portfolio={portfolio}></PortfolioData>
        </div>
      ))}
    </div>
  );
};

export default Portfolios;
