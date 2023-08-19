import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../componants/Navbar";

const Home = () => {
  return (
    <div>
      <Navbar/>
      <Outlet />
    </div>
  );
};

export default Home;
