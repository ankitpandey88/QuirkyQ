import React from 'react';


import { useNavigate } from "react-router-dom";



const Login = () => {
  const navigate = useNavigate();


    const neonTextStyle = {
        textShadow: `
          0 0 5px rgba(255, 0, 255, 0.8), 
          0 0 10px rgba(255, 0, 255, 0.8), 
          0 0 15px rgba(255, 0, 255, 0.8), 
          0 0 20px rgba(255, 0, 255, 0.8)`
      };
  return (
    <div className="h-screen w-full flex items-center justify-center bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('/LandingPage/3409297.jpg')" }}>
      <div className="absolute top-0 left-0 m-6">
        {/* <h1 className="text-4xl font-bold uppercase" style={neonTextStyle}>QuirkyQ</h1> */}
      </div>


      <div className="bg-black bg-opacity-80 p-8 rounded-lg w-full max-w-md">
        <h1 className="text-3xl text-white text-center font-bold mb-8">QuirkyQ</h1>
        <form>
          <div className="mb-4">
            <label className="block text-white text-sm mb-2" htmlFor="email">
              Email or mobile number
            </label>
            <input
              id="email"
              type="text"
              className="w-full p-3 bg-gray-700 text-white rounded-md outline-none focus:ring-2 focus:ring-red-600"
              placeholder="Enter your email or mobile number"
            />
          </div>
          <div className="mb-4">
            <label className="block text-white text-sm mb-2" htmlFor="password">
              Password
            </label>
            <input
              id="password"
              type="password"
              className="w-full p-3 bg-gray-700 text-white rounded-md outline-none focus:ring-2 focus:ring-red-600"
              placeholder="Enter your password"
            />
          </div>
          <button
           onClick={() => navigate("/")} // 
            type="submit"
            className="w-full bg-pink-700 hover:bg-pink-900 text-white font-bold py-3 rounded-md transition duration-300"
          >
            Sign In
          </button>
          <div className="flex justify-between items-center mt-4 text-gray-300 text-sm">
            <div>
              <input type="checkbox" id="rememberMe" className="mr-1" />
              <label htmlFor="rememberMe">Remember me</label>
            </div>
            <a href="#" className="hover:underline">Forgot password?</a>
          </div>
          <div className="text-center text-gray-300 my-4">OR</div>
          <button
            type="button"
            className="w-full bg-gray-500 hover:bg-gray-600 text-white font-bold py-3 rounded-md transition duration-300"
          >
            Use a sign-in code
          </button>
          <div className="mt-8 text-center text-gray-300">
            New to QuirkyQ? <a href="#" className="text-white hover:underline">Sign up now.</a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;


