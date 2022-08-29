import { createAsyncThunk } from "@reduxjs/toolkit";

import { AxiosResponse } from "axios";
import { fetchGetUsers } from "src/shared/api";

import { fetchGetChats } from "src/shared/api/chats";

import { IChat, IUser } from "src/shared/models";

export const fetchGetChatsAction = createAsyncThunk(
  "chats/fetchGetChats",
  async (_, thunkAPI) => {
    try {
      const { data }: AxiosResponse<IChat[]> = await fetchGetChats();

      return data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const fetchGetChatsParticipantsAction = createAsyncThunk(
  "chats/fetchGetChatsParticipants",
  async (ids: string[], thunkAPI) => {
    try {
      const { data }: AxiosResponse<IUser[]> = await fetchGetUsers({ ids });

      return data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
