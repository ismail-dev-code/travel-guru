import React from "react";
import Navbar from "../../components/Navbar";
import { Outlet } from "react-router";
import bgImage from "../../assets/Rectangle 1.png";
import Header from "../../components/Header";

const HomeLayout = () => {
  return (
    <div  className="min-h-screen bg-no-repeat bg-cover"
    style={{
        backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.8), rgba(0,0,0,0.6)), url(${bgImage})`
    }}>
      <div className="w-11/12 mx-auto">
     <nav> <Navbar></Navbar>
     </nav>
     <Header></Header>
      <Outlet></Outlet>
      </div>
    </div>
  );
};

export default HomeLayout;
