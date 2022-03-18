import React from "react";
import Buttons from "./button/Buttons";
import Profile from "./Profile";
import styled from "styled-components";
import Title from "react-vanilla-tilt";
import "./Card.css";

function Card() {
  return (
    <BigContainer>
      <Title className="container">
        <Profile />
        <Buttons />
      </Title>
    </BigContainer>
  );
}

// const Container = styled.div`
//   border-top: 1px solid rgba(255, 255, 255, 0.4);
//   border-left: 1px solid rgba(255, 255, 255, 0.4);
//   width: 70%;
//   height: 70%;
//   z-index: 100;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: center;
//   text-align: center;
//   border-radius: 15px;
//   box-shadow: 20px 20px 50px rgba(0, 0, 0, 0.5);
//   backdrop-filter: blur(5px);
//   overflow: hidden;
// `;

const BigContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default Card;
