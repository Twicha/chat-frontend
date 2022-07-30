import { createSlice } from "@reduxjs/toolkit";

import { accountFulfilled, accountPending, accountRejected } from "../lib";

import {
  fetchGetAccountAction,
  fetchUpdateAccountAction,
} from "./account.thunk";

import { AccountState } from "./types";

const initialState: AccountState = {
  account: null,
  isLoading: false,
  error: "",
};

export const accountSlice = createSlice({
  name: "account",
  initialState,
  reducers: {
    resetStore() {
      return initialState;
    },
  },
  extraReducers: {
    [fetchGetAccountAction.fulfilled.type]: accountFulfilled,
    [fetchGetAccountAction.pending.type]: accountPending,
    [fetchGetAccountAction.rejected.type]: accountRejected,
    [fetchUpdateAccountAction.fulfilled.type]: accountFulfilled,
    [fetchUpdateAccountAction.pending.type]: accountPending,
    [fetchUpdateAccountAction.rejected.type]: accountRejected,
  },
});

export const accountReducer = accountSlice.reducer;
