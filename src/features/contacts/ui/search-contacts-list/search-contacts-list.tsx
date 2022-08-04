import { FC, ReactElement, useState } from "react";

import classNames from "classnames";

import { BaseButton, UserItem } from "src/shared/components";

import { AddUserIcon } from "src/shared/component-icons";

import { useAppDispatch, useAppSelector } from "src/shared/hooks";

import {
  fetchAddContactAction,
  selectUsersForAddContacts,
} from "src/shared/store/slices";

import "./search-contacts-list.scss";

interface Props {
  className?: string;
}

export const SearchContactsList: FC<Props> = ({ className }): ReactElement => {
  const dispatch = useAppDispatch();

  const { isLoadingAdd } = useAppSelector(({ contacts }) => contacts);

  const users = useAppSelector(selectUsersForAddContacts);

  const [selectedId, setSelectedId] = useState<string>("");

  const addContactsHandler = (id: string) => {
    setSelectedId(id);

    dispatch(fetchAddContactAction(id));
  };

  return (
    <div className={classNames("search-contacts-list", className)}>
      {users.map((user) => {
        return (
          <UserItem
            key={user.id}
            className="search-contacts-list__item"
            user={user}
            rightSlot={
              <BaseButton
                disabled={isLoadingAdd}
                isLoading={isLoadingAdd && selectedId === user.id}
                className="search-contacts-list__item-btn"
                onClick={() => addContactsHandler(user.id)}
              >
                <AddUserIcon className="search-contacts-list__item-btn-icon" />
              </BaseButton>
            }
          />
        );
      })}
    </div>
  );
};
