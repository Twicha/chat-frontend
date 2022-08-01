import { createAsyncThunk } from "@reduxjs/toolkit";

import { basePopupSlice } from "./base-popup.slice";

import { IPopupCloseAllPayload, IPopupClosePayload } from "./types";

const { closePopup, hidePopup, closeAllPopup, hideAllPopup } =
  basePopupSlice.actions;

export const closePopupAction = createAsyncThunk(
  "basePopup/closePopup",
  async (payload: IPopupClosePayload, thunkAPI) => {
    thunkAPI.dispatch(closePopup(payload));

    setTimeout(() => {
      thunkAPI.dispatch(hidePopup(payload));
    }, 500);
  }
);

export const closeAllPopupAction = createAsyncThunk(
  "basePopup/closePopup",
  async (payload: IPopupCloseAllPayload, thunkAPI) => {
    thunkAPI.dispatch(closeAllPopup(payload));

    setTimeout(() => {
      thunkAPI.dispatch(hideAllPopup());
    }, 500);
  }
);
