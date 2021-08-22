import React from 'react';
import Capa from '../src/components/Capa';
import Cabecalho from '../src/components/Cabecalho';
import WrapperProjetos from '../src/components/WrapperProjetos';
import SectionTitle from '../src/components/SectionTitle';
import Card from '../src/components/Card';
import Footer from '../src/components/Footer';

export default function Home() {
  return (
    <>
      <Capa>
        <Cabecalho />
      </Capa>
      <WrapperProjetos>
        <SectionTitle>
          Projetos
        </SectionTitle>
        <Card />
      </WrapperProjetos>
      <Footer />
    </>
  );
}
