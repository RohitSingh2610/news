import "./App.css";

import React, { Component } from "react";
import NavBar from "./component/NavBar";
import NewsContainer from "./component/NewsContainer";

import { BrowserRouter as Main, Routes, Route } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";

export default class App extends Component {
  state = {
    progress: 0,
  };
  setProgress=(progress)=>{
    this.setState({ progress: progress });
  }
  render() {
    return (
      <>
        <div>
          <Main>
            <NavBar />
            <LoadingBar
            height={3}
              color="#de1a04"
              progress={this.state.progress}
              // onLoaderFinished={() => setProgress(0)}
            />

            {/* <NewsContainer   pageSize={5} country="in" category="general" /> */}
            <Routes>
              <Route
                exact
                path="/"
                element={
                  <NewsContainer
                    setProgress={this.setProgress}
                    key="general"
                    pageSize={5}
                    country="in"
                    category="general"
                  />
                }
              />
              <Route
                exact
                path="/business"
                element={
                  <NewsContainer
                    setProgress={this.setProgress}
                    key="business"
                    pageSize={5}
                    country="in"
                    category="business"
                  />
                }
              />
              <Route
                exact
                path="/entertainment"
                element={
                  <NewsContainer
                    setProgress={this.setProgress}
                    key="entertainment"
                    pageSize={5}
                    country="in"
                    category="entertainment"
                  />
                }
              />
              <Route
                exact
                path="/general"
                element={
                  <NewsContainer
                    setProgress={this.setProgress}
                    key="general"
                    pageSize={5}
                    country="in"
                    category="general"
                  />
                }
              />
              <Route
                exact
                path="/health"
                element={
                  <NewsContainer
                    setProgress={this.setProgress}
                    key="health"
                    pageSize={5}
                    country="in"
                    category="health"
                  />
                }
              />
              <Route
                exact
                path="/science"
                element={
                  <NewsContainer
                    setProgress={this.setProgress}
                    key="science"
                    pageSize={5}
                    country="in"
                    category="science"
                  />
                }
              />
              <Route
                exact
                path="/sports"
                element={
                  <NewsContainer
                    setProgress={this.setProgress}
                    key="sports"
                    pageSize={5}
                    country="in"
                    category="sports"
                  />
                }
              />
              <Route
                exact
                path="/technology"
                element={
                  <NewsContainer
                    setProgress={this.setProgress}
                    key="technology"
                    pageSize={5}
                    country="in"
                    category="technology"
                  />
                }
              />
            </Routes>
          </Main>
        </div>
      </>
    );
  }
}
