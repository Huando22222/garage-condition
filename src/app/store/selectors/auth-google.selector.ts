import { createSelector } from '@ngrx/store';
import { User } from '../../interface/user-google.model';

// Lấy state toàn bộ ứng dụng
export const selectFeature = (state: { User: User }) => state;

// Chọn giá trị ticket từ state
export const selectTicket = createSelector(
  selectFeature,
  (state: { User: User }) => state.User
);
