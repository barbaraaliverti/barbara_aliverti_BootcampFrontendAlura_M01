import React from 'react';
import Capa from '../src/components/Capa';
import Cabecalho from '../src/components/Cabecalho';
import WrapperProjetos from '../src/components/WrapperProjetos';
import SectionTitle from '../src/components/SectionTitle';

export default function Home() {
  return (
    <>
      <Capa>
        <Cabecalho />
      </Capa>
      <WrapperProjetos />
    </>
  );
}
