import React from "react";
import Card from "./Card";
import Contact from "./Contact";
import './Home.css';
import styled from 'styled-components';


function Home() {
  return (
    <div className="cubic">
      <H3>Thank you for visiting my Portfolio page</H3>
      <Card />
      <Contact />
    </div>
  );
}

const H3 = styled.div`
font-family: "Arizonia", cursive;
width: 100%;
font-size: 30px;
text-align: center;
padding: 40px;
`

export default Home;
