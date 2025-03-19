import { useNavigate } from "react-router-dom";
import { useContext, useEffect, useRef, useState } from "react";
import { toast } from "react-toastify";
import axios from "axios";
import { AppContext } from "../context/AppContext";
import BtnSubmit from "../components/BtnSubmit";
import FormContainer from "../components/FormContainer";

const EmailVerify = () => {
  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState(false);

  axios.defaults.withCredentials = true;

  const { baseUrl, isLoggedIn, userData, getUserData } = useContext(AppContext);
  const inputRefs = useRef([]);

  const handleInput = (e, index) => {
    if (e.target.value.length > 0 && index < inputRefs.current.length - 1) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && e.target.value === "" && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handlePaste = (e) => {
    const paste = e.clipboardData.getData("text");
    const pasteArray = paste.split("");

    pasteArray.forEach((char, index) => {
      if (inputRefs.current[index]) {
        inputRefs.current[index].value = char;
      }
    });
  };

  const onSubmitHandler = async (e) => {
    try {
      e.preventDefault();
      setIsLoading(true);

      const otpArray = inputRefs.current.map((e) => e.value);
      const otp = otpArray.join("");

      const { data } = await axios.post(`${baseUrl}/api/auth/verify-account`, {
        otp,
      });

      if (data.success) {
        toast.success(data.message);
        getUserData();
        navigate("/");
      } else {
        toast.error(data.message);
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
    inputRefs.current[0]?.focus();
  }, []);

  useEffect(() => {
    isLoggedIn && userData && userData.isAccountVerified && navigate("/");
    !isLoggedIn && navigate("/login");
  }, [isLoggedIn, userData, navigate]);

  return (
    <FormContainer>
      <form
        onSubmit={onSubmitHandler}
        className="bg-slate-900 p-8 rounded-lg shadow-lg w-96 text-sm relative"
      >
        <h1 className="text-white text-2xl font-semibold text-center mb-4">
          Email Verify OTP
        </h1>
        <p className="text-center mb-6 text-indigo-300">
          Enter the 6-digit code send to your email id.
        </p>

        <div className="flex justify-between mb-8" onPaste={handlePaste}>
          {Array(6)
            .fill(0)
            .map((_, index) => (
              <input
                type="text"
                maxLength="1"
                key={index}
                required
                className="size-12 bg-[#333A5C] text-white text-center text-xl rounded-md"
                ref={(e) => (inputRefs.current[index] = e)}
                onInput={(e) => handleInput(e, index)}
                onKeyDown={(e) => handleKeyDown(e, index)}
              />
            ))}
        </div>

        <BtnSubmit
          textBtn={"Verify email"}
          isLoading={isLoading}
          classBtnContainer={"py-3"}
        />
      </form>
    </FormContainer>
  );
};

export default EmailVerify;
