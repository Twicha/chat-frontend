import { createAsyncThunk } from "@reduxjs/toolkit";

import { AxiosResponse } from "axios";

import { fetchAddContact, fetchGetUsers } from "src/shared/api";

import { IUser } from "src/shared/models";
import { accountSlice } from "../../account";

const { setContacts } = accountSlice.actions;

export const fetchGetContactsAction = createAsyncThunk(
  "contactsEntity/fetchGetContacts",
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
  "contactsFeature/fetchAddContact",
  async (userId: string, thunkAPI) => {
    try {
      const { data }: AxiosResponse<string[]> = await fetchAddContact({
        userId,
      });

      thunkAPI.dispatch(setContacts(data));

      return data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
