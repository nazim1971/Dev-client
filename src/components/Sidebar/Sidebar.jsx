import { NavLink } from "react-router-dom";

const Sidebar = () => {
    const navLink = (
        <>
            <li>
                <NavLink
            
                    to="/addStudent"
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
            <li className="block">
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
