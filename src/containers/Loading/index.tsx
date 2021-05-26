import React from 'react';

import { CircularProgress } from '@material-ui/core';
import styled from 'styled-components';

const LoadingWrapper = styled.section`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Loading = () => {
  return (
    <LoadingWrapper>
      <CircularProgress />
    </LoadingWrapper>
  );
};

export default Loading;