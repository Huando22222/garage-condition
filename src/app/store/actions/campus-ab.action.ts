import { createAction, props } from '@ngrx/store';

export const setTicket = createAction(
  '[Garage AB] set value Ticket',
  props<{ ticket: number }>()
);

export const reset = createAction('[Garage AB] Reset');