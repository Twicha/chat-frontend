import { PayloadAction } from "@reduxjs/toolkit";

import {
  BasePopupState,
  IPopupCloseAllPayload,
  IPopupClosePayload,
} from "../model";

export const closePopup = (
  state: BasePopupState,
  { payload }: PayloadAction<IPopupClosePayload>
) => {
  if (state.showedPopups.length === 1) {
    document.body.classList.remove("overflow-hidden");
  }

  if (payload.callback) {
    payload.callback();
  }

  state.showedPopups = state.showedPopups.filter(
    (popup) => popup !== payload.name
  );
};

export const closeAllPopup = (
  state: BasePopupState,
  { payload }: PayloadAction<IPopupCloseAllPayload | undefined>
) => {
  document.body.classList.remove("overflow-hidden");

  if (payload?.callback) {
    payload.callback();
  }

  state.showedPopups = [];
};

export const hidePopup = (
  state: BasePopupState,
  { payload }: PayloadAction<IPopupClosePayload>
) => {
  state.activePopups = state.activePopups.filter(
    (popup) => popup.name !== payload.name
  );
};

export const hideAllPopup = (state: BasePopupState) => {
  state.activePopups = [];
};
