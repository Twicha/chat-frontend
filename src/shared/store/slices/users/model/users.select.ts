import { createSelector } from "@reduxjs/toolkit";

import { RootState } from "src/shared/store";

const selectUsers = ({ users }: RootState) => users.users;

const selectContacts = ({ account }: RootState) => account.account?.contacts;

export const selectUsersForAddContacts = createSelector(
  selectUsers,
  selectContacts,
  (users, contacts) => {
    if (!contacts) {
      return users;
    }

    return users.filter(({ id }) => !contacts.includes(id));
  }
);
