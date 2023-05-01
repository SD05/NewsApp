import React from "react";
// import { Link } from "react-router-dom";

const Navbar = (props) => {
  const settingCategory = (category) => {
    props.setNewsCategory(category);
  };

  return (
    <div>
      <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            NewsMonkey
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <button
                  className="nav-link"
                  onClick={() => {
                    settingCategory("general");
                  }}
                  // href="/"
                >
                  Home
                </button>
              </li>
              <li className="nav-item">
                <button
                  className="nav-link"
                  onClick={() => {
                    settingCategory("business");
                  }}
                  // href="/business"
                >
                  Business
                </button>
              </li>
              <li className="nav-item">
                <button
                  className="nav-link"
                  onClick={() => {
                    settingCategory("entertainment");
                  }}
                  // href="/entertainment"
                >
                  Entertainment
                </button>
              </li>
              <li className="nav-item">
                <button
                  className="nav-link"
                  onClick={() => {
                    settingCategory("health");
                  }}
                  // href="/health"
                >
                  Health
                </button>
              </li>
              <li className="nav-item">
                <button
                  className="nav-link"
                  onClick={() => {
                    settingCategory("science");
                  }}
                  // href="/science"
                >
                  Science
                </button>
              </li>
              <li className="nav-item">
                <button
                  className="nav-link"
                  onClick={() => {
                    settingCategory("sports");
                  }}
                  // href="/sports"
                >
                  Sports
                </button>
              </li>
              <li className="nav-item">
                <button
                  className="nav-link"
                  onClick={() => {
                    settingCategory("technology");
                  }}
                  // href="/technology"
                >
                  Technology
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
