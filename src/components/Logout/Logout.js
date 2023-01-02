import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

const Logout = () => {
  const navigate = useNavigate();
  const { dispatch } = useContext(AuthContext);

  const handleLogout = (e) => {
    e.preventDefault();
    dispatch({ type: "LOGOUT" });
    navigate("/login");
  };
  return (
    <button
      type="button"
      className="px-8 mt-8 py-3 font-semibold border rounded dark:border-gray-100 dark:text-gray-100"
      fdprocessedid="bkh3y"
      onClick={handleLogout}
    >
      Logout
    </button>
  );
};

export default Logout;
