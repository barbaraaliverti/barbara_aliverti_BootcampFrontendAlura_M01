import React from 'react';
import styled from 'styled-components';
import Logo from '../../theme/Logo';

const MainTitle = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`;

const Capa = () => (
  <MainTitle>
    <Logo />
    Bárbara Aliverti
  </MainTitle>
);

export default Capa;
