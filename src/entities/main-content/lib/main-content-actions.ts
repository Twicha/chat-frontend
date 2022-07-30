import { PayloadAction } from "@reduxjs/toolkit";

import {
  EContentItemName,
  IActiveContentItem,
  MainContentState,
} from "../model";

export const addContentItem = (
  state: MainContentState,
  { payload: { name, id, replace = true } }: PayloadAction<IActiveContentItem>
) => {
  const newActiveContentItem: IActiveContentItem = { name, id };

  const lastStateItem: IActiveContentItem | undefined =
    state.activeContent[state.activeContent.length - 1];

  const isContentItemActivated: boolean = state.activeContent.some(
    (item) => name === item.name && name !== EContentItemName.CHAT
  );

  const isEqualLastId: boolean =
    name === lastStateItem?.name && id === lastStateItem?.id;

  if (isContentItemActivated || isEqualLastId) {
    return;
  }

  const activeContentLength: number = state.activeContent.length;

  if (activeContentLength && replace) {
    state.activeContent = [newActiveContentItem];

    return;
  }

  if (activeContentLength) {
    state.activeContent.push(newActiveContentItem);

    return;
  }

  state.activeContent = [newActiveContentItem];
};

export const closeLastContentItem = (state: MainContentState): void => {
  state.activeContent.pop();
};

export const closeAllContentItems = (state: MainContentState): void => {
  state.activeContent = [];
};
