import "./App.css";
import React, { Component } from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      progress: 0,
    };
  }
  setProgress = (progress) => {
    this.setState({ progress: progress });
  };
  render() {
    return (
      <div>
        <BrowserRouter>
          <Navbar />
          <LoadingBar
            color="#f11946"
            height={3}
            progress={this.state.progress}
          />
          <Routes>
            <Route
              path="/"
              element={
                <News
                  setProgress={this.setProgress}
                  keys="general"
                  pageSize={9}
                  country="in"
                  category="general"
                />
              }
            />
            <Route
              path="/business"
              element={
                <News
                  setProgress={this.setProgress}
                  keys="business"
                  pageSize={9}
                  country="in"
                  category="business"
                />
              }
            />
            <Route
              path="/entertainment"
              element={
                <News
                  setProgress={this.setProgress}
                  keys="entertainment"
                  pageSize={9}
                  country="in"
                  category="entertainment"
                />
              }
            />
            <Route
              path="/health"
              element={
                <News
                  setProgress={this.setProgress}
                  keys="health"
                  pageSize={9}
                  country="in"
                  category="health"
                />
              }
            />
            <Route
              path="/science"
              element={
                <News
                  setProgress={this.setProgress}
                  keys="science"
                  pageSize={9}
                  country="in"
                  category="science"
                />
              }
            />
            <Route
              path="sports"
              element={
                <News
                  setProgress={this.setProgress}
                  keys="sports"
                  pageSize={9}
                  country="in"
                  category="sports"
                />
              }
            />
            <Route
              path="technology"
              element={
                <News
                  setProgress={this.setProgress}
                  keys="technology"
                  pageSize={9}
                  country="in"
                  category="technology"
                />
              }
            />
          </Routes>
        </BrowserRouter>
      </div>
    );
  }
}
