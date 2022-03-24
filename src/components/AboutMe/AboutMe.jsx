import React, { useState } from "react";
import Pointer from "../Home/parts/Pointer";
import NavBar from "./NavBar";
import Timeline from "./Timeline";
import HeaderTimeline from "./HeaderTimeline";
import "./Timeline.css";
import "./AboutMe.css";
import styled from "styled-components";
import { VerticalTimeline } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

function AboutMe() {
  const [toggle, setToggle] = useState(false);
  return (
    <Div>
      <Pointer />
      <div className={toggle ? "page rotate" : "page"}>
        <NavBar toggle={toggle} setToggle={setToggle} />
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
