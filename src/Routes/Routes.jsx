import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../Components/Home";
import Login from "../Components/Login";
import Registration from "../Components/Ragistration";
import Products from "../Components/Products";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      children: [
        {
            path: '/',
            element: <Home></Home>
        },
        {
          path: '/products',
          element: <Products></Products>,
          loader: () => fetch('http://localhost:5000/productsCount')
        },
        {
            path: '/login',
            element: <Login></Login>
        },
        {
            path: '/registration',
            element: <Registration></Registration>
        }
      ]
    },
  ]);

  export default router;