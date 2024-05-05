import { createBrowserRouter } from "react-router-dom";
import Root from "../Root";
import Error from "../pages/Error";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Checkout from "../components/Checkout";
import Bookings from "../pages/Bookings";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      errorElement: <Error></Error>,
      children: [
        {
            path: '/',
            element: <Home></Home>
        },
        {
          path: '/login',
          element: <Login></Login>
        },
        {
          path: '/register',
          element: <Register></Register>
        },
        {
          path: '/checkout/:id',
          element: <Checkout></Checkout>,
          loader: ({params})=>fetch(`http://localhost:5000/services/${params.id}`)
        },
        {
          path: '/bookings',
          element: <PrivateRoute><Bookings></Bookings></PrivateRoute>
        }
      ]
    },
  ]);

export default router;