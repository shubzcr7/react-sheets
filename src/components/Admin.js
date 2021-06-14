import React, { useRef, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Input, Button } from "@material-ui/core";
import "./Admin.css";
function Admin() {
  const history = useHistory();
  const username = useRef();
  const pass = useRef();
  useEffect(() => {
    if (localStorage.length > 0) {
      if (JSON.parse(localStorage.getItem("credentials")).username == "admin") {
        history.push("/adminhome");
      }
    }
  }, []);
  const btnhandler = (e) => {
    if (username.current.value === "admin" && pass.current.value === "12345") {
      localStorage.setItem(
        "credentials",
        JSON.stringify({ username: username.current.value })
      );
      history.push("/adminhome");
    } else {
      console.log("failed");
    }
  };

  return (
    <div className="admin_main">
      <h2>Login</h2>

      <input
        type="text"
        className="input_elem"
        ref={username}
        placeholder="Enter username"
      />
      <input
        type="password"
        className="input_elem"
        ref={pass}
        placeholder="Enter password"
      />
      <Button onClick={btnhandler}>Submit</Button>
    </div>
  );
}

export default Admin;
