import React from "react";
import styled from "styled-components";

function Button({title, link}) {
  return (
    <Container>
      <A href={link}>{title}</A>
    </Container>
  );
}

const Container = styled.div`
position: relative;
display: flex;
margin: 30px 0;
`

const A = styled.a`
  border-top: 1px solid rgba(255, 255, 255, 0.4);
  border-left: 1px solid rgba(255, 255, 255, 0.4);
  border-radius: 15px;
  box-shadow: 10px 8px 20px rgba(0, 0, 0, 0.5);
  font-size: 24px;
  color: black;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  width: 70%;
  margin: 0 auto;
  padding: 10px 0;
  transition: all 0.5s ease;
  &:hover {
    background-color: #fff;
    box-shadow: none;
    transform: translateY(-2px);
  }
  @media (min-width: 767px) {
    width: 50%;
    height: 30px;
  }
  @media (min-width: 1025px) {
    width: 35%;
    height: 30px;
  }
`;


export default Button;
