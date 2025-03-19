import { LoaderPinwheel } from "lucide-react";

const BtnSubmit = ({ textBtn, isLoading, classBtnContainer = "" }) => {
  return (
    <button
      type="submit"
      disabled={isLoading}
      className={`w-full py-2.5 rounded-full bg-gradient-to-r from-indigo-500 to-indigo-900 text-white font-medium flex items-center justify-center transition duration-300 ${classBtnContainer} ${
        isLoading
          ? "opacity-50 cursor-not-allowed"
          : "active:scale-95 cursor-pointer"
      }`}
    >
      {isLoading ? <LoaderPinwheel className="animate-spin size-5" /> : textBtn}
    </button>
  );
};

export default BtnSubmit;
