import React, { useContext, useEffect } from 'react';

import { Box, Grid, Paper, Typography } from '@material-ui/core';
import { fetchWeather } from 'api/fetchWeather';
import { AppContext, AppContextType } from 'context';
import { actions } from 'store/actions';
import { GetWeatherResponse } from 'api/typeDefs';
import { transformResponse } from 'utils/helpers';
import styled from 'styled-components';

const StyledImgBox = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 80px;
  height: 80px;
  margin: 10px 0 15px;
  border-radius: 15px;
  background: rgba(0, 0, 0, .05);
`;

const StyledBox = styled(Box)`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

const StyledTempBox = styled(Box)`
  margin: 10px 0 30px;
  text-align: center;
`;

const ForecastCard: React.FC = () => {
  const { state: { weather, location: { city }, sun }, dispatch } = useContext(AppContext) as AppContextType;

  useEffect(() => {
    fetchWeather(city)
      .then((res: GetWeatherResponse) => {
        dispatch(actions.setWeather(transformResponse(res)));
      })
      .catch((er) => {
        throw Error(er);
      });
  }, [city, dispatch]);

  if (!weather.temp) return (
    <Paper>
      <Typography variant='h4'>
        No Data!!!
      </Typography>
    </Paper>
  );

  return (
    <Paper>
      <Typography variant='body2'>
        {weather.weatherDesc}
      </Typography>
      <StyledImgBox>
        <img src={`http://openweathermap.org/img/wn/${weather.icon}@2x.png`} alt={`${weather.weatherDesc}`} />
      </StyledImgBox>
      <StyledTempBox>
        <Grid container alignItems='flex-start' justify='center'>
          <Grid item>
            <Typography variant='h1'>
              {weather.temp}
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant='h2'>
              &#8451;
            </Typography>
          </Grid>
        </Grid>
        <Typography variant='body1'>
          feels like: {weather.feelsLike} &#8451;
        </Typography>
      </StyledTempBox>
      <StyledBox>
        <Typography variant='body1'>
          wind: {weather.windSpeed} m/s
        </Typography>
        <Typography variant='body1'>
          sunrise: {sun.rise}
        </Typography>
      </StyledBox>
      <StyledBox>
        <Typography variant='body1'>
          humidity: {weather.humidity} %
        </Typography>
        <Typography variant='body1'>
          sunset: {sun.set}
        </Typography>
      </StyledBox>
    </Paper>
  );
};

export default ForecastCard;

