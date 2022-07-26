import { createAsyncThunk } from "@reduxjs/toolkit";

import {
  fetchLogin,
  FetchLoginPayload,
  fetchRegistration,
  FetchRegistrationPayload,
} from "src/shared/api/auth";

export const fetchRegistrationAction = createAsyncThunk(
  "auth/fetchRegistration",
  async (payload: FetchRegistrationPayload, thunkAPI) => {
    try {
      const { data } = await fetchRegistration(payload);

      return data.token;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const fetchLoginAction = createAsyncThunk(
  "auth/fetchLogin",
  async (payload: FetchLoginPayload, thunkAPI) => {
    try {
      const { data } = await fetchLogin(payload);

      return data.token;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
