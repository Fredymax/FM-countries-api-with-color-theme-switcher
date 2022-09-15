import Main from 'components/SmartComponents/Main';
import Header from 'components/SmartComponents/Header';
import React, { Fragment } from 'react';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <Fragment>
      <Header />
      <Main>
        <Outlet />
      </Main>
    </Fragment>
  );
};

export default Layout;
