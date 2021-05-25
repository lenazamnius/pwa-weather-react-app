import React, { useContext, useEffect } from 'react';
import { AppContext } from 'store/reducer';
import { Grid, Paper, Typography } from '@material-ui/core';
import { fetchWeather } from 'api/fetchWeather';
import { actions } from 'store/actions';
import { GetWeatherResponse } from 'api/typeDefs';
import { AppContextType } from 'store/typeDefs';
import { transformResponse } from 'utils/helpers';


const ForecastCard: React.FC = () => {
  const { state: { weather, location: { city }, sun }, dispatch } = useContext(AppContext) as AppContextType;

  useEffect(() => {
    fetchWeather(city)
      .then((res: GetWeatherResponse) => {
        dispatch(actions.setWeather(transformResponse(res)));
      })
      .catch((er) => {
        console.error(er, 'from catch');
      });
  }, [city, dispatch]);

  if (!weather.temp) return <Paper>No Data!!!</Paper>;

  return (
    <Paper style={{ minHeight: '400px' }}>
      <Typography variant='body1'>
        {weather.weatherDesc}
      </Typography>
      <img src={`http://openweathermap.org/img/wn/${weather.icon}@2x.png`} alt={`${weather.weatherDesc}`} />
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
      <Typography variant='body1'>
        wind: {weather.windSpeed} m/s{' '}
        humidity: {weather.humidity} %
      </Typography>
      <Typography variant='body1'>
        sunrise: {sun.rise}{' '}
        sunset: {sun.set}
      </Typography>
    </Paper>
  );
};

export default ForecastCard;

