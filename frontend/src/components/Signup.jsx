import React from 'react';

function Signup() {
  return (
    <div className="max-w-md mx-auto my-32 px-5 py-2 text-center bg-white rounded-md shadow-md">
      <form className="space-y-6">
        <div>
          <h1 className="text-2xl font-bold">Join us today!</h1>
          <p className="text-gray-500">Sign up now to become a member</p>
        </div>
        <div className="space-y-3">
          <input
            type="text"
            placeholder="Enter your name"
            className="rounded-sm h-10 px-4 w-full border border-blue-200 focus:border-blue-400 focus:ring focus:ring-blue-200"
            required
          />
          <input
            type="email"
            placeholder="Enter your email"
            className="rounded-sm h-10 px-4 w-full border border-blue-200 focus:border-blue-400 focus:ring focus:ring-blue-200"
            required
          />
          <input
            type="password"
            placeholder="Enter your password"
            className="rounded-sm h-10 px-4 w-full border border-blue-200 focus:border-blue-400 focus:ring focus:ring-blue-200"
            required
          />
          <input
            type="password"
            placeholder="Confirm your password"
            className="rounded-sm h-10 px-4 w-full border border-blue-200 focus:border-blue-400 focus:ring focus:ring-blue-200"
            required
          />
          <button
            type="submit"
            className="bg-blue-500 rounded-sm px-4 w-full text-white h-10 hover:bg-blue-400 focus:outline-none focus:bg-blue-400"
          >
            Signup
          </button>
        </div>
        <p className="text-gray-500">
          Already a member?{' '}
          <a href="#" className="text-blue-500">
            Login
          </a>
        </p>
      </form>
    </div>
  );
}

export default Signup;
