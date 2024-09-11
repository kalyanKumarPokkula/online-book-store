import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { authState } from "../Store/AuthState";
import { useRecoilState, useSetRecoilState } from "recoil";
import { useNavigate } from "react-router-dom";

const Logout = () => {
  const user = useRecoilState(authState);
  const setUser = useSetRecoilState(authState);
  const navigator = useNavigate();

  useEffect(() => {
    console.log("inside the logout", user[0].userId);

    console.log("inside the logout", user);
  }, []);

  const handleLogout = () => {
    // Clear local storage or cookies here

    setUser({ userId: null, username: null, email: null });
    localStorage.removeItem("token");
    navigator("/signin");
  };

  return (
    <div className="container mx-auto w-4/12 font-bold text-center mt-24 mb-24">
      <h2 className="text-3xl mb-6">Logout</h2>
      <p className="mb-4">Are you sure you want to logout?</p>
      <button
        className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 mr-6 rounded"
        onClick={handleLogout}
      >
        Logout
      </button>
      <Link to="/" className="text-blue-500 hover:text-blue-700">
        Cancel
      </Link>
    </div>
  );
};

export default Logout;
