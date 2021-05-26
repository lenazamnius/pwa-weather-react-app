import React, { Reducer, useEffect, useReducer } from 'react';
import { theme } from 'theme';
import { ThemeProvider } from '@material-ui/core/styles';

import Loading from 'containers/Loading';
import ForecastPage from 'containers/ForecastPage';
import { fetchCurLocation } from 'api/fetchWeather';
import { Action, RootState } from 'store/typeDefs';
import { InitialState, reducer } from 'store/reducer';
import { actions } from 'store/actions';
import { GetLocation } from 'api/typeDefs';
import { AppContext } from 'context';

const App: React.FC = () => {
  const [state, dispatch] = useReducer<Reducer<RootState, Action>>(reducer, InitialState);

  useEffect(() => {
    fetchCurLocation()
      .then((location: GetLocation) => dispatch(actions.setCurrentLocation(location)));
  }, []);

  if (!state.location.city) {
    return <Loading />;
  }

  return (
    <AppContext.Provider value={{ dispatch, state }}>
      <ThemeProvider theme={theme}>
        <ForecastPage />
      </ThemeProvider>
    </AppContext.Provider>
  );
};

export default App;
