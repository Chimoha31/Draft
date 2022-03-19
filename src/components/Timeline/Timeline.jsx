import React from "react";
import timelineElements from "../../timelineElements";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
// import "react-vertical-timeline-component/style.min.css";

function Timeline() {
  return (
    <div>
      <h1>About Me</h1>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur
        corporis quas, optio earum adipisci eius, voluptatibus doloribus
        eligendi dolor accusantium beatae at? Velit reprehenderit voluptate
        asperiores obcaecati dolor ducimus veritatis.
      </p>
      <VerticalTimeline>
        {timelineElements.map((element) => (
          <VerticalTimelineElement
            key={element.id}
            date={element.date}
            dateClassName="date"
            // iconStyle={}
            // icon={}
          >
            <h3 className="vertical-timeline-element-title">{element.title}</h3>
            <h5 className="vertical-timeline-element-subtitle">{element.location}</h5>
            <p>{element.description}</p>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </div>
  );
}

export default Timeline;
