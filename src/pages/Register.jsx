import React from 'react';
import { Link } from 'react-router';

const Register = () => {
    return (
        <div className="card bg-base-100 mx-auto mt-24 w-full max-w-sm shrink-0 shadow-2xl">
        <div className="card-body">
          <form>
            <label className="label">Full Name</label>
            <input type="text" className="input" placeholder="Full Name" />
            <label className="label">Photo URL</label>
            <input type="url" className="input" placeholder="Photo URL" />
            <label className="label">Email</label>
            <input type="email" className="input" placeholder="Email" />
            <label className="label">Password</label>
            <input type="password" className="input" placeholder="Password" />
            <label className="label">Confirm Password</label>
            <input type="password" className="input" placeholder="Confirm Password" />
            <button className="btn btn-primary mt-4 text-black">Sign In</button>
          </form>
          <p>Already have an account? Please <Link className='text-primary' to={'/login'}>Login</Link></p>
        </div>
      </div>
    );
};

export default Register;