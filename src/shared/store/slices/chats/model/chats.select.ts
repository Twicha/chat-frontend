import { createSelector } from "@reduxjs/toolkit";

import { RootState } from "src/shared/store";

import { getChatsParticipantsIds, getFilteredChats } from "../lib";

const selectChats = ({ chats }: RootState) => chats.chats;

const selectChatsParticipants = ({ chats }: RootState) =>
  chats.chatsParticipants;

const selectAccountId = ({ account }: RootState) => account.account?.id;

export const selectChatsParticipantIds = createSelector(
  selectChats,
  selectAccountId,
  getChatsParticipantsIds
);

export const filteredChats = createSelector(
  selectChats,
  selectAccountId,
  selectChatsParticipants,
  getFilteredChats
);
