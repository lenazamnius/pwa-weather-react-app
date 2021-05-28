import React, { useContext } from 'react';
import { Typography } from '@material-ui/core';
import { AppContext, AppContextType } from 'context';
import styled from 'styled-components';

interface IProps {
  bg: boolean
}

const StyledImgBox = styled.div<IProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 80px;
  height: 80px;
  margin: 10px 0 15px;
  border-radius: 13px;
  background: ${props => props.bg ? 'rgba(0, 0, 0, .05)' : 'rgba(0, 0, 0, .1)'};
`;

const WeatherCondition = () => {
  const { state: { weather } } = useContext(AppContext) as AppContextType;

  return (
    <>
      <Typography variant='body2'>
        {weather.weatherDesc}
      </Typography>
      <StyledImgBox bg={!weather.icon.match(/^(02|03|04)/g)}>
        <img
          width='80'
          height='80'
          src={`http://openweathermap.org/img/wn/${weather.icon}@2x.png`}
          alt={`${weather.weatherDesc}`}
        />
      </StyledImgBox>
    </>
  );
};
export default WeatherCondition;

