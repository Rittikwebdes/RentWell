

import  { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Login = () => {

const {login} = useAuth();


 
  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");




  const handleSubmit =async (e) => {
    
    const formData = new FormData();

   
    formData.append("email", email);

    formData.append("password", password);

    e.preventDefault();
   login(email, password );



  
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-cover bg-[url('/img4.jpeg')] md:p-0 p-8">
      <div className="w-full max-w-md p-8 space-y-6 bg-transparent backdrop-blur-2xl rounded-lg shadow">
        <h2 className="text-2xl font-bold text-center text-orange-500">Login</h2>
        <form className="space-y-4" onSubmit={handleSubmit}>

          <div>
            <label className="block text-sm font-medium text-gray-100">Email:</label>
            <input
              type="email"
         
     
              value={email}
                  onChange={(e) => setEmail(e.target.value)}

              className="w-full px-4 py-2 mt-1 text-gray-100 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 bg-transparent"
              placeholder="Enter your email"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-100">Password:</label>
            <input
              type="password"
             
         
              value={password}
                  onChange={(e) => setPassword(e.target.value)}

              className="w-full px-4 py-2 mt-1 text-gray-100 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 bg-transparent"
              placeholder="Enter your password"
              required
            />
          </div>
          <div>
            <p className="text-center text-white">New User? <span className="text-blue-500 font- underline text-2xl"><Link to="/signup">Signup</Link></span> </p>
          </div>
          <button
            type="submit"
            className="w-full px-4 py-2 text-white bg-orange-500 rounded-md hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;

