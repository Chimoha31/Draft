import React from "react";
import timelineElements from "../../timelineElements";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import WorkIcon from "@mui/icons-material/Work";
import SchoolIcon from "@mui/icons-material/School";
import styled from "styled-components";
import './Timeline.css';

function Timeline() {
  let workIconStyles = { background: "pink" };
  let schoolIconStyles = { background: "yellow" };
  return (
    <Div>
      <Title>About Me</Title>
      <P>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur
        corporis quas, optio earum adipisci eius, voluptatibus doloribus
        eligendi dolor accusantium beatae at? Velit reprehenderit voluptate
        asperiores obcaecati dolor ducimus veritatis.
      </P>
      <VerticalTimeline>
        {timelineElements.map((element) => {
          let isWorkIcon = element.icon === "work";
          return (
            <VerticalTimelineElement
              key={element.id}
              date={element.date}
              dateClassName="date"
              iconStyle={isWorkIcon ? workIconStyles : schoolIconStyles}
              icon={isWorkIcon ? <WorkIcon /> : <SchoolIcon />}
            >
              <h3 className="vertical-timeline-element-title">
                {element.title}
              </h3>
              <h5 className="vertical-timeline-element-subtitle">
                {element.location}
              </h5>
              <Description>{element.description}</Description>
            </VerticalTimelineElement>
          );
        })}
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

const Title = styled.h1`
  font-size: 5rem;
  text-align: center;
`;
const P = styled.p`
  font-size: 20px;
  width: 70%;
  margin: 5rem auto;
`;

const Description = styled.p`
  padding: 1.5rem 0 2rem 0;
`
export default Timeline;
