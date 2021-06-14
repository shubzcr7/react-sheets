import React, { useEffect, useState } from "react";
import "./Nav.css";
import { Link } from "react-router-dom";
function Nav() {
  const { curuser, setcuruser } = useState("");
  useEffect(() => {
    if (localStorage.getItem("credentials") != null) {
      const username = JSON.parse(localStorage.getItem("credentials")).username;
      console.log(username);
    }
  });
  return (
    <div>
      <nav className="nav-head">
        <ul className="nav-menu">
          <li className="nav-item" id="nav-item1">
            <Link
              to="/"
              style={{ textDecoration: "none", color: "whitesmoke" }}
            >
              Home
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Nav;
