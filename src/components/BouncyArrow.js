import React from 'react';
import styled, { keyframes } from 'styled-components';
import PropTypes from 'prop-types';
import { FaArrowDown } from 'react-icons/fa';
import { Box } from 'rebass';
import Fade from 'react-reveal/Fade';

const ScrollLink = styled.span`
  position: absolute;
  bottom: 1rem;
  left: 50%;
  transform: translateX(-50%);
  cursor: pointer;

  @media only screen and (max-width: 700px) {
    display: none;
  }
`;

const bounceAnimation = keyframes`  0%, 20%, 50%, 80%, 100% {
  transform: translateY(0);
}
40% {
  transform: translateY(-30px);
}
60% {
  transform: translateY(-15px);
}`;

const BouncyDiv = styled.div`
  -moz-animation: ${bounceAnimation} 2s infinite;
  -webkit-animation: ${bounceAnimation} 2s infinite;
  animation: 2s ${bounceAnimation} infinite;
`;

const ArrowIcon = ({ onClick }) => (
  <ScrollLink onClick={onClick}>
    <BouncyDiv>
      <Box mx={1} fontSize={6}>
        <Fade delay={2000}>
          <FaArrowDown color="#64DDBB" className="bounce" />
        </Fade>
      </Box>
    </BouncyDiv>
  </ScrollLink>
);

ArrowIcon.propTypes = {
  onClick: PropTypes.func,
};

export default ArrowIcon;
