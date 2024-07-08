import { createBrowserRouter } from "react-router-dom";
import Root from "../components/Root/Root";
import AddStudent from "../components/Page/AddStudent";
import ManageStudent from "../components/Page/ManageStudent";
import Error from "./Error";
import Login from "../components/SignIn/Login";
import Register from "../components/SignIn/Register";
import Private from "./Private";

const routes = createBrowserRouter([
    {
      path: "/",
      element: <Root/>,
      errorElement: <Error/>,
      children: [
       {
        path: '/',
        element: <Private><AddStudent/></Private>
       },
       {
        path: '/manageStudent',
        element: <Private><ManageStudent/></Private>
       }
      ],
     
    },
    {
      path: '/login',
      element: <Login/>
    },
    {
     path: '/register',
     element: <Register/>
    }
  ]);

export default routes;