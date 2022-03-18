import React from "react";
import Buttons from "./button/Buttons";
import Profile from "./Profile";
import styled from "styled-components";
import Title from "react-vanilla-tilt";

function Card() {
  return (
    <BigContainer>
        <Title style={{ width: "65%", borderRadius:"15px", padding: "20px"}}>
          <Profile />
          <Buttons />
        </Title>
    </BigContainer>
  );
}

const BigContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export default Card;
