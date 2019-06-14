import React from 'react';
import { Link } from 'rebass';
import { Tooltip } from 'react-tippy';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { FaGithub } from 'react-icons/fa';
import { MdOpenInBrowser } from 'react-icons/md';

const IconLink = styled(Link)`
  transition: color 0.5s;
  color: ${props => props.theme.colors.primary};

  &:hover {
    color: ${props => props.theme.colors.primaryLight};
  }
`;

const SocialLink = icon => ({ name, url }) => (
  <Tooltip title={name} position="bottom" trigger="mouseenter">
    <IconLink href={url} target="_blank">
      {icon}
    </IconLink>
  </Tooltip>
);

const SocialLinkPropTypes = {
  fontAwesomeIcon: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};

const WebsiteLink = SocialLink(<MdOpenInBrowser />);
WebsiteLink.propTypes = SocialLinkPropTypes;

const RepoLink = SocialLink(<FaGithub />);
RepoLink.propTypes = SocialLinkPropTypes;

export { WebsiteLink, RepoLink };
