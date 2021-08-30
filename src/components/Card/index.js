/* eslint-disable react/destructuring-assignment */
import React from 'react';
import styled, { css } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithubAlt } from '@fortawesome/free-brands-svg-icons';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';
import breakpointsMedia from '../../theme/helpers/breakpointsMedia';
// import Text from '../Text';

const CardWrapper = styled.div`
    width: 290px;
    height: 249px;
    border: 1px solid ${({ theme }) => theme.colors.primary.main.color};
    position: relative;
    margin: 20px 40px;    
`;

// https://www.w3schools.com/css/tryit.asp?filename=trycss_css_image_overlay_opacity
const CardImage = styled.div`
    width: 100%;
    height: 177px;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
`;

const CardTitle = styled.p`
    color: ${({ theme }) => theme.colors.primary.main.colorText};
    text-align: center;
`;

const Button = styled.button`
  display: inline-flex;
  width: 30px;
  height: 30px;
  margin: 10px 10px 10px 0;
  border: none;
  background-color: ${({ theme }) => theme.colors.secondary.light.color};
  cursor: pointer;
  &:hover,
  &:active {
    background-color: ${({ theme }) => theme.colors.secondary.main.color};
  }

  svg {
  }
`;

const ButtonWrapper = styled.div`
  position: absolute;
  top: 0;
  right: 0;
`;

const Card = (props) => (
  <CardWrapper key={props.title}>
    <CardImage>
      <img src={props.imageSrc} alt={`${props.title} screencap`} />
    </CardImage>
    <ButtonWrapper>
      <Button href={props.githubUrl}>
        <FontAwesomeIcon icon={faGithubAlt} />
      </Button>
      <Button href={props.externalUrl}>
        <FontAwesomeIcon icon={faExternalLinkAlt} size="20" />
      </Button>
    </ButtonWrapper>
    <CardTitle>{props.title}</CardTitle>
  </CardWrapper>

);

Card.propTypes = {
  title: PropTypes.string.isRequired,
  imageSrc: PropTypes.string.isRequired,
  githubUrl: PropTypes.string.isRequired,
  externalUrl: PropTypes.string.isRequired,
};

export default Card;
