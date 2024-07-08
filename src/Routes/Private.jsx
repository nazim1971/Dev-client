
import { Navigate } from "react-router-dom";
import useAuth from "../components/Hooks/useAuth";
import LoadingSpinner from "../components/Hooks/LoadingSpinner";



const Private = ({children}) => {
    const {user, loader} = useAuth()

    if(loader){
        return <LoadingSpinner/>
    }
    
    if(user){
        return children
    }
    return (
       <Navigate state={'/'} to='/login'></Navigate>
    );
};

export default Private;