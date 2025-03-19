import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-200 to-purple-400 text-slate-900 text-center px-6">
      <h1 className="text-9xl font-bold text-indigo-700 animate-bounce">404</h1>
      <p className="text-xl mt-4 text-indigo-800 font-semibold">
        Page not found
      </p>
      <div
        onClick={() => navigate("/")}
        className="text-white mt-6 px-6 py-3 text-lg font-semibold bg-indigo-600 hover:bg-indigo-700 active:bg-indigo-700 active:scale-95 transition-all duration-300 cursor-pointer rounded-full shadow-lg"
      >
        Go back to home page
      </div>
    </div>
  );
};

export default NotFound;
