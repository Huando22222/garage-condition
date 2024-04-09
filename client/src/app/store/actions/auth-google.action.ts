import { createAction, props } from '@ngrx/store';
import { User } from '../../interface/user-google.model';
export const googleLogged = createAction(
  '[Google] set account',
  props<{ User: User }>()
);

export const logout = createAction('[Auth] Logout');