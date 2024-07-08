import { Outlet } from "react-router-dom";
import Sidebar from "../Sidebar/Sidebar";
import Nav from "../Nav/Nav";
// import Navber from "../Navber/Navber";

const Root = () => {
  return (
    <div>
      <div className=" w-[94%] mx-auto ">
        {/* <Navber/> */}
        <Nav/>
        <div className="h-screen w-full flex gap-2">
          <div className="w-1/4 border">
            <Sidebar />
          </div>
          <div className="w-3/4 border">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Root;
