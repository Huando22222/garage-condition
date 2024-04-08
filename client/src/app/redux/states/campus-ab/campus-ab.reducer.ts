import { createReducer, on } from '@ngrx/store';
import { increment, decrement, reset } from './campus-ab.action';

export const initialState = 0;

export const counterReducer = createReducer(
  initialState,
  on(increment, (state, { ticket }) => state + ticket),
  on(decrement, (state, { ticket }) => state - ticket),
  on(reset, (state) => 0)
);
