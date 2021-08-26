import React from 'react';
import styled from 'styled-components';
import Logo from '../../theme/Logo';
import Text from '../Text';

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
    <Text
      as="h1"
      variant="title"
      color={{
        xs: 'red',
        md: 'blue',
      }}
    >
      Bárbara Aliverti
    </Text>
  </MainTitle>
);

export default Capa;
