import React from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const apiKey = process.env.REACT_APP_API_KEY;
const weatherKey = process.env.REACT_APP_WEATHER_KEY;

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar weatherKey={weatherKey} />
        <Routes>
          <Route
            exact
            path="/"
            element={
              <News
                key="general"
                pageSize={5}
                apiKey={apiKey}
                category="general"
              />
            }
          />
          <Route
            exact
            path="/sports"
            element={
              <News
                key="sports"
                apiKey={apiKey}
                pageSize={5}
                category="sports"
              />
            }
          />
          <Route
            exact
            path="/business"
            element={
              <News
                key="business"
                apiKey={apiKey}
                pageSize={5}
                category="business"
              />
            }
          />
          <Route
            exact
            path="/entertainment"
            element={
              <News
                key="entertainment"
                apiKey={apiKey}
                pageSize={5}
                category="entertainment"
              />
            }
          />
          <Route
            exact
            path="/health"
            element={
              <News
                key="health"
                apiKey={apiKey}
                pageSize={5}
                category="health"
              />
            }
          />
          <Route
            exact
            path="/science"
            element={
              <News
                pageSize={5}
                apiKey={apiKey}
                key="science"
                category="science"
              />
            }
          />
          <Route
            exact
            path="/technology"
            element={
              <News
                pageSize={5}
                apiKey={apiKey}
                key="technology"
                category="technology"
              />
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
