import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

function Navbar() {
  const [open, setOpen] = useState(false);
  const [user, setUser] = useState(null);

  // Load user on mount
  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    setUser(storedUser);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("user");
    setUser(null); 
    setOpen(false);
  };

  return (
    <div className="bg-white shadow-md py-4">
      <div className="max-w-6xl mx-auto flex justify-between px-6 items-center">

        <h1 className="text-xl font-bold">DreamSpace Reality</h1>

        <div className="space-x-6 text-gray-700 font-medium">
          <Link to="/">Home</Link>
          <Link to="/properties">Properties</Link>
          <Link to="/contact">Contact</Link>
        </div>

        <div className="relative">
          {user ? (
            <>
              <button onClick={() => setOpen(!open)}>
                {user.name}
              </button>

              {open && (
                <div className="absolute right-0 mt-2 w-44 bg-white shadow rounded">
                  <p className="px-4 py-2 text-sm text-gray-500">
                    {user.email}
                  </p>

                  <button
                    onClick={handleLogout}
                    className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                  >
                    Logout
                  </button>
                </div>
              )}
            </>
          ) : (
            <Link
              to="/login"
              className="bg-blue-800 text-white px-4 py-2 rounded"
            >
              Login
            </Link>
          )}
        </div>

      </div>
    </div>
  );
}

export default Navbar;