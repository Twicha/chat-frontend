import { FC, ReactElement, useState } from "react";

import classNames from "classnames";

import { BaseButton, UserItem } from "src/shared/components";

import { ChatsIcon, TrashIcon } from "src/shared/component-icons";

import { useAppDispatch, useAppSelector } from "src/shared/hooks";

import { fetchDeleteContactAction } from "src/shared/store/slices";

import "./contacts-list.scss";

interface Props {
  className?: string;
}

export const ContactsList: FC<Props> = ({ className }): ReactElement => {
  const dispatch = useAppDispatch();

  const { contacts, isLoadingDelete } = useAppSelector(
    ({ contacts }) => contacts
  );

  const [selectedId, setSelectedId] = useState<string>("");

  const chatContactsHandler = (id: string) => {
    setSelectedId(id);
  };

  const deleteContactsHandler = (id: string) => {
    setSelectedId(id);

    dispatch(fetchDeleteContactAction(id));
  };

  return (
    <div className={classNames("contacts-list", className)}>
      {contacts.map((user) => {
        return (
          <UserItem
            key={user.id}
            className="contacts-list__item"
            user={user}
            rightSlot={
              <div className="contacts-list__item-controls">
                <BaseButton
                  className="contacts-list__item-btn "
                  onClick={() => chatContactsHandler(user.id)}
                >
                  <ChatsIcon className="contacts-list__item-btn-icon" />
                </BaseButton>
                <BaseButton
                  disabled={isLoadingDelete}
                  isLoading={isLoadingDelete && selectedId === user.id}
                  className="contacts-list__item-btn contacts-list__item-btn--delete"
                  onClick={() => deleteContactsHandler(user.id)}
                >
                  <TrashIcon className="contacts-list__item-btn-icon" />
                </BaseButton>
              </div>
            }
          />
        );
      })}
    </div>
  );
};
