import React, { useContext } from 'react';
import styled from 'styled-components';
import { Typography } from '@material-ui/core';

import { AppContext, AppContextType } from 'context';
import MySkeleton from 'components/MySkeleton';

const LocationWrapper = styled.section`
  width: 100%;
  min-height: 100px;
  text-align: center;
`;

const CountryBadgeWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const CountryBadge = styled.div`
  height: 33px;
  max-width: fit-content;
  padding: 5px 15px;
  font-size: 1.3rem;
  font-family: "Roboto", "Helvetica", "Arial", sans-serif;
  color: #fff;
  border-radius: 13px;
  background: #ec6e4c;
`;

const Location = () => {
  const { state: { location: { country, city }, fetching } } = useContext(AppContext) as AppContextType;

  if (fetching) return <MySkeleton width={400} height={100} />;

  return (
    <LocationWrapper>
      <CountryBadgeWrapper>
        <CountryBadge>
          {country}
        </CountryBadge>
      </CountryBadgeWrapper>
      <Typography variant={city.length > 8 ? 'h3' : 'h2'}>
        {city}
      </Typography>
    </LocationWrapper>
  );
};

export default Location;