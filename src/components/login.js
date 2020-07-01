import React from 'react';

function Login() {
  return (
    <div className="cont flex flex-col items-center">
      <h1 className="uppercase text-center text-5xl">login</h1>
        <div className="py-2">
        <input className="bg-gray-400 rounded w-64" type="email" placeholder=" Email"></input>
        </div>
        <div className="pt-2 pb-4">
        <input className="bg-gray-400 rounded w-64" type="password" placeholder=" Password"></input>
        </div>
        <button type="submit" className="bg-orange-500 px-2 rounded w-20">Login</button>
        <a href="/signup">Sign Up</a>
    </div>
  );
}

export default Login;
