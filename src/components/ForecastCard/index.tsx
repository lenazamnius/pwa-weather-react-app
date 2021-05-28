import React, { useContext, useEffect } from 'react';
import styled from 'styled-components';
import { Paper } from '@material-ui/core';

import { actions } from 'store/actions';
import { AppContext, AppContextType } from 'context';
import { GetWeatherResponse } from 'api/typeDefs';
import { fetchWeather } from 'api/fetchWeather';
import { transformResponse } from 'utils/helpers';

import MySkeleton from 'components/MySkeleton';
import Temperature from './components/Tempriture';
import WeatherParameters from './components/WeatherParameters';
import WeatherCondition from './components/WeatherCondition';

const StyledPaper = styled(Paper)`
  min-width: 400px;
  min-height: 400px;
  padding: 25px 45px;

  @media (max-width: 576px) {
    min-width: min-content;
    width: 100%;
    padding: 15px 20px;
  }
`;

const ForecastCard: React.FC = () => {
  const { state: { fetching, requestCity, weather: { temp } }, dispatch } = useContext(AppContext) as AppContextType;

  useEffect(() => {
    fetchWeather(requestCity)
      .then((res: GetWeatherResponse) => {
        dispatch(actions.setWeather(transformResponse(res)));
        dispatch(actions.isFetching(false));
      })
      .catch((er) => {
        throw Error(er);
      });
  }, [requestCity, dispatch]);

  if (fetching) return <MySkeleton width={400} height={400} />;
  if (!temp) return <StyledPaper>No Data</StyledPaper>;

  return (
    <StyledPaper>
      <WeatherCondition />
      <Temperature />
      <WeatherParameters />
    </StyledPaper>
  );
};

export default ForecastCard;

