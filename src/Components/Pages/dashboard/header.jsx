import React from "react";
import FilterList from "@material-ui/icons/FilterList";
import Search from "@material-ui/icons/Search";
import Sort from "@material-ui/icons/Sort";
import RemoveRedEye from "@material-ui/icons/RemoveRedEye";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light pb-0 nav-2">
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
            <div className="p-2 text-secondary">
              <span className="pr-2">
                <RemoveRedEye />
              </span>{" "}
              Statuses
            </div>
          </li>
        </ul>
        <span className="form-inline text-secondary">
          <div className="p-2">
            <FilterList /> Filter
          </div>
          <div className="p-2">
            <Sort /> Sort
          </div>
          <div className="p-2">
            <Search /> Search
          </div>
        </span>
      </div>
    </nav>
  );
};

export default Navbar;
