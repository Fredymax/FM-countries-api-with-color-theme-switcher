import React, { Fragment } from 'react';
import { ReactComponent as Loader } from 'assets/Loading.svg';
import { Container, Text } from 'components/styled';

const Loading = () => {
  return (
    <Fragment>
      <Container.Loader>
        <Loader width={90} height={90} />
        <Text.Bold>Loading</Text.Bold>
      </Container.Loader>
    </Fragment>
  );
};

export default Loading;
