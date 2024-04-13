import { Link } from "react-router-dom";

function App() {
  const userId = localStorage.getItem("userId");

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-lg">
      <div className="flex justify-center items-center mb-8">
        <h1 className="text-3xl font-semibold text-gray-800">Auth App</h1>
      </div>
      {userId ? (
        <div className="flex justify-center items-center mb-4">
          <Link
            to="/dashboard"
            className="px-6 py-3 text-lg text-white bg-blue-500 rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
          >
            Dashboard
          </Link>
        </div>
      ) : (
        <>
          <div className="flex justify-center items-center mb-4">
            <Link
              to="/sign-up"
              className="px-6 py-3 text-lg text-white bg-blue-500 rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
            >
              Sign Up
            </Link>
          </div>
          <div className="flex justify-center items-center">
            <Link
              to="/login"
              className="px-6 py-3 text-lg text-white bg-blue-500 rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
            >
              Log In
            </Link>
          </div>
        </>
      )}
    </div>
  );
}

export default App;
