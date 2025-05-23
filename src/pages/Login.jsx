import React, { use } from "react";
import { Link } from "react-router";
import { AuthContext } from "../provider/AuthProvider";
import Navbar from "../components/Navbar";

const Login = () => {
  const { signIn, resetPassword } = use(AuthContext);

  const handleLogIn = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    signIn(email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        alert("log in successfully...");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorMessage);
      });
  };
  const handleForgotPassword = () => {
    if (!email) {
      alert.error("Please enter your email first.");
      return;
    }

    resetPassword(email)
      .then(() => {
        alert.success("Check your email for password reset instructions.");
      })
      .catch((error) => alert.error(error.message));
  };

  return (
    <>
      <Navbar></Navbar>
      <div className="card bg-base-100 mx-auto mt-24 w-full max-w-sm shrink-0 shadow-2xl">
        <div className="card-body">
          <form onSubmit={handleLogIn}>
            <label className="label">Email</label>
            <input
              type="email"
              name="email"
              className="input"
              placeholder="Email"
            />
            <label className="label">Password</label>
            <input
              type="password"
              name="password"
              className="input"
              placeholder="Password"
            />
            <div>
              <button
                onClick={handleForgotPassword}
                className="link link-hover"
              >
                Forgot password?
              </button>
            </div>
            <button type="submit" className="btn btn-primary mt-4 text-black">
              Login
            </button>
          </form>
          <p>
            New to this website? Please{" "}
            <Link className="text-primary" to={"/register"}>
              Register
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default Login;
