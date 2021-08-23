import React from 'react';
import styled from 'styled-components';
import Text from '../Text';

const menuLinks = [
  {
    text: 'about',
    url: 'https://www.google.com',
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
  height: 40px;
  justify-content: space-evenly;
  list-style: none;
  padding: 0 16px;
  text-decoration: none;
  top: 1025px;
  width: 100%;

  a {
    color: black;
    display: block;
    font-weight: bold;
    text-align: center;
    text-decoration: none;
    cursor: pointer;

    &:after {
      content: "";
      width: 100%;
      height: 5px;
      background-color: ${({ theme }) => theme.colors.secondary.light.color};
      display: block;
    }

    &:hover::after,
    &:focus::after {
      background-color: ${({ theme }) => theme.colors.secondary.main.color};
      transition: 200ms ease-in-out;
    }
  }
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

// const Navbar = styled.div`
//   display: flex;
//   justify-content: space-evenly;
//   width: 100%;

// `;

const Cabecalho = () => (
  <CabecalhoWrapper>

    {menuLinks.map((link) => (
      <li key={link.url}>
        <Text tag="a" variant="paragraph1" href={link.url} rel="noreferrer">
          {link.text}
        </Text>
      </li>
    ))}

  </CabecalhoWrapper>
);

export default Cabecalho;
