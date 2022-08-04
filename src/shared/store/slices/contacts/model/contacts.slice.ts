import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { IUser } from "src/shared/models";

import {
  fetchAddContactAction,
  fetchGetContactsAction,
} from "./contacts.thunk";

import { ContactsState } from "./types";

const initialState: ContactsState = {
  contacts: [],
  isLoadingGet: false,
  isLoadingAdd: false,
};

export const contactsSlice = createSlice({
  name: "contacts",
  initialState,
  reducers: {},
  extraReducers: {
    "auth/logout": (state) => {
      state.contacts = [];
    },
    [fetchGetContactsAction.fulfilled.type]: (
      state,
      action: PayloadAction<IUser[]>
    ) => {
      state.isLoadingGet = false;

      state.contacts = action.payload;
    },
    [fetchGetContactsAction.pending.type]: (state) => {
      state.isLoadingGet = true;
    },
    [fetchGetContactsAction.rejected.type]: (state) => {
      state.isLoadingGet = false;
    },
    [fetchAddContactAction.fulfilled.type]: (state) => {
      state.isLoadingAdd = false;
    },
    [fetchAddContactAction.pending.type]: (state) => {
      state.isLoadingAdd = true;
    },
    [fetchAddContactAction.rejected.type]: (state) => {
      state.isLoadingAdd = false;
    },
  },
});

export const contactsReducer = contactsSlice.reducer;
