import { FC, ReactElement, useEffect } from "react";

import { useTranslation } from "react-i18next";

import { BaseLoader, BasePopup, EPopupName } from "src/shared/components";

import { useAppDispatch, useAppSelector } from "src/shared/hooks";

import { selectUsersForAddContacts, usersSlice } from "src/shared/store/slices";

import { SearchContactsList, SearchContactsForm } from "../";

import "./search-contacts-popup.scss";

interface Props {}

const { resetStore } = usersSlice.actions;

export const SearchContactsPopup: FC<Props> = (): ReactElement => {
  const { t } = useTranslation();

  const dispatch = useAppDispatch();

  const users = useAppSelector(selectUsersForAddContacts);

  const { isLoading, isCompleted } = useAppSelector(({ users }) => users);

  useEffect(() => {
    return () => {
      dispatch(resetStore());
    };
  }, [dispatch]);

  return (
    <BasePopup name={EPopupName.SEARCH_CONTACTS} isWithoutPadding>
      <div className="search-contacts-popup">
        <SearchContactsForm className="search-contacts-popup__form" />
        <div className="search-contacts-popup__container">
          {!isLoading && (
            <SearchContactsList className="search-contacts-popup__list" />
          )}
          {isLoading && <BaseLoader />}
          {!users.length && !isLoading && (
            <div className="search-contacts-popup__empty">
              {t(`popups.addContacts.empty${isCompleted ? ".completed" : ""}`)}
            </div>
          )}
        </div>
      </div>
    </BasePopup>
  );
};
