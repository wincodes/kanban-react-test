import React, { useState } from "react";
import FilterList from "@material-ui/icons/FilterList";
import Search from "@material-ui/icons/Search";
import Sort from "@material-ui/icons/Sort";
import RemoveRedEye from "@material-ui/icons/RemoveRedEye";
import Clear from "@material-ui/icons/Clear";
import CheckCircle from "@material-ui/icons/CheckCircle";

const Navbar = ({ filters, setNewFilters, doSearch, doReset }) => {
  const [searchBar, setSearchBar] = useState(false);
  const [text, setText] = useState("");

  const searching = () => {
    if (text !== "" && text !== " ") doSearch(text);
  };

  const resetSearch = () => {
    doReset();
    setSearchBar(false);
  };

  const removeFilter = (value) => {
    const newFilters = filters.filter((el) => {
      return el !== value;
    });

    setNewFilters(newFilters);
  };

  const addFilter = (value) => {
    const newFilter = filters.concat([value]);
    setNewFilters(newFilter);
  };

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
          <div className="dropdown pointer">
            <div
              className="p-2"
              id="dropdownMenuButton"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <FilterList /> Filter
            </div>
            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
              <div className="dropdown-item">
                <span>
                  {filters.includes("longform") ? (
                    <CheckCircle
                      className="text-primary"
                      onClick={() => removeFilter("longform")}
                    />
                  ) : (
                    <CheckCircle
                      className="no-filter"
                      onClick={() => addFilter("longform")}
                    />
                  )}
                </span>{" "}
                Longform
              </div>
              <div className="dropdown-item">
                <span>
                  {filters.includes("longform10x") ? (
                    <CheckCircle
                      className="text-primary"
                      onClick={() => removeFilter("longform10x")}
                    />
                  ) : (
                    <CheckCircle
                      className="no-filter"
                      onClick={() => addFilter("longform10x")}
                    />
                  )}
                </span>
                Longform 10x
              </div>
              <div className="dropdown-item">
                <span>
                  {filters.includes("micrographic") ? (
                    <CheckCircle
                      className="text-primary"
                      onClick={() => removeFilter("micrographic")}
                    />
                  ) : (
                    <CheckCircle
                      className="no-filter"
                      onClick={() => addFilter("micrographic")}
                    />
                  )}
                </span>
                Micrographic
              </div>
              <div className="dropdown-item">
                <span>
                  {filters.includes("seoarticle") ? (
                    <CheckCircle
                      className="text-primary"
                      onClick={() => removeFilter("seoarticle")}
                    />
                  ) : (
                    <CheckCircle
                      className="no-filter"
                      onClick={() => addFilter("seoarticle")}
                    />
                  )}
                </span>
                SEO Article
              </div>
              <div className="dropdown-item">
                <span>
                  {filters.includes("seoarticle2") ? (
                    <CheckCircle
                      className="text-primary"
                      onClick={() => removeFilter("seoarticle2")}
                    />
                  ) : (
                    <CheckCircle
                      className="no-filter"
                      onClick={() => addFilter("seoarticle2")}
                    />
                  )}
                </span>
                SEO Article
              </div>
            </div>
          </div>
          <div className="p-2">
            <Sort /> Sort
          </div>
          <div className="p-2">
            {searchBar === false && (
              <div className="pointer" onClick={() => setSearchBar(true)}>
                <Search /> Search
              </div>
            )}

            {searchBar === true && (
              <div className="form-inline">
                <div className="">
                  <input
                    type="text"
                    className="search-bar"
                    placeholder="enter text"
                    value={text}
                    onChange={(e) => setText(e.currentTarget.value)}
                  />
                </div>
                <Search
                  className="pr-2 pointer"
                  onClick={() => {
                    searching();
                  }}
                />
                <Clear className="pr-2 pointer" onClick={() => resetSearch()} />
              </div>
            )}
          </div>
        </span>
      </div>
    </nav>
  );
};

export default Navbar;
