import React, { use } from "react";
import { Link } from "react-router";
import { AuthContext } from "../provider/AuthProvider";

const Register = () => {
  const { createUser} = use(AuthContext);

  const handleRegister = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const photo = e.target.photo.value;
    const password = e.target.password.value;
    const confirmPassword = e.target.confirmPassword.value;
    createUser(email, password)
      .then((result) => {
        const user = result.user;
        alert("you have succefully created an account");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorMessage);
      });
   
  };
  return (
    <div className="card bg-base-100 mx-auto mt-24 w-full max-w-sm shrink-0 shadow-2xl">
      <div className="card-body">
        <form onSubmit={handleRegister}>
          <label className="label">Full Name</label>
          <input
            type="text"
            name="name"
            className="input"
            placeholder="Full Name"
          />
          <label className="label">Photo URL</label>
          <input
            type="url"
            name="photo"
            className="input"
            placeholder="Photo URL"
          />
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
          <label className="label">Confirm Password</label>
          <input
            type="password"
            name="confirmPassword"
            className="input"
            placeholder="Confirm Password"
          />
          <button type="submit" className="btn btn-primary mt-4 text-black">
            Sign In
          </button>
        </form>
        <p>
          Already have an account? Please{" "}
          <Link className="text-primary" to={"/login"}>
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
