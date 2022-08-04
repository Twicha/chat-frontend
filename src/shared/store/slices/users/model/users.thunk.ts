import { createAsyncThunk } from "@reduxjs/toolkit";

import { AxiosResponse } from "axios";

import { fetchGetUsers, GetUsersParams } from "src/shared/api/users";

import { IUser } from "src/shared/models";

export const fetchGetUsersAction = createAsyncThunk(
  "users/fetchGetUsers",
  async (query: GetUsersParams, thunkAPI) => {
    try {
      const { data }: AxiosResponse<IUser[]> = await fetchGetUsers(query);

      return data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
