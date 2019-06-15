import React from 'react';
import { Heading, Box } from 'rebass';
import { Link } from 'gatsby';
import Layout from '../components/Layout';
import Section from '../components/Section';
import Triangle from '../components/Triangle';

const Background = () => (
  <div>
    <Triangle
      color="backgroundDark"
      height={['35vh', '80vh']}
      width={['95vw', '60vw']}
    />

    <Triangle
      color="primary"
      height={['25vh', '35vh']}
      width={['75vw', '60vw']}
      invertX
    />

    <Triangle
      color="secondaryLight"
      height={['10vh', '20vh']}
      width={['50vw', '50vw']}
      invertX
      invertY
    />
  </div>
);

const NotFoundPage = () => (
  <Layout>
    <Section.Container id="404" Background={Background}>
      <Box width={[320, 400, 600]} m="auto">
        <Heading color="primaryDark" fontSize={['4rem', '5rem', '6rem']}>
          404
        </Heading>
        <Heading color="secondary" fontSize={['1rem', '2rem', '3rem']}>
          {"Oops! This page doesn't exist..."}
        </Heading>

        <Heading color="primary" fontSize={['1rem', '2rem', '3rem']}>
          <Link to="/">Go Back</Link>
        </Heading>
      </Box>
    </Section.Container>
  </Layout>
);

export default NotFoundPage;
