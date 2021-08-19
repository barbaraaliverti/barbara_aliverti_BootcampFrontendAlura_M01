import React from 'react';
import styled from 'styled-components';

const menuLinks = [
  {
    text: 'about',
    url: '/about',
  },
  {
    text: 'projects',
    url: '/projects',
  },
  {
    text: 'contact',
    url: '/contact',
  },
];

const CabecalhoWrapper = styled.nav`
  align-items: center;
  color: black;
  display: flex;
  flex-direction: row;
  font-family: 'Roboto Condensed', sans-serif;
  font-size: 18px;
  font-weight: 700;
  height: 40px;
  justify-content: space-between;
  list-style: none;
  padding: 0 16px;
  text-decoration: none;
  top: 1025px;
`;

// Cabecalho.LeftSide = styled.div`
//   a {
//     background-color: black;
//     color: whitesmoke;
//     display: block;
//     padding: 10px;
//     height: 100%;
//     text-align: center;
//     text-decoration: none;
//     transition: 200ms ease-in-out;
//     &:hover,
//     &:focus {
//         font-weight: 500;
//         cursor: pointer;
//     }    
//   }

//   svg {
//     width: 100px;
//     height: 100px;
//   }
// `;

const Navbar = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 100%;

  a {
    color: black;
    display: block;
    text-align: center;
    text-decoration: none;
    transition: 200ms ease-in-out;
    &:hover,
    &:focus {
        font-weight: 500;
        cursor: pointer;
    }
  }
`;

const Cabecalho = () => (
  <CabecalhoWrapper>

    <Navbar>
      {menuLinks.map((link) => (
        <li>
          <a href={link.url}>{link.text}</a>
        </li>
      ))}
    </Navbar>

  </CabecalhoWrapper>
);

export default Cabecalho;
