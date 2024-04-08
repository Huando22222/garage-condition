import { createAction, props } from '@ngrx/store';

// export const increment = createAction(
//   '[Garage AB] Increment',
//   props<{ ticket: number }>()
// );

// export const decrement = createAction(
//   '[Garage AB] Decrement',
//   props<{ ticket: number }>()
// );

export const setTicket = createAction(
  '[Garage AB] set value Ticket',
  props<{ ticket: number }>()
);

export const reset = createAction('[Garage AB] Reset');