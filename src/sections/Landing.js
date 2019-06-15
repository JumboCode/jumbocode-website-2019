import React, { Fragment } from 'react';
import { Heading, Flex, Text } from 'rebass';
import TextLoop from 'react-text-loop';
import { SectionLink } from 'react-scroll-section';
import Fade from 'react-reveal/Fade';
import Section from '../components/Section';
import BouncyArrow from '../components/BouncyArrow';
import Triangle from '../components/Triangle';

const Background = () => (
  <div>
    <Triangle
      color="backgroundDark"
      height={['35vh', '80vh']}
      width={['95vw', '60vw']}
    />

    <Triangle
      color="secondary"
      height={['38vh', '80vh']}
      width={['50vw', '35vw']}
    />

    <Triangle
      color="primaryDark"
      height={['25vh', '35vh']}
      width={['75vw', '60vw']}
      invertX
    />

    <Triangle
      color="backgroundDark"
      height={['20vh', '20vh']}
      width={['100vw', '100vw']}
      invertX
      invertY
    />
  </div>
);

const LandingPage = () => {
  const roles = [
    'Empowering Students',
    'Supporting Non-Profits',
    'Volunteering Localy',
    'Impacting Globaly',
    'Building Custom Technology',
  ];
  return (
    <Section.Container id="home" Background={Background}>
      <Fragment>
        <Heading as="h1" fontSize={['10vw']} mb={[3, 4, 5]} alignSelf="center">
          <Flex>
            <Fade>
              <Text fontWeight="900" color="secondary">
                Jumbo
              </Text>
            </Fade>
            <Fade delay={500}>
              <Text color="primary">Code</Text>
            </Fade>
          </Flex>
        </Heading>

        <Heading
          as="h2"
          color="primary"
          fontSize={[4, 5, 6]}
          mb={[3, 5]}
          textAlign="center"
        >
          <Fade delay={1000}>
            <TextLoop mask noWrap={false}>
              {roles.map(text => (
                <Text width={[300, 800]} key={text}>
                  {text}
                </Text>
              ))}
            </TextLoop>
          </Fade>
        </Heading>
        <SectionLink section="about">
          {({ onClick }) => <BouncyArrow onClick={onClick} />}
        </SectionLink>
      </Fragment>
    </Section.Container>
  );
};

export default LandingPage;
