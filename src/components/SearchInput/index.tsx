import React, { ChangeEvent, useContext, useState } from 'react';

import { Box, TextField } from '@material-ui/core';
import { fetchWeather } from 'api/fetchWeather';
import { BadResponse, GetWeatherResponse } from 'api/typeDefs';
import { AppContext, AppContextType } from 'context';
import { actions } from 'store/actions';
import styled from 'styled-components';

const SearchWrapper = styled.section`
  min-width: 400px;
  min-height: 105px;
  margin: 20px 0;

  @media (max-width: 576px) {
    min-width: max-content;
    width: 100%;
  }
`;

const StyledBox = styled(Box)`
  padding: 15px 10px 10px;
  border-radius: 4px;
  background: #f0f8ff;
`;

const SearchInput = () => {
  const { dispatch, state: { inputError } } = useContext(AppContext) as AppContextType;
  const [value, setValue] = useState('');

  const onChangeHandler = (e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    if (inputError) dispatch(actions.clearInputError());
    setValue(e.target.value);
  };

  const onKeyPressHandler = (event: any) => {
    if (event.key === 'Enter' && value) {
      fetchWeather(value)
        .then((res: GetWeatherResponse & BadResponse) => {
          if (res.cod !== 200) {
            dispatch(actions.setInputError(res.message));
          } else {
            dispatch(actions.setRequestCity(value));
            dispatch(actions.isFetching(true));
            setValue('');
          }
        })
        .catch((er) => {
          throw Error(er);
        });
    }
  };

  return (
    <SearchWrapper>
      <StyledBox>
        <TextField
          fullWidth
          autoFocus
          id='outlined-basic'
          label='Enter City Name...'
          variant='outlined'
          color='primary'
          value={value}
          onChange={onChangeHandler}
          InputProps={{ onKeyDown: onKeyPressHandler }}
          error={!!inputError}
          helperText={inputError}
        />
      </StyledBox>
    </SearchWrapper>
  );
};

export default SearchInput;