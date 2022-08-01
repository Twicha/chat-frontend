import { PayloadAction } from "@reduxjs/toolkit";

import { BasePopupState, IPopupOpenPayload } from "../model";

export const openPopup = (
  state: BasePopupState,
  { payload }: PayloadAction<IPopupOpenPayload>
) => {
  const hasThisPopup: boolean = !!state.activePopups.find(
    ({ name }) => payload.name === name
  );

  if (!state.showedPopups.length) {
    document.body.classList.add("overflow-hidden");
  }

  if (hasThisPopup) {
    state.activePopups = [
      ...state.activePopups.filter(({ name }) => payload.name !== name),
      payload,
    ];

    state.showedPopups = [
      ...state.showedPopups.filter((popup) => popup !== payload.name),
      payload.name,
    ];

    return;
  }

  state.showedPopups = [...state.showedPopups, payload.name];

  state.activePopups = [...state.activePopups, payload];
};
