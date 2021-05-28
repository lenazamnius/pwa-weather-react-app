import React, { useContext } from 'react';
import { Box, Typography } from '@material-ui/core';
import { AppContext, AppContextType } from 'context';
import styled from 'styled-components';

const StyledBox = styled(Box)`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

const WeatherParameters = () => {
  const { state: { weather, sun } } = useContext(AppContext) as AppContextType;

  return (
    <>
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
    </>
  );
};
export default WeatherParameters;

