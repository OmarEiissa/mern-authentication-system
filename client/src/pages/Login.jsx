import { useContext, useState, useEffect, useRef } from "react";
import { assets } from "../assets/assets";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import axios from "axios";
import { toast } from "react-toastify";

const inputs = [
  {
    id: "name",
    imgSrc: assets.person_icon,
    imgAlt: "user icon",
    type: "text",
    placeholder: "Full Name",
    showInSignUp: false,
  },
  {
    id: "email",
    imgSrc: assets.mail_icon,
    imgAlt: "email icon",
    type: "email",
    placeholder: "Email id",
    showInSignUp: true,
  },
  {
    id: "password",
    imgSrc: assets.lock_icon,
    imgAlt: "password icon",
    type: "password",
    placeholder: "Password",
    showInSignUp: true,
  },
];

const Login = () => {
  const [state, setState] = useState("Sign Up");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const nameInputRef = useRef();
  const emailInputRef = useRef();

  const navigate = useNavigate();

  const { baseUrl, setIsLoggedIn, getUserData } = useContext(AppContext);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const onSubmitHandler = async (e) => {
    try {
      e.preventDefault();

      axios.defaults.withCredentials = true;

      const { name, email, password } = formData;

      if (state === "Sign Up") {
        const { data } = await axios.post(`${baseUrl}/api/auth/register`, {
          name: name.trim(),
          email: email.trim(),
          password: password.trim(),
        });

        if (data.success) {
          setIsLoggedIn(true);
          navigate("/");
          getUserData();
          // toast.success(data.message);
        } else {
          toast.error(data.message);
          console.log(data);
        }
      } else {
        const { data } = await axios.post(`${baseUrl}/api/auth/login`, {
          email,
          password,
        });

        if (data.success) {
          setIsLoggedIn(true);
          navigate("/");
          getUserData();
          // toast.success(data.message);
        } else {
          toast.error(data.message);
        }
      }
    } catch (error) {
      error.response === undefined
        ? toast.error(error.message)
        : toast.error(error.response.data.message);
      console.error(error);
    }
  };

  useEffect(() => {
    if (state === "Sign Up") {
      nameInputRef.current.focus();
    } else {
      emailInputRef.current.focus();
    }
  }, [state]);

  return (
    <div className="flex items-center justify-center min-h-screen px-6 sm:px-0 bg-gradient-to-br from-blue-200 to-purple-400">
      <img
        onClick={() => navigate("/")}
        src={assets.logo}
        alt="logo"
        className="absolute left-5 sm:left-20 top-5 w-28 sm:w-32 cursor-pointer"
      />

      <div className="bg-slate-900 p-10 rounded-lg shadow-lg w-full sm:w-96 text-indigo-300 text-sm">
        <h2 className="text-3xl font-semibold text-white text-center mb-3">
          {state === "Sign Up" ? "Create Account" : "Login"}
        </h2>

        <p className="text-center text-sm mb-6">
          {state === "Sign Up"
            ? "Create Your Account"
            : "Login to your account!"}
        </p>

        <form onSubmit={onSubmitHandler}>
          {inputs
            .filter((input) => state === "Sign Up" || input.showInSignUp)
            .map((input, index) => (
              <div
                key={index}
                className="mb-4 flex items-center gap-3 w-full px-5 py-2.5 rounded-full bg-[#333A5C]"
              >
                <img src={input.imgSrc} alt={input.imgAlt} />
                <input
                  id={input.id}
                  type={input.type}
                  placeholder={input.placeholder}
                  required
                  value={formData[input.id]}
                  onChange={handleChange}
                  className="w-full bg-transparent outline-none"
                  ref={
                    input.id === "name"
                      ? nameInputRef
                      : input.id === "email"
                      ? emailInputRef
                      : null
                  }
                />
              </div>
            ))}

          {state !== "Sign Up" && (
            <p
              onClick={() => navigate("/reset-password")}
              className="mb-4 text-indigo-500 cursor-pointer"
            >
              Forgot Password
            </p>
          )}

          <button
            typeof="submit"
            className="w-full py-2.5 rounded-full bg-gradient-to-r from-indigo-500 to-indigo-900 text-white font-medium cursor-pointer"
          >
            {state}
          </button>
        </form>

        <p className="text-gray-400 text-center text-xs mt-4">
          {state === "Sign Up"
            ? "Already have an account?"
            : "Don't have an account?"}{" "}
          <span
            onClick={() => setState(state === "Sign Up" ? "Login" : "Sign Up")}
            className="text-blue-400 cursor-pointer underline"
          >
            {state === "Sign Up" ? "Login here" : "Sign Up"}
          </span>
        </p>
      </div>
    </div>
  );
};

export default Login;
