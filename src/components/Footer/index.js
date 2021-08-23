/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedinIn, faTwitter } from '@fortawesome/free-brands-svg-icons';
import Text from '../Text';

const FooterWrapper = styled.div`
    background-color: ${({ theme }) => theme.colors.primary.light.color};
    display: flex;
    align-items: center;
    justify-content: center;
    padding-right: 28px;
    padding-left: 28px;
    list-style: none;
    
    a {
        color: ${({ theme }) => theme.colors.primary.main.colorText};
        text-decoration: none;
        transition: .3s;
        &:hover,
        &:focus {
        opacity: .5;
        }
    }    
`;

const FooterIcons = styled.div`
    background-color: ${({ theme }) => theme.colors.secondary.main.color};
    width: 228px;
    height: 50px;
    display: flex;
    justify-content: space-evenly;

    svg {
        width: 20px;
        height: 100%;
    }

`;

const socialMediaLinks = [
  {
    icon: faGithub,
    url: 'https://github.com/barbaraaliverti',
  },
  {
    icon: faLinkedinIn,
    url: 'https://www.linkedin.com/in/barbaraaliverti/',
  },
  {
    icon: faTwitter,
    url: 'https://twitter.com/baloobali_',
  },
];

const Footer = (props) => (
  <FooterWrapper {...props}>
    <FooterIcons>

      { socialMediaLinks.map((item) => (
        <li key={item.url}>
          <Text tag="a" variant="smallestException" href={item.url} target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={item.icon} size="xs" />
          </Text>
        </li>
      ))}

    </FooterIcons>
  </FooterWrapper>
);

export default Footer;
