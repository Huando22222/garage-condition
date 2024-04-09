import { isDevMode } from '@angular/core';
import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer,
} from '@ngrx/store';

import { ticketReducer } from './campus-ab.reducer';

export interface State {}
export const reducers: ActionReducerMap<State> = {
  ticket: ticketReducer,
};

export const metaReducers: MetaReducer<State>[] = isDevMode() ? [] : [];
