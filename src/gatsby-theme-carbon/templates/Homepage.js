import React from 'react';
import { HomepageBanner, HomepageCallout } from 'gatsby-theme-carbon';
import HomepageTemplate from 'gatsby-theme-carbon/src/templates/Homepage';
import { calloutLink } from './Homepage.module.scss';

import Carbon from '../../images/home-banner.jpg';

const FirstLeftText = () => <p>Artificial Intelligence for Cybersecurity</p>;

const FirstRightText = () => (
  <p>
    The regularity of devastating cyber-attacks has made cybersecurity a grand societal challenge. Innovative solutions to tackle the ever-evolving threats in cyberspace are essential to maintaining robust cybersecurity postures.
  </p>
);

const SecondLeftText = () => <p>This site was designed to be a single point of access for all content created as part of final project of AI4Cyber class</p>;

const SecondRightText = () => (
  <p>
    Disclaimer: All content on this site is for educational purposes only.
  </p>
);

const BannerText = () => <h1>AI4Cyber Platform - Healthcare Systems</h1>;

const customProps = {
  Banner: <HomepageBanner renderText={BannerText} image={Carbon} />,
  FirstCallout: (
    <HomepageCallout
      backgroundColor="#030303"
      color="white"
      leftText={FirstLeftText}
      rightText={FirstRightText}
    />
  ),
  SecondCallout: (
    <HomepageCallout
      leftText={SecondLeftText}
      rightText={SecondRightText}
      color="white"
      backgroundColor="#061f80"
    />
  ),
};

// spreading the original props gives us props.children (mdx content)
function ShadowedHomepage(props) {
  return <HomepageTemplate {...props} {...customProps} />;
}

export default ShadowedHomepage;
