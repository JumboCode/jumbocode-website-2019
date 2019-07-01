// Use this file to keep the source of truth on which projects exist.

import WCFBLogo from '../../images/WCFB-logo.png';
import E4PLogo from '../../images/E4P-logo.png';
import HSHSLogo from '../../images/HSHS-logo.png';
import CORESLogo from '../../images/CORES-logo.png';
import BISPOTLogo from '../../images/BISPOT-logo.png';

// TODO: type this somehow. Use a generator, install flow, do something to make this type safe(r).
const ProjectList = [
  {
    name: 'WCFB',
    description:
      'Volunteer sign-in application for the Wooster County Food Bank',
    repositoryUrl: 'https://github.com/JumboCode/WCFB',
    projectUrl: 'http://wcfb-signin.herokuapp.com/',
    type: 'Desktop Application',
    years: [2019],
    logo: {
      image: {
        src: WCFBLogo,
      },
    },
  },
  {
    name: 'Ears 4 Peers',
    description:
      'Anonymous & secure chat service for student volunteer hotline',
    repositoryUrl: 'https://github.com/JumboCode/E4P',
    projectUrl: 'https://ears4peers.herokuapp.com/',
    type: 'Website',
    years: [2019],
    logo: {
      image: {
        src: E4PLogo,
      },
    },
  },
  {
    name: 'Harvard Square Homeless Shelter',
    description:
      'Mobile application to facilitate inventory and resource management for street teams at homeless shelter',
    repositoryUrl: 'https://github.com/JumboCode/HSHS-2018-2019',
    type: 'Mobile Application',
    years: [2018, 2019],
    logo: {
      image: {
        src: HSHSLogo,
      },
    },
  },
  {
    name: 'Teach in Cores',
    description:
      'Multilingual website for English classes through the Comittee on Refugees from El Salvador in Somerville',
    repositoryUrl: 'https://github.com/JumboCode/CORES',
    projectUrl: 'http://teachincores.com/',
    type: 'Website',
    years: [2019],
    logo: {
      image: {
        src: CORESLogo,
      },
    },
  },
  {
    name: 'Bi-Spot',
    description:
      'Web application that displays a comprehensive map view of Bi+ organizations and events based on geographical locations, along with contact/sign-up guides',
    repositoryUrl: 'https://github.com/JumboCode/BRC',
    projectUrl: 'https://jumbocode-bi-spot.herokuapp.com',
    type: 'Website',
    years: [2019],
    logo: {
      image: {
        src: BISPOTLogo,
      },
    },
  },
];

export default ProjectList;
