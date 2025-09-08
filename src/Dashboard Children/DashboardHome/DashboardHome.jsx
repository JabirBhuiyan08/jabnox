
import useAuth from "../../hooks/useAuth";
import UserProjects from "./UserProjects";
import NoteFromJabnox from "./NoteFromJabnox";


const DashboardHome = () => {
  const { user } = useAuth();
  return (
    <div>
      <h1 className="lg:text-4xl text-2xl text-center">
        <span className="text-xl lg:text-2xl font-semibold">Welcome!</span>{" "}
        <span className="lg:text-4xl font-bold text-violet-700">
          {user.displayName}
        </span>
      </h1>
      <div className="lg:flex lg:flex-col xl:flex-row lg:justify-around mt-5 flex flex-col gap-10">
        <div className="">
          <UserProjects></UserProjects>
        </div>
        <div>
          <NoteFromJabnox></NoteFromJabnox>
        </div>
      </div>
    </div>
  );
};

export default DashboardHome;
