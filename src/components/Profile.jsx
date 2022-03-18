import React from "react";
import chiho from "../images/chiho.JPG";
import styled from "styled-components";

function Profile() {
  return (
    <Flex>
      <Div>
        <h1>Hi, I'm Chiho </h1>
        <h3>A Front-End Developer based in Vancouver</h3>
        <Image src={chiho} alt="chiho" />
      </Div>
    </Flex>
  );
}

const Image = styled.img`
  border-radius: 50%;
  width: 200px;
  height: 200px;
  box-shadow: 5px 5px 25px black;
`;

const Flex = styled.div`
  height: 100%;
  position: relative;
  padding: 30px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  text-align: center;

  & h1 {
    font-family: "Arizonia", cursive;
    font-size: 40px;
  }
  & h3 {
    font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS",
      sans-serif;
    font-weight: lighter;
  }
`;
const Div = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export default Profile;
