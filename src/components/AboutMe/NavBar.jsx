import React from "react";
import './NavBar.css';
import HomeIcon from "@mui/icons-material/Home";
import WorkIcon from "@mui/icons-material/Work";
import ComputerIcon from "@mui/icons-material/Computer";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { Link } from "react-router-dom";

function NavBar({toggle, setToggle}) {
  const clickHandler = () => {
    setToggle(!toggle);
  }
  return (
    <>
      <span className="menu-toggle" onClick={clickHandler}>
        <MenuIcon className="menu-open" />
        <CloseIcon className="menu-close" />
      </span>
      <ul className="menu-items">
        <li>
          <Link to="/" className="home">
            <HomeIcon />
            Home
          </Link>
        </li>
        <li>
          <Link to="" className="works">
            <WorkIcon />
            Works
          </Link>
        </li>
        <li>
          <Link to="" className="skills">
            <ComputerIcon />
            Skills & Resume
          </Link>
        </li>
      </ul>
    </>
  );
}

export default NavBar;
