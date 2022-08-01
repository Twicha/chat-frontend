import { createAsyncThunk } from "@reduxjs/toolkit";

import { AxiosResponse } from "axios";

import {
  fetchGetAccount,
  fetchUpdateAccount,
  FetchUpdateAccountPayload,
} from "src/shared/api/account";

import { basePopupSlice, EPopupName } from "src/shared/components";

import { IAccount } from "./types";

const { openPopup } = basePopupSlice.actions;

export const fetchGetAccountAction = createAsyncThunk(
  "auth/fetchGetAccount",
  async (_, thunkAPI) => {
    try {
      const { data }: AxiosResponse<IAccount> = await fetchGetAccount();

      return data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const fetchUpdateAccountAction = createAsyncThunk(
  "auth/fetchUpdateAccount",
  async (params: FetchUpdateAccountPayload, thunkAPI) => {
    try {
      const { data }: AxiosResponse<IAccount> = await fetchUpdateAccount(
        params
      );

      return data;
    } catch (error: any) {
      const errors = Object.keys(error.response.data).map(
        (key) => `apiErrors.${key}.${error.response.data[key]}`
      );

      thunkAPI.dispatch(
        openPopup({
          name: EPopupName.MESSAGE,
          message: {
            text: errors,
            isError: true,
          },
        })
      );

      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
