import React from 'react';
import { Box, Image, Flex } from 'rebass';
import { StaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';
import ReactMarkdown from 'react-markdown';
import Fade from 'react-reveal/Fade';
import Section from '../components/Section';
import Triangle from '../components/Triangle';
import markdownRenderer from '../components/MarkdownRenderer';

const Background = () => (
  <div>
    <Triangle
      color="secondaryLight"
      height={['50vh', '20vh']}
      width={['50vw', '50vw']}
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

const ProfilePicture = styled(Image)`
  border-radius: 50%;
  transition: all 0.25s ease-out;

  &:hover {
    border-radius: 20%;
  }
`;

const About = () => (
  <Section.Container id="about" Background={Background}>
    <Section.Header name="About Us" icon="🐘" label="elephant" />
    {/* <StaticQuery
      query={graphql`
        query AboutMeQuery {
          contentfulAbout {
            aboutMe {
              childMarkdownRemark {
                rawMarkdownBody
              }
            }
            profile {
              title
              image: resize(width: 450, quality: 100) {
                src
              }
            }
          }
        }
      `}
      render={data => {
        const { aboutMe, profile } = data.contentfulAbout;
        return (
        */}
    <Flex justifyContent="center" alignItems="center" flexWrap="wrap">
      <Box width={[1, 1, 4 / 6]} px={[1, 2, 4]}>
        <Fade bottom>
          <ReactMarkdown
            source={
              "Hello 👋 I'm Mate a gatsby starter which is focus on simplicity and extensibility. It's build with Gatsby(duh), [Rebass](https://jxnblk.com/rebass/) (styled-component system) and [Contentful](https://www.contentful.com/).\n\nThe starter will give you 4 sections (it's really easy to add more if you want 😃):\n* [Landing:](#home) Displays a nice greeting with your name, also your roles (what you  are) and all your social links.\n* [About:](#about) Show the about section where you can write about who you are, what you like to do, etc. Also you can add a photo next to it!\n* [Project:](#projects) Displays a card for all your project that you've made and also the posibility to link with github or and external link.\n* [Writting:](#writting) Take the information about your medium user and show up to 6 stories as cards with the link to Medium."
            }
            renderers={markdownRenderer}
          />
        </Fade>
      </Box>

      <Box width={[1, 1, 2 / 6]} style={{ maxWidth: '300px', margin: 'auto' }}>
        <Fade right>
          <ProfilePicture
            src="http://asiasociety.org/files/uploads/510images/anthonymonaco.jpg"
            alt="jumbo jumbo"
            mt={[4, 4, 0]}
            ml={[0, 0, 1]}
          />
        </Fade>
      </Box>
    </Flex>
    {/*
        );
      }}
    /> */}
  </Section.Container>
);

export default About;
