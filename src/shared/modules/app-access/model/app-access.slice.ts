import { createAction, createSlice } from "@reduxjs/toolkit";

import { fetchLoginAction, fetchRegistrationAction } from "../../auth";

const authResetStoreAction = createAction("auth/resetStore");

interface AppAccessState {
  hasAppAccess: boolean;
}

const initialState: AppAccessState = {
  hasAppAccess: !!localStorage.getItem("token"),
};

export const appAccessSlice = createSlice({
  name: "appAccess",
  initialState,
  reducers: {},
  extraReducers: (builder) =>
    builder
      .addCase(fetchRegistrationAction.fulfilled.type, (state) => {
        state.hasAppAccess = true;
      })
      .addCase(fetchLoginAction.fulfilled.type, (state) => {
        state.hasAppAccess = true;
      })
      .addCase(authResetStoreAction, (state) => {
        state.hasAppAccess = false;
      }),
});

export const appAccessReducer = appAccessSlice.reducer;
