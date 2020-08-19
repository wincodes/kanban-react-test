import React from "react";
import UserIcon from "@material-ui/icons/AccountCircle";
import ArrowDropDown from "@material-ui/icons/ArrowDropDown";
import BugReport from "@material-ui/icons/BugReport";
import SupervisorAccount from "@material-ui/icons/SupervisorAccount";
import Dashboard from "@material-ui/icons/Dashboard";
import Clear from "@material-ui/icons/Clear";
import Add from "@material-ui/icons/Add";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light pb-0 nav-1">
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarText"
        aria-controls="navbarText"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarText">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <div className="d-flex bg-light user-details justify-content-between">
              <div> Global Electronic Services </div>
              <div>
                <span>
                  {" "}
                  <Clear className="smallx" /> <ArrowDropDown />
                </span>
              </div>
            </div>
          </li>
          <li className="nav-item">
            <div className="nav-link">
              <Add />
              Create New
            </div>
          </li>
        </ul>
        <span className="form-inline text-secondary">
          <div className="user-actions">
            <Dashboard />
          </div>
          <div className="user-actions">
            <SupervisorAccount />
          </div>
          <div className="user-actions">
            <BugReport />
          </div>
          <div className="user-actions">
            <UserIcon />
            Account{" "}
            <span>
              <ArrowDropDown />
            </span>
          </div>
        </span>
      </div>
    </nav>
  );
};

export default Navbar;
