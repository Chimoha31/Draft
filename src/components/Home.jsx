import React from "react";
import Card from "./Card";
import Contact from "./Contact";

import './Home.css';
import styled from 'styled-components';
import Footer from "./Footer";


function Home() {
  return (
    <Cubic>
      <H3>Thank you for visiting my Portfolio page</H3>
      <Card />
      <Contact />
      <Footer />
    </Cubic>
  );
}

const Cubic = styled.div`
width: 100%;
height: 100%;
`

const H3 = styled.div`
font-family: "Arizonia", cursive;
width: 100%;
font-size: 25px;
text-align: center;
padding: 30px 0;

@media (min-width: 767px) {
  font-size: 40px;
  
}
@media (min-width: 1025px) {
  font-size: 50px;
}
`

export default Home;
