import React from 'react';
import { Box, Flex } from 'rebass';
import ReactMarkdown from 'react-markdown';
import Fade from 'react-reveal/Fade';

// TODO: Correctly install webpack to use raw-loader for markdown files
// eslint-disable-next-line import/no-webpack-loader-syntax,  import/no-unresolved
import AboutContentPath from 'raw-loader!../content/about.md';
import Section from '../components/Section';
import Triangle from '../components/Triangle';
import markdownRenderer from '../components/MarkdownRenderer';

const Background = () => (
  <div>
    <Triangle
      color="backgroundDark"
      height={['20vh', '20vh']}
      width={['100vw', '100vw']}
      invertY
    />

    <Triangle
      color="primaryDark"
      height={['20vh', '40vh']}
      width={['75vw', '70vw']}
      invertX
    />

    <Triangle
      color="backgroundDark"
      height={['25vh', '20vh']}
      width={['100vw', '100vw']}
    />
  </div>
);

export default () => (
  <Section.Container id="about" Background={Background}>
    <Flex justifyContent="center" alignItems="center" flexWrap="wrap">
      <Section.Header name="About Us" icon="🐘" label="elephant" />
    </Flex>
    <Flex justifyContent="center" alignItems="center" flexWrap="wrap">
      <Box width={[1, 1, 4 / 6]} px={[1, 2, 4]}>
        <Fade bottom>
          <ReactMarkdown
            source={AboutContentPath}
            renderers={markdownRenderer}
          />
        </Fade>
      </Box>
    </Flex>
  </Section.Container>
);
