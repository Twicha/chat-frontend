import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { IChat, IUser } from "src/shared/models";

import { ChatsState } from "./types";

import {
  fetchGetChatsAction,
  fetchGetChatsParticipantsAction,
} from "./chats.thunk";

const initialState: ChatsState = {
  chats: [],
  chatsParticipants: [],
  isLoadingChats: false,
  isLoadingParticipants: false,
  isCompleted: false,
};

export const chatsSlice = createSlice({
  name: "chats",
  initialState,
  reducers: {
    resetStore() {
      return initialState;
    },
  },
  extraReducers: {
    "auth/logout": (state) => {
      state.chats = [];
    },
    [fetchGetChatsAction.fulfilled.type]: (
      state,
      action: PayloadAction<IChat[]>
    ) => {
      state.isLoadingChats = false;

      // state.isCompleted = true;

      state.chats = action.payload;
    },
    [fetchGetChatsAction.pending.type]: (state) => {
      state.isLoadingChats = true;

      // state.isCompleted = false;
    },
    [fetchGetChatsAction.rejected.type]: (state) => {
      state.isLoadingChats = false;

      // state.isCompleted = false;
    },
    [fetchGetChatsParticipantsAction.fulfilled.type]: (
      state,
      action: PayloadAction<IUser[]>
    ) => {
      state.isLoadingParticipants = false;

      state.chatsParticipants = action.payload;
    },
    [fetchGetChatsParticipantsAction.pending.type]: (state) => {
      state.isLoadingParticipants = true;
    },
    [fetchGetChatsParticipantsAction.rejected.type]: (state) => {
      state.isLoadingParticipants = false;
    },
  },
});

export const chatsReducer = chatsSlice.reducer;
