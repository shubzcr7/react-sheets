import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import "./AdminHome.css";
import { Input, Button } from "@material-ui/core";

function AdminHome() {
  const history = useHistory();
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [salary, setSalary] = useState("");
  const [hobby, setHobby] = useState("");
  const [alldata, setalldata] = useState([]);
  const handleSubmit = (e) => {
    e.preventDefault();
    const objt = { name, age, salary, hobby };

    axios.post("Sheets api", objt).then((response) => {
      setName("");
      setAge("");
      setSalary("");
      setHobby("");
    });
  };

  const btnfetchhandle = () => {
    fetch("Sheets api")
      .then((data) => {
        return data.json();
      })
      .then((data) => {
        console.log(data);
        setalldata(data);
      });
  };
  const btnhandle = (e) => {
    localStorage.removeItem("credentials");
    history.push("/");
  };
  return (
    <div className="adminhome_main">
      <h2>
        {" "}
        Welcome {JSON.parse(localStorage.getItem("credentials")).username}
      </h2>

      <Input
        className="input_elem"
        placeholder="Enter your Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <Input
        className="input_elem"
        placeholder="Enter your Age"
        value={age}
        onChange={(e) => setAge(e.target.value)}
      />

      <Input
        className="input_elem"
        placeholder="Enter your Salary"
        value={salary}
        onChange={(e) => setSalary(e.target.value)}
      />

      <Input
        className="input_elem"
        placeholder="Enter your Hobby"
        value={hobby}
        onChange={(e) => setHobby(e.target.value)}
      />
      <div className="btns">
        <Button variant="outlined" color="primary" onClick={handleSubmit}>
          Submit
        </Button>
        <Button variant="outlined" color="primary" onClick={btnfetchhandle}>
          Fetch
        </Button>
      </div>
      <div className="logoutbtn">
        <Button variant="outlined" color="primary" onClick={btnhandle}>
          Logout
        </Button>
      </div>

      {JSON.stringify(alldata)}
    </div>
  );
}

export default AdminHome;
