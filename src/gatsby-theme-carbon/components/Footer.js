import React from 'react';
import Footer from 'gatsby-theme-carbon/src/components/Footer';

const currentYear = new Date().getFullYear();

const Content = () => (
  <>
      <p>
          Have questions? open
          <br /> an issue on{' '}
          <a
              style={{ textDecoration: 'underline' }}
              href="https://github.ibm.com/ibmdemos-cloudpaks/ai4cyber-platform/issues/new">
              GitHub.
          </a>
      </p>
      <p>
          Built with{' '}
          <a href="https://github.com/carbon-design-system/gatsby-theme-carbon">
            Gatsby Theme Carbon
          </a>
          .
          <br />
          Copyright © {currentYear}
      </p>
  </>
);

const links = {
  firstCol: [
    { href: 'https://www.ibm.com/privacy/us/en/', linkText: 'Privacy' },
    { href: 'https://www.ibm.com/legal', linkText: 'Terms of Use' },
  ]
};

const CustomFooter = () => <Footer links={links} Content={Content} />;

export default CustomFooter;
