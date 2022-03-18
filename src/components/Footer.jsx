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
`;
const ContactDiv = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  z-index: 3;
  margin: 50px;
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
