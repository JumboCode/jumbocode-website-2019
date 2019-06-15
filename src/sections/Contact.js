import React from 'react';
import { Box, Text, Flex, Heading } from 'rebass';
import Fade from 'react-reveal/Fade';
import Section from '../components/Section';
import Triangle from '../components/Triangle';
import { RepoLink, MailLink, InstagramLink } from '../components/SocialLink';

const Background = () => (
  <div>
    <Triangle
      color="backgroundDark"
      height={['15vh', '10vh']}
      width={['100vw', '100vw']}
      invertX
    />

    <Triangle
      color="secondary"
      height={['50vh', '40vh']}
      width={['70vw', '40vw']}
      invertY
    />

    <Triangle
      color="primaryDark"
      height={['40vh', '15vh']}
      width={['100vw', '100vw']}
      invertX
      invertY
    />
  </div>
);

const Contact = () => (
  <Section.Container id="contact" Background={Background}>
    <Flex justifyContent="center" alignItems="center" flexWrap="wrap">
      <Section.Header name="Contact" icon="📬" label="contact" />
    </Flex>
    <Flex justifyContent="center" alignItems="center" flexWrap="wrap">
      <Box width={[1, 1, 4 / 6]} px={[1, 2, 4]}>
        <Fade bottom>
          <Heading
            as="h3"
            color="primary"
            fontSize={[3, 4, 5]}
            mb={[3, 5]}
            textAlign="center"
          >
            Want to learn more about how JumboCode can help your organization?
          </Heading>
          <Text fontSize={[2, 3, 4]} textAlign="center">
            Shoot us an email at TuftsJumboCode@gmail.com
          </Text>
        </Fade>
      </Box>
    </Flex>
    <Flex
      alignItems="center"
      justifyContent="center"
      flexWrap="wrap"
      style={{ marginTop: 20 }}
    >
      <Box mx={1} fontSize={7}>
        <RepoLink name="Github" url="https://github.com/JumboCode" />
      </Box>
      <Box mx={1} fontSize={7}>
        <MailLink name="Email Us" url="mailto:tuftsjumbocode@gmail.com" />
      </Box>
      <Box mx={1} fontSize={7}>
        <InstagramLink
          name="Instagram"
          url="https://instagram.com/jumbocode?igshid=109ivsuzgxdu2"
        />
      </Box>
    </Flex>
  </Section.Container>
);

export default Contact;
