import { useQuery } from "@tanstack/react-query";
import { FcPortraitMode } from "react-icons/fc";
import useAxiosSecure from "../../hooks/axiosSecure";
import useAuth from "../../hooks/useAuth";

const PendingApplication = () => {
  const axiosSecure = useAxiosSecure();
  const {user} = useAuth();

  const { data: apply = [], isLoading } = useQuery({
    queryKey: ["apply", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/apply/${user.email}`);
      return res.data;
    },
    enabled: !!user?.email,
  });

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <div className="text-8xl flex justify-center">
        <FcPortraitMode />
      </div>
      <p className="text-3xl font-bold flex justify-center">
        Panding Application
      </p>

      {apply.map((e) => (
        <div className="flex flex-col lg:flex-row bg-blue-400 justify-between p-5 rounded-full mt-5 items-center"
          key={e._id}
        >
          <div>{e.name}</div>
          <p>Plan: {e.plan}</p>
          <p>Note: {e.note}</p>
          <p className="text-sm bg-blue-200 rounded-full font-bold p-2 text-red-400">
            Pending
          </p>
        </div>
      ))}
    </div>
  );
};

export default PendingApplication;
