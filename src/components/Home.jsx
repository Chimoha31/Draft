import React from "react";
import Card from "./Card";
import Contact from "./Contact";
import styled from "styled-components";

function Home() {
  return (
    <div>
      <h3>Thank you for visiting my Portfolio page</h3>
      <Card />
      <Contact />
    </div>
  );
}

// const Frame = styled.main`
//   width: 100%;
//   height: 100%;
//   display: flex;
//   align-items: center;
//   justify-content: center;
// `;

// const NameCard = styled.div`
//   border-top: 1px solid rgba(255, 255, 255, 0.4);
//   border-left: 1px solid rgba(255, 255, 255, 0.4);
//   width: 70%;
//   height: 70%;
//   z-index: 100;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   text-align: center;
//   border-radius: 15px;
//   box-shadow: 20px 20px 50px rgba(0, 0, 0, 0.5);
//   backdrop-filter: blur(5px);
//   overflow: hidden;
// `;

export default Home;
