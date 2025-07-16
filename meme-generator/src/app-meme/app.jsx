import Header from "./components/header";
import MainContent from "./components/maincontent";
import React from "react";
import {createRoot} from "react-dom/client";
import "./style.css";
import Render from "./others/useEffect";


const root=createRoot(document.getElementById("root"));
root.render(
    <>
        <Header />
        <MainContent /> 
        {/* <Render /> */}
    </>
)