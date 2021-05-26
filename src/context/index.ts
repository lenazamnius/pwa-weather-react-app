import { createContext, Dispatch } from 'react';
import { Action, RootState } from 'store/typeDefs';

export type AppContextType = {
  state: RootState,
  dispatch: Dispatch<Action>,
}

export const AppContext = createContext<AppContextType | null>(null);