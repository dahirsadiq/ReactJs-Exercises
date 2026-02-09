import { NavLink, Outlet } from "react-router";
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";

const App = () => {
  const { isAuthenticated, logout } = useContext(AuthContext);

  return (
    <div className="min-h-screen bg-gray-100 text-gray-800">
      
      {/* Header */}
      <header className="bg-white shadow">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-indigo-600">
            My Blog
          </h1>

          <nav className="flex items-center gap-6">
            <NavLink
              to="/"
              className="font-medium hover:text-indigo-600"
            >
              Home
            </NavLink>

            {isAuthenticated ? (
              <>
                <NavLink
                  to="/create"
                  className="font-medium hover:text-indigo-600"
                >
                  Create Post
                </NavLink>

                <button
                  onClick={logout}
                  className="bg-red-500 text-white px-4 py-1.5 rounded hover:bg-red-600 transition"
                >
                  Logout
                </button>
              </>
            ) : (
              <NavLink
                to="/login"
                className="bg-indigo-600 text-white px-4 py-1.5 rounded hover:bg-indigo-700 transition"
              >
                Login
              </NavLink>
            )}
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-6 py-8">
        <Outlet />
      </main>
    </div>
  );
};

export default App;
