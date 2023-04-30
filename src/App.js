import "./App.css";
import React, { useState } from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";

const App = () => {
  const pageSize = 9;
  const apiKey = process.env.REACT_APP_NEWS_API_KEY;
  const [progress, setProgress] = useState(0);
  const [newsCategory, setNewsCategory] = useState("general");

  return (
    <div>
      {/* <BrowserRouter> */}
      <Navbar setNewsCategory={setNewsCategory} />
      <LoadingBar color="#f11946" height={3} progress={progress} />
      <News
        setProgress={setProgress}
        apiKey={apiKey}
        pageSize={pageSize}
        country="in"
        category={newsCategory}
      />
      {/* <Routes>
            <Route
              path="/"
              element={
                <News
                  setProgress={this.setProgress}
                  apiKey={this.apiKey}
                  pageSize={this.pageSize}
                  country="in"
                  category={this.state.newsCategory}
                />
              }
            /> */}
      {/* <Route
              path="/business"
              keys="business"
              element={
                <News
                  setProgress={this.setProgress}
                  apiKey={this.apiKey}
                  pageSize={this.pageSize}
                  country="in"
                  category="business"
                />
              }
            />
            <Route
              path="/entertainment"
              keys="entertainment"
              element={
                <News
                  setProgress={this.setProgress}
                  apiKey={this.apiKey}
                  pageSize={this.pageSize}
                  country="in"
                  category="entertainment"
                />
              }
            />
            <Route
              path="/health"
              keys="health"
              element={
                <News
                  setProgress={this.setProgress}
                  apiKey={this.apiKey}
                  pageSize={this.pageSize}
                  country="in"
                  category="health"
                />
              }
            />
            <Route
              path="/science"
              keys="science"
              element={
                <News
                  setProgress={this.setProgress}
                  apiKey={this.apiKey}
                  pageSize={this.pageSize}
                  country="in"
                  category="science"
                />
              }
            />
            <Route
              path="sports"
              keys="sports"
              element={
                <News
                  setProgress={this.setProgress}
                  apiKey={this.apiKey}
                  pageSize={this.pageSize}
                  country="in"
                  category="sports"
                />
              }
            />
            <Route
              path="technology"
              keys="technology"
              element={
                <News
                  setProgress={this.setProgress}
                  apiKey={this.apiKey}
                  pageSize={this.pageSize}
                  country="in"
                  category="technology"
                />
              }
            /> */}
      {/* </Routes>
        </BrowserRouter> */}
    </div>
  );
};

export default App;
