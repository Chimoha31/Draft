import React from "react";
import HeaderTimeline from "./HeaderTimeline";
import { VerticalTimeline } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import MenuBar from './MenuBar';
import Timeline from './Timeline';
import "./Timeline.css";
import styled from "styled-components";

function AboutMe() {
  
  return (
    <Div>
      <MenuBar />
      <HeaderTimeline />
      <VerticalTimeline>
        <Timeline />
      </VerticalTimeline>
    </Div>
  );
}

const Div = styled.div`
  background: yellowgreen;
  font-family: "Montserrat", sans-serif;
  font-size: 16px;
  color: black;
`;

export default AboutMe;
