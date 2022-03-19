import React from "react";
import chiho from "../../images/chiho.JPG";
import styled from "styled-components";

function Profile() {
  return (
    <Flex>
        <h1>Hi, I'm Chiho </h1>
        <h3>A Front-End Developer based in Vancouver</h3>
        <Image src={chiho} alt="chiho" />
    </Flex>
  );
}

const Image = styled.img`
  border-radius: 50%;
  width: 200px;
  height: 200px;
  box-shadow: 5px 5px 25px black;
  @media (min-width: 767px) {
    width: 250px;
    height: 250px;
  }
  @media (min-width: 1025px) {
    width: 300px;
    height: 300px;
  }
`;

const Flex = styled.div`
  position: relative;
  text-align: center;
  & h1 {
    font-family: "Arizonia", cursive;
    font-size: 40px;
  }
  & h3 {
    font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS",
      sans-serif;
    font-weight: lighter;
    margin: 0;
    margin-bottom: 30px;
  }
  @media (min-width: 1025px) {
    h1 {
      font-size: 50px;
    }
    h3 {
      font-size: 24px;
    }
  }
`;

export default Profile;
