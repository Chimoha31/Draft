import React from 'react';
import styled from 'styled-components';
import {
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import WorkIcon from "@mui/icons-material/Work";
import SchoolIcon from "@mui/icons-material/School";
import timelineElements from "../../timelineElements";

function Timeline() {
  let workIconStyles = { background: "pink" };
  let schoolIconStyles = { background: "yellow" };
  return (
    <div>
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
    </div>
  )
}

const Description = styled.p`
  padding: 1.5rem 0 2rem 0;
`;

export default Timeline
