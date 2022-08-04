import { FC, Fragment, ReactElement, useEffect, useMemo } from "react";

import { Trans, useTranslation } from "react-i18next";

import classNames from "classnames";

import { BaseLoader, basePopupSlice, EPopupName } from "src/shared/components";

import { PlusIcon } from "src/shared/component-icons";

import { useAppDispatch, useAppSelector } from "src/shared/hooks";

import { fetchGetContactsAction } from "src/shared/store/slices";

import { SearchContactsPopup, ContactsList } from "../";

import "./contacts-tab.scss";

interface Props {
  className?: string;
}

const { openPopup } = basePopupSlice.actions;

export const ContactsTab: FC<Props> = ({ className }): ReactElement => {
  const { t } = useTranslation();

  const dispatch = useAppDispatch();

  const { activePopups } = useAppSelector(({ basePopup }) => basePopup);

  const { account } = useAppSelector(({ account }) => account);

  const { contacts, isLoadingGet } = useAppSelector(({ contacts }) => contacts);

  const isAddContactsPopupActive: boolean = useMemo(
    () => activePopups.some(({ name }) => name === EPopupName.SEARCH_CONTACTS),
    [activePopups]
  );

  const openAddContactsPopupHandler = () => {
    dispatch(openPopup({ name: EPopupName.SEARCH_CONTACTS }));
  };

  useEffect(() => {
    if (account?.contacts.length) {
      dispatch(fetchGetContactsAction(account?.contacts || []));
    }
  }, [dispatch, account]);

  return (
    <div className={classNames("contacts-tab", className)}>
      {!!contacts.length && !isLoadingGet && (
        <Fragment>
          <ContactsList className="contacts-tab__list" />
          <button
            className="contacts-tab__add-btn"
            onClick={openAddContactsPopupHandler}
          >
            <PlusIcon className="contacts-tab__add-btn-icon" />
          </button>
        </Fragment>
      )}
      {!contacts.length && !isLoadingGet && (
        <div className="contacts-tab__empty">
          <Trans
            t={t}
            i18nKey="contactsTab.empty"
            components={{
              button: (
                <button
                  className="contacts-tab__empty-btn"
                  onClick={openAddContactsPopupHandler}
                ></button>
              ),
            }}
          />
        </div>
      )}
      {isLoadingGet && <BaseLoader />}
      {isAddContactsPopupActive && <SearchContactsPopup />}
    </div>
  );
};
