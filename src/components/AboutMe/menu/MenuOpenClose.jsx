import React from "react";
import "./MenuOpenClose.css";
import styled from "styled-components";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

function MenuOpenClose() {
  return (
    <Span className="menu_toggle">
      <MenuIcon className="menu_open" />
      <CloseIcon className="menu_close" />
    </Span>
  );
}

const Span = styled.span`
  z-index: 100;
  position: fixed;
  top: 0;
  left: 0;
  display: block;
  width: 100px;
  height: 80px;
  cursor: pointer;
  background-color: pink;
  border-bottom-right-radius: 100%;
`;

export default MenuOpenClose;
