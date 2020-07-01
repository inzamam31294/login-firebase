import React from 'react';

function Signup() {
  return (
    <div className="cont flex flex-col items-center">
      <h1 className="uppercase text-center text-5xl">sign up</h1>
        <div className="py-2">
        <input className="bg-gray-400 rounded w-64" type="email" placeholder=" Email"></input>
        </div>
        <div className="pt-2 pb-4">
        <input className="bg-gray-400 rounded w-64" type="password" placeholder=" Password"></input>
        </div>
        <div className="pt-2 pb-4">
        <input className="bg-gray-400 rounded w-64" type="password" placeholder=" Confirm Password"></input>
        </div>
        <button type="submit" className="bg-orange-500 px-2 rounded w-20">Sign up</button>
        <a href="/">Login</a>
    </div>
  );
}

export default Signup;
