import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { IUser } from "src/shared/models";

import {
  fetchAddContactAction,
  fetchDeleteContactAction,
  fetchGetContactsAction,
} from "./contacts.thunk";

import { ContactsState } from "./types";

const initialState: ContactsState = {
  contacts: [],
  isLoadingGet: false,
  isLoadingAdd: false,
  isLoadingDelete: false,
  isCompleted: false,
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

      state.isCompleted = true;

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
    [fetchDeleteContactAction.fulfilled.type]: (
      state,
      action: PayloadAction<string>
    ) => {
      state.contacts = state.contacts.filter(
        (contact) => contact.id !== action.payload
      );

      state.isLoadingDelete = false;
    },
    [fetchDeleteContactAction.pending.type]: (state) => {
      state.isLoadingDelete = true;
    },
    [fetchDeleteContactAction.rejected.type]: (state) => {
      state.isLoadingDelete = false;
    },
  },
});

export const contactsReducer = contactsSlice.reducer;
