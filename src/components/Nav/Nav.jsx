import { BiUser } from "react-icons/bi";
import useAuth from "../Hooks/useAuth";


const Nav = () => {
    const {user} = useAuth();
    return (
        <div className="h-20 items-center flex justify-between">
            <p className="text-red-500 font-semibold">Dev Cluster</p>
            <p> <button className="btn"> <BiUser/> {user?.email} </button> </p>
        </div>
    );
};

export default Nav;