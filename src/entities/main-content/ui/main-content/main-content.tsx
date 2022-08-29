import { FC, PropsWithChildren, ReactElement } from "react";

import { useTranslation } from "react-i18next";

import classNames from "classnames";

import { useAppDispatch } from "src/shared/hooks";

import {
  EContentItemName,
  IActiveContentItem,
  mainContentSlice,
} from "src/shared/store/slices";

import "./main-content.scss";
import { IUser } from "src/shared/models";
import { UserItem } from "src/shared/components";
import { HeaderControls } from "../header-controls";

interface Props {
  className?: string;
  contentItem: IActiveContentItem;
  positionNumber: number;
  noPadding?: boolean;
  chatParticipant?: IUser;
}

const { closeLastContentItem } = mainContentSlice.actions;

export const MainContent: FC<PropsWithChildren<Props>> = ({
  children,
  className,
  positionNumber,
  noPadding,
  contentItem,
  chatParticipant,
}): ReactElement => {
  const { t } = useTranslation();

  const dispatch = useAppDispatch();

  const isChat: boolean = contentItem.name === EContentItemName.CHAT;

  const closEContentItemName = () => dispatch(closeLastContentItem());

  return (
    <div
      className={classNames("main-content", className, {
        "main-content--animate": positionNumber,
        "main-content--no-padding": noPadding,
      })}
    >
      <div className="main-content__header">
        <div className="main-content__header-container">
          <button
            className={classNames(
              "main-content__header-btn",
              "around-hover-btn",
              {
                "main-content__header-btn--first": isChat && !positionNumber,
              }
            )}
            onClick={closEContentItemName}
          />
          {!isChat && (
            <h2 className="main-content__header-title">
              {t(`mainContent.header.title.${contentItem.name}`)}
            </h2>
          )}
          {isChat && chatParticipant && (
            <UserItem
              className="main-content__header-participant"
              user={chatParticipant}
              size="medium"
            />
          )}
        </div>
        {isChat && chatParticipant && (
          <HeaderControls className="main-content__header-controls" />
        )}
      </div>
      <div className="main-content__children">{children}</div>
    </div>
  );
};
