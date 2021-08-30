import React from 'react';
import Capa from '../src/components/Capa';
import Cabecalho from '../src/components/Cabecalho';
import WrapperProjetos from '../src/components/WrapperProjetos';
import SectionTitle from '../src/components/SectionTitle';
import Card from '../src/components/Card';
import Footer from '../src/components/Footer';
import CapaWrapper from '../src/components/Capa/CapaWrapper';
import Box from '../src/components/Box';
import projects from '../public/projects';

export default function Home() {
  return (
    <Box>
      <CapaWrapper>
        <Cabecalho />
        <Capa />
      </CapaWrapper>

      <Box>
        <SectionTitle>
          Projetos
        </SectionTitle>
        <WrapperProjetos>
          {projects && projects.map((project) => (
            <Card
              title={project.title}
              imageSrc={project.imageSrc}
              githubUrl={project.githubUrl}
              externalUrl={project.externalUrl}
            />
          ))}
        </WrapperProjetos>
      </Box>

      <Footer />
    </Box>
  );
}
