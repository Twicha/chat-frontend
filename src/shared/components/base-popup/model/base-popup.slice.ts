import { createSlice } from "@reduxjs/toolkit";

import {
  hidePopup,
  hideAllPopup,
  openPopup,
  closePopup,
  closeAllPopup,
} from "../lib";

import { BasePopupState } from "./types";

const initialState: BasePopupState = {
  activePopups: [],
  showedPopups: [],
};

export const basePopupSlice = createSlice({
  name: "basePopup",
  initialState,
  reducers: {
    hidePopup,
    hideAllPopup,
    openPopup,
    closePopup,
    closeAllPopup,
  },
});

export const basePopupReducer = basePopupSlice.reducer;
