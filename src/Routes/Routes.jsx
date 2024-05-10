import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import PrivateRoute from "./PrivateRoute";
import ViewDetails from "../Pages/Viewdetails/ViewDetails";
import AvailableFoods from "../Pages/AvailableFoods/AvailableFoods";




const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
    //   {
    //     path: "/addArtsItem",
    //     element: <PrivateRoute><AddCraftsItem></AddCraftsItem></PrivateRoute>,
    //   },
      {
        path: "/available-foods",
        element: <AvailableFoods></AvailableFoods>,
      },
    //   {
    //     path: "/myArt&CraftList",
    //     element: <PrivateRoute><MyArt></MyArt></PrivateRoute>,
    //   },
      // {
      //   path: "/updateArt/:id",
      //   element: <PrivateRoute> <UpdateArt></UpdateArt></PrivateRoute>,
      //   loader: ({ params }) =>
      //     fetch(`https://assignment-10-server-liart-ten.vercel.app/crafts/${params.id}`).then((res) =>
      //       res.json()
      //     ),
      // },
    //   {
    //     path: "/allArtsItems/viewDetails/:id",
    //     element: <PrivateRoute><ViewDetails></ViewDetails></PrivateRoute>,
    //     loader: ({ params }) =>
    //       fetch(`https://assignment-10-server-liart-ten.vercel.app/crafts/${params.id}`).then((res) =>
    //         res.json()
    //       ),
    //   },
      {
        path: "/view-details/:id",
        element: <PrivateRoute><ViewDetails></ViewDetails></PrivateRoute>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/foods/${params.id}`).then((res) =>
            res.json()
          ),
      },
    //   {
    //     path: "/subcategory/viewDetails/:id",
    //     element: <PrivateRoute><ViewDetails></ViewDetails></PrivateRoute>,
    //     loader: ({ params }) =>
    //       fetch(`https://assignment-10-server-liart-ten.vercel.app/crafts/${params.id}`).then((res) =>
    //         res.json()
    //       ),
    //   },
    //   {
    //     path: "/subcategory/:subcategory_Name",
    //     element: <PrivateRoute><ArtSubcategory></ArtSubcategory></PrivateRoute>,
    //   },
    //   {
    //     path: "/contactUs",
    //     element: <ContactUs></ContactUs>
    //   }
    ],
  },
]);

export default router;