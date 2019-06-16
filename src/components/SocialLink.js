import React from 'react';
import { Link } from 'rebass';
import { Tooltip } from 'react-tippy';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { FaGithub, FaEnvelope, FaInstagram } from 'react-icons/fa';
import { MdOpenInBrowser } from 'react-icons/md';

const IconLink = styled(Link)`
  transition: color 0.5s;
  color: ${props => props.theme.colors.primary};

  &:hover {
    color: ${props => props.theme.colors.primaryLight};
  }
`;

const SocialLink = icon => {
  const Wrapped = ({ name, url }) => (
    <Tooltip title={name} position="bottom" trigger="mouseenter">
      <IconLink href={url} target="_blank">
        {icon}
      </IconLink>
    </Tooltip>
  );
  Wrapped.propTypes = {
    name: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
  };
  return Wrapped;
};

SocialLink.propTypes = {
  icon: PropTypes.element,
};

const WebsiteLink = SocialLink(<MdOpenInBrowser />);
const RepoLink = SocialLink(<FaGithub />);
const MailLink = SocialLink(<FaEnvelope />);
const InstagramLink = SocialLink(<FaInstagram />);

export { WebsiteLink, RepoLink, MailLink, InstagramLink };
