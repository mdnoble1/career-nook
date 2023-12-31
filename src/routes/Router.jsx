import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import ErrorPage from "../pages/ErrorPage";
import PrivateRoute from "./PrivateRoute";
import Details from "../pages/Details";
import Feedback from "../pages/Feedback";
import NewArrival from "../pages/NewArrival";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/login",
                element: <Login></Login>
            },
            {
                path: "/register",
                element: <Register></Register>
            },
            {
                path: "/service/:id",
                element: <PrivateRoute><Details></Details></PrivateRoute>,
                loader: () => fetch('/data.json')
            },
            {
                path: "/feedback",
                element: <PrivateRoute><Feedback></Feedback></PrivateRoute>
            },
            {
                path: "/newArrival",
                element: <PrivateRoute><NewArrival></NewArrival></PrivateRoute>
            }
        ]
    }
]);

export default router;