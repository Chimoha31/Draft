import React from "react";
import styled from 'styled-components';

function HeaderTimeline() {
  return (
    <div>
      <Title>About Me</Title>
      <P>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur
        corporis quas, optio earum adipisci eius, voluptatibus doloribus
        eligendi dolor accusantium beatae at? Velit reprehenderit voluptate
        asperiores obcaecati dolor ducimus veritatis.
      </P>
    </div>
  );
}

const Title = styled.h1`
  font-size: 3rem;
  text-align: center;
  margin-top: 0;
`;
const P = styled.p`
  font-size: 20px;
  width: 70%;
  margin: 5rem auto;
  text-align:center
`;

export default HeaderTimeline;
