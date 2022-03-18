import React from "react";
import chiho from "../images/chiho.JPG";
import styled from "styled-components";

function Profile() {
  return (
    <div>
        <Image src={chiho} alt="chiho" />
    </div>
  );
}

const Image = styled.img`
  border-radius: 50%;
  width: 200px;
  height: 200px;
  box-shadow: 5px 5px 25px black;
`;

export default Profile;
