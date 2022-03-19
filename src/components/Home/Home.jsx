import React from "react";
import Card from "./Card";
import Footer from "./Footer";
import Title from "./Title";
import styled from "styled-components";

function Home() {
  return (
    <>
      <Title /> {/*タイトル(animation)*/}
      <Container>
        <H3>Thank you for visiting my Portfolio page</H3>
        <Card /> {/*Name card*/}
        <Footer /> {/*Footer*/}
      </Container>
    </>
  );
}

const Container = styled.div`
  width: 100h;
  height: 100%;
  backdrop-filter: blur(30px);
  &::before {
    content: "";
    position: absolute;
    z-index: -10;
    right: 0%;
    width: 50%;
    height: 80%;
    background: rgb(226, 175, 174);
    clip-path: circle(23.6% at 100% 0);
    @media (min-width: 767px) {
      clip-path: circle(35.6% at 100% 0);
    }
    @media (min-width: 1025px) {
      clip-path: circle(45.6% at 100% 0);
    }
  }
  &::after {
    content: "";
    position: absolute;
    z-index: -10;
    top: 10%;
    left: -5%;
    width: 80%;
    height: 80%;
    background: rgb(154, 202, 123);
    clip-path: circle(20.3% at 20% 40%);
    @media (min-width: 767px) {
      clip-path: circle(25.3% at 20% 40%);
    }
    @media (min-width: 1025px) {
      clip-path: circle(26% at 30% 40%);
    }
  }
`;

const H3 = styled.div`
  font-family: "Arizonia", cursive;
  width: 100%;
  font-size: 25px;
  font-weight: 500;
  text-align: center;
  padding: 30px 0;
  @media (min-width: 767px) {
    font-size: 40px;
  }
  @media (min-width: 1025px) {
    font-size: 50px;
  }
`;

export default Home;
