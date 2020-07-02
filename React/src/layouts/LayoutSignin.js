import React from 'react';
import Header from '../components/layout/Header';

const LayoutDefault = ({ children }) => (
  <React.Fragment>
    <Header navPosition="right" hideNav />
    <main className="site-content has-bg-color invert-color">
      {children}
    </main>
  </React.Fragment>
);

export default LayoutDefault;  