import { FC, ReactElement } from "react";

import { IActiveContentItem, MainContent } from "src/entities/main-content";

import { AccountForm } from "../account-form";

import "./account-settings.scss";

interface Props {
  positionNumber: number;
  contentItem: IActiveContentItem;
}

export const AccountSettings: FC<Props> = ({
  positionNumber,
  contentItem,
}): ReactElement => {
  return (
    <MainContent contentItem={contentItem} positionNumber={positionNumber}>
      <div className="account-settings">
        <AccountForm />
      </div>
    </MainContent>
  );
};
