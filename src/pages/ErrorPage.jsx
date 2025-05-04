import React from "react";
import { Link } from "react-router";
import Navbar from "../components/Navbar";

const ErrorPage = () => {
  return (
    <>
  <nav className="w-11/12 mx-auto">
  <Navbar></Navbar>
  </nav>
      <div className="w-fit mx-auto flex items-center justify-center text-center p-4 mt-16">
        <div className="max-w-md">
          <h1 className="text-6xl font-bold text-error">404</h1>
          <p className="text-xl font-semibold mt-4">Oops! Page Not Found</p>
          <p className="mt-2 text-base-content/70">
            The page you’re looking for doesn’t exist or has been moved.
          </p>
          <Link to="/" className="btn mt-4 bg-primary md:mb-16">
            Go to Home
          </Link>
        </div>
      </div>
    </>
  );
};

export default ErrorPage;
