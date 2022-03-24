import React from "react";
import styled from "styled-components";
import $ from 'jquery';

function Title() {
  $(function() {
    setTimeout(function(){
      $('.start p').fadeIn(1600);
    },500); 
    setTimeout(function(){
      $('.start h1').fadeIn(1600);
    },500); 
    setTimeout(function(){
      $('.start').fadeOut(500);
    },3500);
  });
  return (
    <Container className="start">
      <h1>Chiho Maekawa</h1>
      <p>A Front-End Developer based in Vancouver</p>
    </Container>
  );
}

const Container = styled.div`
background: #fff;
position: fixed;
top: 0;
left: 0;
height: 100%;
width: 100%;
z-index: 9000;
& h1,
p {
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  display: none;
  z-index: 9999;
  width: 100%;
  font-size: 56px;
  text-align: center;
}
& h1 {
  font-family: "Arizonia", cursive;
  @media (min-width: 767px) {
    font-size: 80px;
    padding-bottom: 50px;
  }
  @media (min-width: 1025px) {
    font-size: 95px;
    padding-bottom: 100px;
  }
}
& p {
  top: 60%;
  font-size: 15px;
  @media (min-width: 767px) {
    font-size: 28px;
  }
  @media (min-width: 1025px) {
    font-size: 35px;
  }
}
`

export default Title;
