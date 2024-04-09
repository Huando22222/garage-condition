import { createSelector } from '@ngrx/store';

// Lấy state toàn bộ ứng dụng
export const selectFeature = (state: { ticket: number }) => state;

// Chọn giá trị ticket từ state
export const selectTicket = createSelector(
  selectFeature,
  (state: { ticket: number }) => state.ticket
);
