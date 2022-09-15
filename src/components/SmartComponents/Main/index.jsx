import React, { Fragment } from 'react';
import { Container } from 'components/styled';

const Main = ({ children }) => {
  return (
    <Fragment>
      <Container.Main>
        <Container.Wrapper>{children}</Container.Wrapper>
      </Container.Main>
    </Fragment>
  );
};

export default Main;
