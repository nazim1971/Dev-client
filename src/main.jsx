
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import routes from "./Routes/Routes";
import AuthProvider from "./components/Provider/AuthProvider";
import { Toaster } from "react-hot-toast";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Provider } from "react-redux";
import store from "./app/store";


const queryClient = new QueryClient();
ReactDOM.createRoot(document.getElementById("root")).render(
 <Provider store={store}>
   <QueryClientProvider client={queryClient}>
    <AuthProvider>
      <RouterProvider router={routes} />
    </AuthProvider>
    <Toaster />
  </QueryClientProvider>
 </Provider>
);
