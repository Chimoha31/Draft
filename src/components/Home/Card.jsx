import React from "react";
import Buttons from "./button/Buttons";
import Profile from './Profile';
import styled from "styled-components";
import Title from "react-vanilla-tilt";

function Card() {
  return (
    <BigContainer>
      <Title
        style={{
          width: "65%",
          height: "auto",
          borderRadius: "15px",
          padding: "20px",
          boxShadow: "20px 20px 30px rgba(0, 0, 0, 0.5)",
          backdropFilter: "blur(25px)",
          borderTop: "1px solid rgba(255, 255, 255, 0.4)",
          borderLeft: "1px solid rgba(255, 255, 255, 0.4)",
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-around",
        }}
      >
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
  justify-content: space-around;
`;

export default Card;
