import { useContext } from "react";
import { useNavigate, useLocation } from "react-router";
import { AuthContext } from "../context/AuthContext";

const Login = () => {
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogin = () => {
    login();
    const from = location.state?.from?.pathname || "/";
    navigate(from, { replace: true });
  };

  return (
    <div className="flex items-center justify-center min-h-[60vh]">
      <div className="bg-white p-8 rounded-lg shadow max-w-md w-full text-center">
        
        <h2 className="text-2xl font-bold mb-4 text-gray-800">
          Login
        </h2>

        <p className="text-gray-600 mb-6">
          You must log in to access the Create Post page.
        </p>

        <button
          onClick={handleLogin}
          className="w-full bg-indigo-600 text-white py-2 rounded-md font-medium hover:bg-indigo-700 transition"
        >
          Log In
        </button>
      </div>
    </div>
  );
};

export default Login;
