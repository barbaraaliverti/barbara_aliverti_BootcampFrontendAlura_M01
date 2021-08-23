import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithubAlt } from '@fortawesome/free-brands-svg-icons';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import Text from '../Text';

const projects = [
  {
    title: 'Timestamp Microsservice',
    imageSrc: 'https://i.imgur.com/Yk2fccb.png',
    externalUrl: 'https://replit.com/@barbaraaliverti/boilerplate-project-timestamp-1#README.md',
    githubUrl: 'https://replit.com/@barbaraaliverti/boilerplate-project-timestamp-1#README.md',
    tags: ['Node.js'],
  },
  {
    title: 'Pomodoro Clock',
    imageSrc: 'https://i.imgur.com/zJaVWKs.png',
    externalUrl: 'https://pomodoro-clock-mocha.vercel.app/',
    githubUrl: 'https://pomodoro-clock-mocha.vercel.app/',
    tags: ['React'],
  },
  {
    title: 'Calculator',
    imageSrc: 'https://i.imgur.com/lYK3xhC.png',
    externalUrl: 'https://calculator-rose.vercel.app/',
    githubUrl: 'https://calculator-rose.vercel.app/',
    tags: ['React'],
  },
  {
    title: 'Drum Machine',
    imageSrc: 'https://i.imgur.com/RHqHGDn.png',
    externalUrl: 'https://calculator-rose.vercel.app/',
    githubUrl: 'https://calculator-rose.vercel.app/',
    tags: ['React'],
  },
  {
    title: 'Style Stage | Hacktoberfest 2020',
    imageSrc: 'https://i.imgur.com/ox4TNbL.png',
    externalUrl: 'https://stylestage.dev/styles/neon-beetles/',
    githubUrl: 'https://stylestage.dev/styles/neon-beetles/',
    tags: ['CSS'],
  },
  {
    title: 'Markdown Previewer',
    imageSrc: 'https://i.imgur.com/z4jYGR9.png',
    externalUrl: 'https://codepen.io/baloobali/full/rNebvEM',
    githubUrl: 'https://codepen.io/baloobali/full/rNebvEM',
    tags: ['React'],
  },
  {
    title: 'Random Quote Machine',
    imageSrc: 'https://i.imgur.com/72uOMYO.png',
    externalUrl: 'https://codepen.io/baloobali/full/YzqpKOy',
    githubUrl: 'https://codepen.io/baloobali/full/YzqpKOy',
    tags: ['jQuery'],
  },
  {
    title: 'Technical Documentation Page',
    imageSrc: 'https://i.imgur.com/g8PyWmI.png',
    externalUrl: 'https://codepen.io/baloobali/full/GRpEgGX',
    githubUrl: 'https://codepen.io/baloobali/full/GRpEgGX',
    tags: ['HTML', 'CSS'],
  },
  {
    title: 'Landing Page',
    imageSrc: 'https://i.imgur.com/DB6mFhy.png',
    externalUrl: 'https://codepen.io/baloobali/full/jObPjpp',
    githubUrl: 'https://codepen.io/baloobali/full/jObPjpp',
    tags: ['HTML', 'CSS'],
  },
  {
    title: 'Survey Form',
    imageSrc: 'https://i.imgur.com/IMbZtuf.png',
    externalUrl: 'https://codepen.io/baloobali/full/WNvVQeq',
    githubUrl: 'https://codepen.io/baloobali/full/WNvVQeq',
    tags: ['HTML', 'CSS'],
  },
  {
    title: 'Tribute Page',
    imageSrc: 'https://i.imgur.com/yf10bgD.png',
    externalUrl: 'https://codepen.io/baloobali/full/jOPLwPg',
    githubUrl: 'https://codepen.io/baloobali/full/jOPLwPg',
    tags: ['HTML', 'CSS'],
  },
];

const CardWrapper = styled.div`
    width: 290px;
    height: 249px;
    border: 1px solid black;
    position: relative;
    margin: 20px 40px;
    
`;

const CardImage = styled.div`
    width: 100%;
    height: 177px;

    img {
      width: 100%;
      height: 100%;
    }
`;

const CardTitle = styled.p`
    color: ${({ theme }) => theme.colors.primary.main.colorText};
    text-align: center;
`;

const Button = styled.button`
  width: 35px;
  height: 35px;
  margin: 3px 3px 3px 0;
  border: none;
  background-color: ${({ theme }) => theme.colors.secondary.light.color};
  cursor: pointer;

  &:hover,
  &:active {
    background-color: ${({ theme }) => theme.colors.secondary.main.color};
  }

  svg {
    width: 20px;
  }
`;

const ButtonWrapper = styled.div`
  position: absolute;
  top: 0;
  right: 0;
`;

const Card = () => (
  <>
    {projects.map((project) => (
      <CardWrapper>
        <CardImage>
          <img src={project.imageSrc} alt={`${project.title} screencap`}/>
        </CardImage>
        <ButtonWrapper>
          <Button href={project.externalUrl}>
            <FontAwesomeIcon icon={faExternalLinkAlt} />
          </Button>
          <Button href={project.githubUrl}>
            <FontAwesomeIcon icon={faGithubAlt} />
          </Button>
        </ButtonWrapper>
        <CardTitle>{project.title}</CardTitle>
      </CardWrapper>
    ))}
  </>
);

export default Card;
