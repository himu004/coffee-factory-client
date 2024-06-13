import {
    createBrowserRouter,
  } from "react-router-dom";
import Root from "../pages/Root/Root";
import Home from "../pages/Home/Home";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import AddCoffee from "../components/AddCoffee";
import UpdateCoffee from "../components/UpdateCoffee";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root/>,
      errorElement: <ErrorPage/>,
      children: [
        {
            path: "/",
            element: <Home/>,
            loader: () => fetch('http://localhost:3000/coffee'),
        },
        {
            path: "/addCoffee",
            element: <AddCoffee/>
        },
        {
            path: "/updateCoffee",
            element: <UpdateCoffee/>
        }
      ]
    },
  ]);

export default router;