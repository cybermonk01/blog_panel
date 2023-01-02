import "./sidebar.scss";
import React from "react";
import DashboardIcon from "@mui/icons-material/Dashboard";
import EventAvailableIcon from "@mui/icons-material/EventAvailable";
import GroupIcon from "@mui/icons-material/Group";
import AssignmentIcon from "@mui/icons-material/Assignment";
import LogoutIcon from "@mui/icons-material/Logout";
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { DarkModeContext } from "../../context/darkModeContext";
import { AuthContext } from "../../context/AuthContext";

const Sidebar = () => {
  const navigate = useNavigate();
  const { dispatch } = useContext(AuthContext);
  const { dispatchBlack } = useContext(DarkModeContext);

  const handleLogout = (e) => {
    dispatch({ type: "LOGOUT" });
    navigate("/login");
  };
  return (
    <div className="sidebar">
      <div className="top">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span className="logo">HR Panel</span>
        </Link>
      </div>
      <hr />

      <div className="center">
        <ul>
          <p className="title"> MAIN </p>
          <li>
            <DashboardIcon className="icon" />
            <span> Dashboard</span>
          </li>
          <li>
            <GroupIcon className="icon" />
            <Link to="/users" style={{ textDecoration: "none" }}>
              <span> Employees</span>
            </Link>
          </li>
          <li>
            <EventAvailableIcon className="icon" />
            <Link to="/calendar" style={{ textDecoration: "none" }}>
              <span> Attendance </span>
            </Link>
          </li>
          <li>
            <AssignmentIcon className="icon" />
            <Link to="/blogs" style={{ textDecoration: "none" }}>
              <span> All Blogs</span>
            </Link>
          </li>
          <li>
            <AssignmentIcon className="icon" />
            <Link to="/projects" style={{ textDecoration: "none" }}>
              <span> Projects</span>
            </Link>
          </li>
          <li>
            <AssignmentIcon className="icon" />
            <Link to="/gallery" style={{ textDecoration: "none" }}>
              <span> Gallery</span>
            </Link>
          </li>
          <li>
            <LogoutIcon className="icon" onClick={handleLogout} />
            <span> Logout </span>
          </li>
        </ul>
      </div>

      <div className="bottom">
        <div
          className="colorOption"
          onClick={() => dispatch({ type: "LIGHT" })}
        ></div>
        <div
          className="colorOption"
          onClick={() => dispatch({ type: "DARK" })}
        ></div>
      </div>
    </div>
  );
};

export default Sidebar;
