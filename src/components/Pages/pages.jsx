import React from "react";
import Home from './home';
import { Routes, Route } from "react-router-dom"
import Login from "./login";
import Register from "./register";
import Reset from "./reset";

const Pages = () => {
    return (
      <div>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="reset" element={<Reset />}></Route>
        </Routes>
      </div>
    );
}
 
export default Pages;