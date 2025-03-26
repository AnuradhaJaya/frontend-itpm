import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import Login from "../pages/Login";
import ForgotPassword from "../pages/ForgotPassword";
import Signup from "../pages/Signup";
import BecomeACollector from "../pages/BecomeACollector";
import Admin from "../pages/AdminPage";
import AdminDashboard from "../pages/AdminDashboard";
import AdminUserTable from "../pages/AdminUserTable";
import AdminCollectorTable from "../pages/AdminCollectorTable";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "forgot-password",
        element: <ForgotPassword />,
      },
      {
        path: "signup",
        element: <Signup />,
      },
      {
        path: "become-a-collector",
        element: <BecomeACollector />,
      },
            // admin panel
            {
              path: "admin",
              element: <Admin />,
              children: [
                 {
                   path: "dashboard",
                   element: <AdminDashboard />,
                 },
                 {
                   path: "all-user",
                   element: <AdminUserTable />,
                 },
                 {
                   path: "collector-message",
                   element: <AdminCollectorTable/>,
                 },
              ],
            },
    ],
    
  },
]);

export default router;
