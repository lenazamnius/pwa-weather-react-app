import React, { ChangeEvent, useContext, useState } from 'react';

import { TextField } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/core/styles';
import { fetchWeather } from 'api/fetchWeather';
import { AppContextType } from 'store/typeDefs';
import { BadResponse, GetWeatherResponse } from 'api/typeDefs';
import { AppContext } from 'store/reducer';
import { actions } from 'store/actions';
import styled from 'styled-components';
import { inputTheme } from 'theme';

const SearchWrapper = styled.section`
  width: 400px;
  min-height: 80px;
  margin: 20px 0;
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
            dispatch(actions.setCity(value));
            setValue('');
          }
        });
    }
  };

  return (
    <SearchWrapper>
      <ThemeProvider theme={inputTheme}>
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
      </ThemeProvider>
    </SearchWrapper>
  );
};

export default SearchInput;