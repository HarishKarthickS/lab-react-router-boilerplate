import React from "react";
import {Route, Routes} from "react-router-dom"
import Contacts from "./Component/Contact";
import About from "./Component/About";
import Home from "./Component/Home";

const AllRoutes=()=>{
    return (
        <>
        <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/contacts" element={<Contacts />}></Route>
            <Route path="/about" element={<About />}></Route>
        </Routes>
        
        </>
    )
}

export default AllRoutes;