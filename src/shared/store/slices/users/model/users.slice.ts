import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { IUser } from "src/shared/models";

import { UsersState } from "./types";

import { fetchGetUsersAction } from "./users.thunk";

const initialState: UsersState = {
  users: [],
  isLoading: false,
  isCompleted: false,
};

export const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    resetStore() {
      return initialState;
    },
  },
  extraReducers: {
    "auth/logout": (state) => {
      state.users = [];
    },
    [fetchGetUsersAction.fulfilled.type]: (
      state,
      action: PayloadAction<IUser[]>
    ) => {
      state.isLoading = false;

      state.isCompleted = true;

      state.users = action.payload;
    },
    [fetchGetUsersAction.pending.type]: (state) => {
      state.isLoading = true;

      state.isCompleted = false;
    },
    [fetchGetUsersAction.rejected.type]: (state) => {
      state.isLoading = false;

      state.isCompleted = false;
    },
  },
});

export const usersReducer = usersSlice.reducer;
