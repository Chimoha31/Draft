import React from "react";
import Button from "./Button";
import { Link } from "react-router-dom";

function Buttons() {
  return (
    <div>
      <Link to="/timeline" style={{textDecoration:"none"}}>
        <Button title="About Me" />
      </Link>
      <Link to="" style={{textDecoration:"none"}}>
        <Button title="Works" />
      </Link>
      <Link to="" style={{textDecoration:"none"}}>
        <Button title="Skills & Resume" />
      </Link>
    </div>
  );
}

export default Buttons;
