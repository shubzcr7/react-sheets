import React from "react";
import "./Home.css";
import { useHistory } from "react-router-dom";
import { Button } from "react-bootstrap";
function Home() {
  const history = useHistory();

  return (
    <div>
      <div className="cat">
        <span>
          <Button variant="primary" onClick={() => history.push("/admin")}>
            Admin
          </Button>
        </span>
      </div>
    </div>
  );
}

export default Home;
