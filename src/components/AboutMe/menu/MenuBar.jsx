import React from "react";
import MenuOpenClose from "./MenuOpenClose";
import styled from "styled-components";
import MenuIcons from "./MenuIcons";

function MenuBar() {
  return (
    <Div>
      {/* Open & Close */}
      <MenuOpenClose />
      {/* Menu icons */}
      <MenuIcons />
    </Div>
  );
}

const Div = styled.div`
  background-color: rgb(133, 110, 80);
`;

export default MenuBar;
