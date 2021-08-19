import React from 'react';
import styled from 'styled-components';
import Logo from '../../theme/Logo';
import Cabecalho from '../Cabecalho';

const CapaWrapper = styled.div`
    height: 100vh;
    background-color: rgba(255, 255, 255, 0.7);
    z-index: -100;
`;

const MainTitle = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`;

const Capa = () => (
  <CapaWrapper>
    <Cabecalho />
    <MainTitle>
        <Logo></Logo>
      Bárbara Aliverti
    </MainTitle>
  </CapaWrapper>
);

export default Capa;
