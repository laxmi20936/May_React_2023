import React,{useReducer} from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import About from "./components/About";
import {Body} from "./components/Body";
import Error from "./components/Error";
import Dummy from "./components/Dummy";
import RestaurantMenu from "./components/RestaurantMenu";
// import { createBrowserRouter, RouterProvider } from "react-router-dom";

const createBrowserRouter = require("react-router-dom").createBrowserRouter;
const RouterProvider = require("react-router-dom").RouterProvider;
// import { Outlet } from "react-router-dom";
const Outlet = require("react-router-dom").Outlet;
import "./App.css";

const AppLayout = () =>{
    return(
        <>
            <Header/>
            <Outlet/>
        </>
    )
}

const createRouter = createBrowserRouter([
    {
        path:"/",
        element:<AppLayout/>,
        errorElement:<Error/>,
        children:[
            {
              path:"/",
              element:<Body/>
            },
            {
                path:"/about",
                element:<About/>
            },
            {
                path:"/restaurant/:id/:name",
                element:<RestaurantMenu/>
            },
            {
                path:"/restaurant/:id/:name/:zz",
                element:<Dummy/>
            }
        ]
    }
])

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={createRouter}/>);
