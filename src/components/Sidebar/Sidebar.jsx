import { NavLink, useNavigate } from "react-router-dom";
import useAuth from "../Hooks/useAuth";

const Sidebar = () => {

    const { user, logOut } = useAuth();
    const navigate = useNavigate()
    
    const handleSignOut = () => {
      logOut()
      .then(()=>{
        navigate('/login')
      })
      .catch();}

    const navLink = (
        <>
            <li>
                <NavLink
            
                    to="/"
                    className={({ isActive }) =>
                        `block ${isActive ? 'bg-red-500 text-white ' : 'text-black'}`
                    }
                >
                    Add Student
                </NavLink>
            </li>
            <li>
                <NavLink
                    to="/manageStudent"
                    className={({ isActive }) =>
                        `block ${isActive ? 'bg-red-500 text-white ' : 'text-black'}`
                    }
                >
                    Manage Student
                </NavLink>
            </li>
            <li onClick={handleSignOut} className="block">
                <NavLink
                >
                    Logout
                </NavLink>
            </li>
        </>
    );

    return (
        <div>
            <div>
                <ul >
                    {navLink}
                </ul>
            </div>
        </div>
    );
};

export default Sidebar;
