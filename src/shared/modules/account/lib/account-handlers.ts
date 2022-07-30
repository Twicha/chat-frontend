import { PayloadAction } from "@reduxjs/toolkit";

import { AccountState, IAccount } from "../model";

export const accountFulfilled = (
  state: AccountState,
  action: PayloadAction<IAccount>
) => {
  state.isLoading = false;

  state.error = "";

  state.account = action.payload;
};

export const accountPending = (state: AccountState) => {
  state.isLoading = true;
};

export const accountRejected = (
  state: AccountState,
  action: PayloadAction<string>
) => {
  state.isLoading = false;

  state.error = action.payload;
};
