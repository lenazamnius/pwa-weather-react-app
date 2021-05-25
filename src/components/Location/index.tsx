import React, { useContext } from 'react';

import { AppContext } from 'store/reducer';
import { Badge, Typography } from '@material-ui/core';
import styled from 'styled-components';
import { AppContextType } from 'store/typeDefs';

const LocationWrapper = styled.section`
  width: 400px;
  text-align: center;
`;

const Location = () => {
  const { state: { location: { country, city } } } = useContext(AppContext) as AppContextType;

  return (
    <LocationWrapper>
      <Badge color='error' badgeContent={country}>
        <Typography variant='h1'>
          {city}
        </Typography>
      </Badge>
    </LocationWrapper>
  );
};

export default Location;