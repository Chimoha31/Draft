import React from "react";
import Card from "./Card";
import Contact from "./Contact";

import "./Home.css";
import styled from "styled-components";
import Footer from "./Footer";

function Home() {
  return (
    <Container>
      <H3>Thank you for visiting my Portfolio page</H3>
      <Card />
      <Contact />
      <Footer />
    </Container>
  );
}

const Container = styled.div`
  width: 100h;
  height: 100%;
  z-index: 900;
  backdrop-filter: blur(30px);
  
  &::before {
    content: "";
    position: absolute;
    right: 0%;
    width: 50%;
    height: 80%;
    background: rgb(226, 175, 174);
    clip-path: circle(60.6% at 100% 0);
  }
  &::after {
    content: "";
    position: absolute;
    top: 10%;
    left: -5%;
    width: 50%;
    height: 80%;
    background: rgb(154, 202, 123);
    clip-path: circle(30.3% at 40% 40%);
  }
`;

const H3 = styled.div`
  font-family: "Arizonia", cursive;
  width: 100%;
  font-size: 25px;
  text-align: center;
  padding: 30px 0;
  z-index: 900;

  @media (min-width: 767px) {
    font-size: 40px;
  }
  @media (min-width: 1025px) {
    font-size: 50px;
  }
`;

export default Home;
