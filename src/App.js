import React,{useReducer} from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import {Body} from "./components/Body";
import "./App.css";

const AppLayout = () =>{
    return(
        <>
            <Header/>
            <Body/>
        </>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout/>);
