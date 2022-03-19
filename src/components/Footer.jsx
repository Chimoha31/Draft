import React from "react";
import styled from "styled-components";

function Footer() {
  return (
    <FooterDiv>
      <ContactDiv>
        <h2>Reach me</h2>
        <p>+1(604)-785-2569</p>
        <p>mokochii1108@gmail.com</p>
        <div>
          <a href="#">
            <i className="fab fa-github-square"></i>
          </a>
          <a href="#">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="#">
            <i className="fab fa-medium"></i>
          </a>
        </div>
        <p>
          &copy; ChihoMaekawa 2021-2022 /<br />
          All Rights Reserved
        </p>
      </ContactDiv>
    </FooterDiv>
  );
}

const FooterDiv = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: -10;

  &::before {
    content: "";
    position: absolute;
    z-index: -20;
    right: 0%;
    bottom: 10%;
    width: 50%;
    height: 35%;
    background: rgb(243, 231, 125);
    clip-path: circle(18.5% at 70% 40%);
    @media (min-width: 767px) {
      clip-path: circle(24.5% at 70% 40%);
    }
    @media (min-width: 1025px) {
      clip-path: circle(24.5% at 70% 40%);
    }
  }
  &::after {
    content: "";
    position: absolute;
    z-index: -20;
    left: 0;
    bottom: 10px;
    width: 70%;
    height: 40%;
    background: rgb(212, 109, 99);
    clip-path: circle(45.7% at 28% 71%);
    @media (min-width: 767px) {
      clip-path: circle(20.7% at 28% 71%);
    }
    @media (min-width: 1025px) {
      clip-path: circle(27.7% at 30% 71%);
    }
  }
`;
const ContactDiv = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  z-index: 3;
  margin-top: 40px;
  & h2 {
    font-size: 72px;
    font-family: "Arizonia", cursive;
    margin-bottom: 10px;
  }
  & p {
    font-size: 24px;
    text-align: center;
  }
  & a {
    color: black;
  }
  & i {
    font-size: 40px;
    margin-right: 10px;
  }
`;

export default Footer;
