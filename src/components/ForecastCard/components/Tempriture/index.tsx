import React, { useContext } from 'react';
import { Box, Grid, Typography } from '@material-ui/core';
import { AppContext, AppContextType } from 'context';
import styled from 'styled-components';

const StyledTempBox = styled(Box)`
  margin: 10px 0 30px;
  text-align: center;
`;

const Temperature = () => {
  const { state: { weather } } = useContext(AppContext) as AppContextType;

  return (
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
  );
};
export default Temperature;

