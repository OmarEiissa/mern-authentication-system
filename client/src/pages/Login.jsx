import { useContext, useState, useEffect, useRef } from "react";
import { assets } from "../assets/assets";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import axios from "axios";
import { toast } from "react-toastify";
import BtnSubmit from "../components/BtnSubmit";
import FormContainer from "../components/FormContainer";
import { Eye, EyeClosed } from "lucide-react";

const inputs = [
  {
    id: "name",
    imgSrc: assets.person_icon,
    imgAlt: "user icon",
    type: "text",
    placeholder: "Full Name",
    showInLogin: false,
  },
  {
    id: "email",
    imgSrc: assets.mail_icon,
    imgAlt: "email icon",
    type: "email",
    placeholder: "Email id",
    showInLogin: true,
  },
  {
    id: "password",
    imgSrc: assets.lock_icon,
    imgAlt: "password icon",
    type: "password",
    placeholder: "Password",
    showInLogin: true,
  },
  {
    id: "confirmPassword",
    imgSrc: assets.lock_icon,
    imgAlt: "password icon",
    type: "password",
    placeholder: "Confirm Password",
    showInLogin: false,
  },
];

const Login = () => {
  const [state, setState] = useState("Login");
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const nameInputRef = useRef();
  const emailInputRef = useRef();

  const navigate = useNavigate();

  const { baseUrl, setIsLoggedIn, getUserData, userData, isLoggedIn } =
    useContext(AppContext);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const onSubmitHandler = async (e) => {
    try {
      e.preventDefault();
      setIsLoading(true);

      axios.defaults.withCredentials = true;

      const { name, email, password, confirmPassword } = formData;

      if (state === "Sign Up") {
        const { data } = await axios.post(`${baseUrl}/api/auth/register`, {
          name: name.trim(),
          email: email.trim(),
          password: password.trim(),
          confirmPassword: confirmPassword.trim(),
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
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (state === "Sign Up") {
      nameInputRef.current.focus();
    } else {
      emailInputRef.current.focus();
    }
  }, [state]);

  useEffect(() => {
    isLoggedIn && userData && userData.isAccountVerified && navigate("/");
  }, [isLoggedIn, userData, navigate]);

  return (
    <FormContainer>
      <div className="bg-slate-900 p-10 rounded-lg shadow-lg w-full sm:w-96 text-indigo-300 text-sm relative">
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
            .filter((input) => state === "Sign Up" || input.showInLogin)
            .map((input, index) => (
              <div
                key={index}
                className="mb-4 flex items-center justify-between gap-3 w-full px-5 py-2.5 rounded-full bg-[#333A5C]"
              >
                <img src={input.imgSrc} alt={input.imgAlt} />
                <input
                  id={input.id}
                  type={
                    input.type === "password"
                      ? showPassword
                        ? "text"
                        : "password"
                      : "text"
                  }
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
                {input.id === "password" && (
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="text-indigo-500 cursor-pointer" // #b3c0ff
                  >
                    {showPassword ? <Eye size={20} /> : <EyeClosed size={20} />}
                  </button>
                )}
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

          <BtnSubmit textBtn={state} isLoading={isLoading} />
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
    </FormContainer>
  );
};

export default Login;
