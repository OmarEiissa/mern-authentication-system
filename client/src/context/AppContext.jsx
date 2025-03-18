import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";

// eslint-disable-next-line react-refresh/only-export-components
export const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
  axios.defaults.withCredentials = true;

  const baseUrl = import.meta.env.VITE_BASE_URL;

  const getStoredUserData = () => {
    try {
      const storedData = localStorage.getItem("userData");
      return storedData ? JSON.parse(storedData) : null;
    } catch (error) {
      console.error("Error parsing userData from localStorage:", error);
      return null;
    }
  };

  const [userData, setUserData] = useState(getStoredUserData());
  const [isLoggedIn, setIsLoggedIn] = useState(!!userData);

  const getUserData = async () => {
    try {
      const { data } = await axios.get(`${baseUrl}/api/user/data`);

      if (data.success) {
        setUserData(data.userData);
        localStorage.setItem("userData", JSON.stringify(data.userData));
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      console.error("Error fetching user data:", error.message);
      localStorage.removeItem("userData");
    }
  };

  const getAuthStatus = async () => {
    try {
      const { data } = await axios.get(`${baseUrl}/api/auth/is-auth`);
      if (data.success) {
        setIsLoggedIn(true);
        getUserData();
      } else {
        setIsLoggedIn(false);
        setUserData(null);
        localStorage.removeItem("userData");
      }
    } catch (error) {
      console.error(
        "Error checking auth status:",
        error?.response?.data?.message || error.message
      );
      setIsLoggedIn(false);
      setUserData(null);
      localStorage.removeItem("userData");
    }
  };

  useEffect(() => {
    getAuthStatus();
  }, []);

  const value = {
    baseUrl,

    isLoggedIn,
    setIsLoggedIn,

    userData,
    setUserData,

    getUserData,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};
