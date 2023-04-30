import React, { Component } from "react";
// import { Link } from "react-router-dom";

export class Navbar extends Component {
  settingCategory = (category) => {
    debugger;
    this.props.setNewsCategory(category);
  };
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
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
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <button
                    className="nav-link"
                    onClick={() => {
                      this.settingCategory("general");
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
                      this.settingCategory("business");
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
                      this.settingCategory("entertainment");
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
                      this.settingCategory("health");
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
                      this.settingCategory("science");
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
                      this.settingCategory("sports");
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
                      this.settingCategory("technology");
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
  }
}

export default Navbar;
