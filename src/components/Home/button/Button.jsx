import React from "react";
import styled from "styled-components";

function Button({ title }) {
  return (
    <Container>
      <ButtonLink>{title}</ButtonLink>
    </Container>
  );
}

const Container = styled.div`
  position: relative;
  display: flex;
  margin: 30px 0;
`;

const ButtonLink = styled.button`
  border: none;
  border-top: 1px solid rgba(255, 255, 255, 0.4);
  border-left: 1px solid rgba(255, 255, 255, 0.4);
  background-color: rgba(255, 255, 255, 0.3);
  border-radius: 15px;
  box-shadow: 5px 8px 10px rgba(0, 0, 0, 0.5);
  font-size: 24px;
  color: black;
  text-align: center;
  display: inline-block;
  width: 70%;
  height: 50px;
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
  }
  @media (min-width: 1025px) {
    width: 35%;
    height: 40px;
  }
`;

export default Button;
