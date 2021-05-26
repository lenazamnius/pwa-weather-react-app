import React, { lazy, Suspense } from 'react';
import { Grid } from '@material-ui/core';
import styled from 'styled-components';
import Loading from 'containers/Loading';

const Location = lazy(() => import('components/Location'));
const SearchInput = lazy(() => import('components/SearchInput'));
const ForecastCard = lazy(() => import('components/ForecastCard'));

const AppWrapper = styled.div`
  min-height: 100%;
  width: 100%;
  background: linear-gradient(rgba(0, 0, 0, .1), rgba(0, 0, 0, 0.65)), url(${`${process.env.PUBLIC_URL}/images/federico-respini-unsplash-1920.jpg`});
  background-size: cover;
`;

const ForecastPage: React.FC = () => {
  return (
    <Suspense fallback={<Loading />}>
      <AppWrapper>
        <Grid
          container
          direction='column'
          justify='center'
          alignItems='center'
        >
          <Grid item>
            <Location />
          </Grid>
          <Grid item>
            <SearchInput />
          </Grid>
          <Grid item>
            <ForecastCard />
          </Grid>
        </Grid>
      </AppWrapper>
    </Suspense>
  );
};

export default ForecastPage;
