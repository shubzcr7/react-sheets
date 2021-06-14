import React from "react";
import { Link } from "react-router-dom";
import "./App.css";
import Nav from "./components/Nav";
import Home from "./components/Home";
import Admin from "./components/Admin";
import AdminHome from "./components/AdminHome";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
function App() {
  return (
    <div className="main">
      <Router>
        <Nav />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/admin" exact component={Admin} />
          <Route path="/adminhome" exact component={AdminHome} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
