import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.css";
import HomeScreen from "./screens/HomeScreen";
import LoginScreen from "./screens/LoginScreen";
import { auth } from "./firebase";

function App() {
  const user = null;

  useEffect(() => {
    const unsubscribed = auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        // Logged in
        console.log(userAuth);
      } else {
        // Logged out
      }
    });
    return unsubscribed;
  }, []);

  return (
    <div className="app">
      <Router>
        {!user ? (
          <LoginScreen />
        ) : (
          <Switch>
            <Route exact path="/">
              <HomeScreen />
            </Route>
          </Switch>
        )}
      </Router>
    </div>
  );
}

export default App;
