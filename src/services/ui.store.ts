import { createSlice } from '@reduxjs/toolkit';
import { RootState, store } from 'services/store';

type Toast = {
  open: boolean;
  type?: 'info' | 'error' | 'done';
  text?: string;
  fade?: boolean;
  autoClose?: boolean;
};

interface UiState {
  toast: Toast;
}

const initialState: UiState = {
  toast: {
    open: false,
    type: 'info',
    text: '',
    fade: true,
    autoClose: true,
  },
};

export const toastAlert = (toast: Toast) => {
  store.dispatch(showToast(toast));
  setTimeout(() => store.dispatch(hideToast()), 3500);
};

export const uiStore = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    showToast: (state, { payload }) => {
      state.toast = { ...state.toast, ...payload };
    },
    hideToast: state => {
      state.toast = {
        ...state.toast,
        open: false,
      };
    },
  },
});

export const selectToast = (state: RootState) => state.ui.toast;

export const { showToast, hideToast } = uiStore.actions;

export default uiStore.reducer;
