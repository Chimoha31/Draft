import React, { useState } from "react";
import Timeline from "./Timeline";
import HeaderTimeline from "./HeaderTimeline";
import "./Timeline.css";
import "./AboutMe.css";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { VerticalTimeline } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import HomeIcon from "@mui/icons-material/Home";
import WorkIcon from "@mui/icons-material/Work";
import ComputerIcon from "@mui/icons-material/Computer";

function AboutMe() {
  const [toggle, setToggle] = useState(false);
  const clickHandler = () => {
    setToggle(!toggle);
  };
  return (
    <Div>
      <div className={toggle ? "page rotate" : "page"}>
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
        <div className="timeline_container">
          <HeaderTimeline />
          <VerticalTimeline>
            <Timeline />
          </VerticalTimeline>
        </div>
      </div>
    </Div>
  );
}

const Div = styled.div`
  background: yellowgreen;
  font-family: "Montserrat", sans-serif;
  font-size: 16px;
  color: black;
  line-height: 1.5;
  height: 100vh;
`;

export default AboutMe;
