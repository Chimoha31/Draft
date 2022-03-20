import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import HomeIcon from "@mui/icons-material/Home";
import WorkIcon from "@mui/icons-material/Work";
import ComputerIcon from "@mui/icons-material/Computer";

function MenuIcons() {
  return (
       <Ul>
        <List>
          <Link to="/" style={{textDecoration:"none", color: "#fff", fontSize:"1.5rem"}}>
            <HomeIcon style={{marginRight:"15px", fontSize: "2rem"}}/>
            Home
          </Link>
        </List>
        <List>
          <Link to="" style={{textDecoration:"none", color: "#fff", fontSize:"1.5rem"}}>
            <WorkIcon style={{marginRight:"15px", fontSize: "2rem"}}/>
            Works
          </Link>
        </List>
        <List>
          <Link to="" style={{textDecoration:"none", color: "#fff", fontSize:"1.5rem"}}>
            <ComputerIcon style={{marginRight:"15px", fontSize: "2rem"}}/>
            Skills
          </Link>
        </List>
      </Ul>
  )
}

const Ul = styled.ul`
  position: fixed;
  bottom: 0;
  left: 20px;
  margin: 0;
  padding: 0;
`;

const List = styled.li`
  list-style: none;
  height: 60px;
  margin-bottom: 40px;
  // transform: translateX(-300px);
  transition: all 0.7s cubic-bezier(1, -0.07, 0.1, 1.12);
  &:nth-child(2) {
    margin-left: 20px;
  }
  &:nth-child(3) {
    margin-left: 40px;
  }
`;

export default MenuIcons
