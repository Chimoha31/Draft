import React from "react";
import styled from "styled-components";

function Button({title}) {
  return (
    <Container>
      <A href="#">{title}</A>
    </Container>
  );
}

const Container = styled.div`
height: 100%;
position: relative;
padding: 30px;
display: flex;
flex-direction: column;
justify-content: space-around;
`

const A = styled.a`
  border-top: 1px solid rgba(255, 255, 255, 0.4);
  border-left: 1px solid rgba(255, 255, 255, 0.4);
  border-radius: 8px;
  box-shadow: 10px 8px 20px rgba(0, 0, 0, 0.5);
  color: black;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  width: 100%;
  margin: 0 auto;
  padding: 10px 0;
  transition: all 0.5s ease;
  &:hover {
    background-color: #fff;
    box-shadow: none;
    transform: translateY(-2px);
  }
`;


export default Button;
