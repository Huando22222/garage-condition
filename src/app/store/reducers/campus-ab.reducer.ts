import { createReducer, on } from '@ngrx/store';
import { setTicket, reset } from '../../store/actions/campus-ab.action';

export const initialState = 5;

export const ticketReducer = createReducer(
  initialState,
  on(setTicket, (state, { ticket }) => {
    console.log('Reducer: Set Ticket ', ticket);
    return ticket;
  }),
  on(reset, (state) => {
    console.log('Reducer: Reset Ticket');
    return initialState;
  })
);
