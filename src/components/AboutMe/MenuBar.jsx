import React from "react";
import styled from "styled-components";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import HomeIcon from "@mui/icons-material/Home";
import WorkIcon from "@mui/icons-material/Work";
import ComputerIcon from "@mui/icons-material/Computer";
import { Link } from "react-router-dom";

function MenuBar() {
  return (
    <Div>
    {/* Open & Close */}
      <Span>
        <MenuIcon className="menu_open"/>
        <CloseIcon className="menu_close"/>
      </Span>

    {/* Menu icons */}
      <ul>
        <li>
          <Link to="/">
            <HomeIcon />
            Home
          </Link>
        </li>
        <li>
          <Link to="">
            <WorkIcon />
            Works
          </Link>
        </li>
        <li>
          <Link to="">
            <ComputerIcon />
            Skills
          </Link>
        </li>
      </ul>
    </Div>
  );
}

const Div = styled.div`
  background-color: rgb(133, 110, 80);
`;

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
//   & i {
//     color: white;
//   }
//   & .menu-open,
//   & .menu-close {
//     position: absolute;
//     top: 50%;
//     left: 50%;
//     margin-top: -15px;
//     margin-left: -15px;
//     transition: all 0, 7s cubic-bezier(1, -0.07, 0.1, 1.12);
//   }
// }

export default MenuBar;
