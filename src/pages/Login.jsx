import React from 'react';
import { Link } from 'react-router';

const Login = () => {
    return (
        
          <div className="card bg-base-100 mx-auto mt-24 w-full max-w-sm shrink-0 shadow-2xl">
            <div className="card-body">
              <form>
                <label className="label">Email</label>
                <input type="email" className="input" placeholder="Email" />
                <label className="label">Password</label>
                <input type="password" className="input" placeholder="Password" />
                <div><a className="link link-hover">Forgot password?</a></div>
                <button className="btn btn-primary mt-4 text-black">Login</button>
              </form>
              <p>New to this website? Please <Link className='text-primary' to={'/register'}>Register</Link></p>
            </div>
          </div>
       
    );
};

export default Login;