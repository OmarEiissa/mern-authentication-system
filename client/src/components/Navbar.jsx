import { useContext, useEffect, useRef, useState } from "react";
import { assets } from "../assets/assets";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import { toast } from "react-toastify";
import axios from "axios";

const Navbar = () => {
  const navigate = useNavigate();
  const { userData, baseUrl, setUserData, setIsLoggedIn } =
    useContext(AppContext);

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const sendVerificationOtp = async () => {
    try {
      axios.defaults.withCredentials = true;

      const { data } = await axios.post(`${baseUrl}/api/auth/send-verify-otp`);

      if (data.success) {
        navigate("/email-verify");
        toast.success(data.message);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      error.response === undefined
        ? toast.error(error.message)
        : toast.error(error.response.data.message);
      console.error(error);
    }
  };

  const handleLogout = async () => {
    try {
      axios.defaults.withCredentials = true;
      const { data } = await axios.post(`${baseUrl}/api/auth/logout`);
      if (data.success) {
        setIsLoggedIn(false);
        setUserData(false);
        localStorage.removeItem("userData");
        toast.success(data.message);
      } else {
        toast.error(data.message);
      }
      navigate("/");
    } catch (error) {
      error.response === undefined
        ? toast.error(error.message)
        : toast.error(error.response.data.message);
      console.error(error);
    }
  };

  const handleDelete = async () => {
    try {
      axios.defaults.withCredentials = true;
      const { data } = await axios.delete(`${baseUrl}/api/auth/delete-account`);
      if (data.success) {
        setIsLoggedIn(false);
        setUserData(false);
        localStorage.removeItem("userData");
        toast.success(data.message);
      } else {
        toast.error(data.message);
      }
      navigate("/");
    } catch (error) {
      error.response === undefined
        ? toast.error(error.message)
        : toast.error(error.response.data.message);
      console.error(error);
    }
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div className="w-full flex justify-between items-center p-4 sm:p-6 sm:px-24 absolute top-0">
      <img src={assets.logo} alt="logo" className="w-28 sm:w-32" />
      {userData ? (
        <div
          onClick={(e) => {
            e.stopPropagation();
            setIsDropdownOpen(!isDropdownOpen);
          }}
          className={`size-8 flex items-center justify-center rounded-full bg-black text-white relative cursor-pointer transition-transform duration-300 ease-in-out ${
            isDropdownOpen ? "scale-110 shadow-lg" : "scale-100"
          }`}
        >
          {userData?.name?.trim()?.[0]?.toUpperCase() || "?"}
          <div
            ref={dropdownRef}
            className={`absolute right-0 top-full mt-2 z-10 text-black rounded bg-white shadow-md transition-all duration-300 ease-in-out transform origin-top-right w-max ${
              isDropdownOpen ? "opacity-100 scale-y-100" : "opacity-0 scale-y-0"
            }`}
          >
            <ul className="list-none m-0 p-2 bg-gray-100 text-sm">
              {!userData.isAccountVerified && (
                <li
                  onClick={sendVerificationOtp}
                  className="py-1 px-2 hover:bg-gray-200 active:bg-gray-200 active:scale-95 transition duration-300 cursor-pointer"
                >
                  Verify Email
                </li>
              )}
              <li
                onClick={handleLogout}
                className="py-1 px-2 hover:bg-gray-200 active:bg-gray-200 active:scale-95 transition duration-300 cursor-pointer"
              >
                Logout
              </li>
              <li
                onClick={handleDelete}
                className="py-1 px-2 hover:bg-gray-200 active:bg-gray-200 active:scale-95 transition duration-300 cursor-pointer"
              >
                Delete Account
              </li>
            </ul>
          </div>
        </div>
      ) : (
        <button
          onClick={() => navigate("/login")}
          className="flex items-center gap-2 border border-gray-500 rounded-full px-6 py-2 text-gray-800 hover:bg-gray-100 active:bg-gray-100 active:scale-95 transition duration-300 cursor-pointer"
        >
          Login
          <img src={assets.arrow_icon} alt="arrow icon" />
        </button>
      )}
    </div>
  );
};

export default Navbar;
