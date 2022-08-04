import { createSlice } from "@reduxjs/toolkit";

import {
  addContentItem,
  closeAllContentItems,
  closeLastContentItem,
} from "../lib";

import { MainContentState } from "./types";

const initialState: MainContentState = {
  activeContent: [],
};

export const mainContentSlice = createSlice({
  name: "mainContent",
  initialState,
  reducers: {
    addContentItem,
    closeLastContentItem,
    closeAllContentItems,
  },
  extraReducers: (builder) =>
    builder.addCase("auth/logout", (state) => {
      state.activeContent = [];
    }),
});

export const mainContentReducer = mainContentSlice.reducer;
