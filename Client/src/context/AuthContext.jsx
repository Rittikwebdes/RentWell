import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";

export const Auth = createContext();
export default function AuthContext({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [token, setToken] = useState([]);
  const [room, setRoom] = useState([]);
  useEffect(() => {
    let LStoken = localStorage.getItem("jwt");
    if (LStoken) {
      setToken(LStoken);
      setIsAuthenticated(true);
    }
    // setToken(localStorage.getItem("token"))
  });

  const signup = async (name, email, password) => {
    try {
      const { data } = await axios.post(
        "http://localhost:3000/user/signup",
        { name, email, password },
        {
          withCredentials: true,
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (data.success) {
        window.location.href = "/login";
      }

      console.log(data);
      alert(data.message);
    } catch (error) {
      console.log(error);
    }
  };
  const login = async (email, password) => {
    try {
      const { data } = await axios.post(
        "http://localhost:3000/user/login",
        { email, password },

        {
          withCredentials: true,
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      window.localStorage.setItem("jwt", data.token);
      console.log(data);
      alert(data.message);
      setIsAuthenticated(true);
      if (data.success) {
        window.location.href = "/";
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("jwt"); // Or sessionStorage.removeItem('token');
    // Redirect to login page or home page
    window.location.href = "/login";
    setIsAuthenticated(false);
  };

  useEffect(() => {
    const AllRooms = async () => {
      const {data} = await axios.get("http://localhost:3000/add/allrooms", {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      });
      console.log(data)
      setRoom(data)
    };
    AllRooms();
  }, []);
  return (
    <Auth.Provider
      value={{
        handleLogout,
        login,
        isAuthenticated,
        setIsAuthenticated,
        signup,
        token,
        room
      }}
    >
      {children}
    </Auth.Provider>
  );
}
export const useAuth = () => useContext(Auth);
