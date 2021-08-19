import React from 'react';
import styled from 'styled-components';

const CardWrapper = styled.div`
    width: 290px;
    height: 249px;
    border: 1px solid black;
    
`;

const CardImage = styled.div`
    width: 100%;
    height: 177px;
    background-color: ${(props) => props.theme.colors.secondary.main.color};
`;

const CardTitle = styled.h2`
    color: blue;
    text-align: center;
`;

const Card = () => (
  <CardWrapper>
    <CardImage />
    <CardTitle>Nome projeto</CardTitle>
  </CardWrapper>
);

export default Card;
