import React, { lazy, Suspense } from 'react';
import styled from 'styled-components';
import { Container } from '@material-ui/core';
import Loading from 'components/Loading';

const Location = lazy(() => import('components/Location'));
const SearchInput = lazy(() => import('components/SearchInput'));
const ForecastCard = lazy(() => import('components/ForecastCard'));

const AppWrapper = styled.div`
  width: 100%;
  min-height: 100%;
  display: flex;
  align-items: center;
  padding: 40px 10px;
  background: linear-gradient(rgba(0, 0, 0, .1), rgba(0, 0, 0, 0.65)), url(${`${process.env.PUBLIC_URL}/images/federico-respini-unsplash-1920.jpg`});
  background-size: cover;

  @media (max-width: 576px) {
    padding: 30px 0;
  }
`;

const ForecastPage: React.FC = () => {
  return (
    <Suspense fallback={<Loading />}>
      <AppWrapper>
        <Container maxWidth='xs'>
          <Location />
          <SearchInput />
          <ForecastCard />
        </Container>
      </AppWrapper>
    </Suspense>
  );
};

export default ForecastPage;
