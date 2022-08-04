import { createAsyncThunk } from "@reduxjs/toolkit";

import { AxiosResponse } from "axios";

import {
  fetchAddContact,
  fetchDeleteContact,
  fetchGetUsers,
} from "src/shared/api";

import { IUser } from "src/shared/models";
import { accountSlice } from "../../account";

const { setContacts } = accountSlice.actions;

export const fetchGetContactsAction = createAsyncThunk(
  "contacts/fetchGetContacts",
  async (ids: string[], thunkAPI) => {
    try {
      const { data }: AxiosResponse<IUser[]> = await fetchGetUsers({ ids });

      return data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const fetchAddContactAction = createAsyncThunk(
  "contacts/fetchAddContact",
  async (userId: string, thunkAPI) => {
    try {
      const { data }: AxiosResponse<string[]> = await fetchAddContact({
        userId,
      });

      thunkAPI.dispatch(setContacts(data));
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const fetchDeleteContactAction = createAsyncThunk(
  "contacts/fetchDeleteContact",
  async (userId: string, thunkAPI) => {
    try {
      const { data }: AxiosResponse<string[]> = await fetchDeleteContact({
        userId,
      });

      thunkAPI.dispatch(setContacts(data));

      return userId;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
