import { createReducer, on } from '@ngrx/store';
import { googleLogged, logout } from '../../store/actions/auth-google.action';
import { User } from '../../interface/user-google.model';

export const initialState: User | null = null;

export const authReducer = createReducer<User | null>(
  initialState,
  on(googleLogged, (state, { User }) => {
    console.log('------------------------------------------------Reducer: Set User  ', User);
    return User;
  }),
  on(logout, () => {
    console.log('Reducer: Reset User');
    return initialState;
  })
);
