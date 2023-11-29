import React from "react";
import Home from './home';
import { Routes, Route } from "react-router-dom"
import Login from "./login";

const Pages = () => {
    return (
      <div>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/login" element={<Login />}></Route>
        </Routes>
      </div>
    );
}
 
export default Pages;