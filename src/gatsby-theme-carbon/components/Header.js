import React from 'react';
import Header from 'gatsby-theme-carbon/src/components/Header';

const CustomHeader = props => (
  <Header {...props}>
    Cookbook -&nbsp;<span>Cloud Pak for Platform</span>
  </Header>
);

export default CustomHeader;
