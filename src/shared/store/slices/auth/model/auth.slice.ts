import { createSlice } from "@reduxjs/toolkit";

import { authFulfilled, authPending, authRejected } from "../lib";

import { fetchLoginAction, fetchRegistrationAction } from "./auth.thunk";

import { AuthState } from "./types";

const initialState: AuthState = {
  token: localStorage.getItem("token"),
  isLoading: false,
  error: "",
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout() {
      localStorage.removeItem("token");

      return { ...initialState, token: null };
    },
  },
  extraReducers: {
    [fetchRegistrationAction.fulfilled.type]: authFulfilled,
    [fetchRegistrationAction.pending.type]: authPending,
    [fetchRegistrationAction.rejected.type]: authRejected,
    [fetchLoginAction.fulfilled.type]: authFulfilled,
    [fetchLoginAction.pending.type]: authPending,
    [fetchLoginAction.rejected.type]: authRejected,
  },
});

export const authReducer = authSlice.reducer;
