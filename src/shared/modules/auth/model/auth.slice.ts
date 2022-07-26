import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { fetchLoginAction, fetchRegistrationAction } from "./auth.thunk";

interface AuthState {
  token: string | null;
  isLoading: boolean;
  error: string;
}

const initialState: AuthState = {
  token: null,
  isLoading: false,
  error: "",
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    resetStore() {
      localStorage.removeItem("token");

      return initialState;
    },
  },
  extraReducers: {
    [fetchRegistrationAction.fulfilled.type]: (
      state,
      action: PayloadAction<string>
    ) => {
      state.isLoading = false;

      state.error = "";

      state.token = action.payload;

      localStorage.setItem("token", action.payload);
    },
    [fetchRegistrationAction.pending.type]: (state) => {
      state.isLoading = true;
    },
    [fetchRegistrationAction.rejected.type]: (
      state,
      action: PayloadAction<string>
    ) => {
      state.isLoading = false;

      state.error = action.payload;
    },
    [fetchLoginAction.fulfilled.type]: (
      state,
      action: PayloadAction<string>
    ) => {
      state.isLoading = false;

      state.error = "";

      state.token = action.payload;

      localStorage.setItem("token", action.payload);
    },
    [fetchLoginAction.pending.type]: (state) => {
      state.isLoading = true;
    },
    [fetchLoginAction.rejected.type]: (
      state,
      action: PayloadAction<string>
    ) => {
      state.isLoading = false;

      state.error = action.payload;
    },
  },
});

export const authReducer = authSlice.reducer;
