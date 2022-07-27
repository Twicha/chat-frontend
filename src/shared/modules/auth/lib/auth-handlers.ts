import { PayloadAction } from "@reduxjs/toolkit";
import { AuthState } from "../model";

export const authFulfilled = (
  state: AuthState,
  action: PayloadAction<string>
) => {
  state.isLoading = false;

  state.error = "";

  state.token = action.payload;

  localStorage.setItem("token", action.payload);
};

export const authPending = (state: AuthState) => {
  state.isLoading = true;
};

export const authRejected = (
  state: AuthState,
  action: PayloadAction<string>
) => {
  state.isLoading = false;

  state.error = action.payload;
};
