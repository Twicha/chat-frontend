import { FC, ReactElement } from "react";

import { useTranslation } from "react-i18next";

import { BaseButton } from "src/shared/components";

import { useAppDispatch } from "src/shared/hooks";

import { authSlice, IActiveContentItem } from "src/shared/store/slices";

import { MainContent } from "src/entities/main-content";

import { AccountForm } from "../account-form";

import "./account-settings.scss";

interface Props {
  positionNumber: number;
  contentItem: IActiveContentItem;
}

const { logout } = authSlice.actions;

export const AccountSettings: FC<Props> = ({
  positionNumber,
  contentItem,
}): ReactElement => {
  const { t } = useTranslation();

  const dispatch = useAppDispatch();

  const logoutHandler = () => dispatch(logout());

  return (
    <MainContent contentItem={contentItem} positionNumber={positionNumber}>
      <div className="account-settings">
        <AccountForm />

        <BaseButton
          className="account-settings__logout"
          color="red"
          outline
          size="medium"
          onClick={logoutHandler}
        >
          {t("common.logout")}
        </BaseButton>
      </div>
    </MainContent>
  );
};
