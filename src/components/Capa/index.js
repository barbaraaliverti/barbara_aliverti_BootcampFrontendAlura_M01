import React from 'react';
import styled from 'styled-components';
import Cabecalho from '../Cabecalho';

const CapaWrapper = styled.div`
    background-image: url("/images/20191130_152433.jpg");
    background-size: cover;
    background-position: center;
    height: 100vh;
    background-color: rgba(255, 255, 255, 0.7);
    z-index: -100;
`;

const MainTitle = styled.div`
    height: 100%;
    width: 100%;
    background: rgba(255,255,255,0.5);
`;

const Capa = () => (
  <CapaWrapper>
    <MainTitle>
      <Cabecalho />
    </MainTitle>
  </CapaWrapper>
);

export default Capa;
