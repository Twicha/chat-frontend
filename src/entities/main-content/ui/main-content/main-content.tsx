import { FC, PropsWithChildren, ReactElement } from "react";

import { useTranslation } from "react-i18next";

import classNames from "classnames";

import { useAppDispatch } from "src/shared/hooks";

import { IActiveContentItem, mainContentSlice } from "src/shared/store/slices";

import "./main-content.scss";

interface Props {
  className?: string;
  contentItem: IActiveContentItem;
  positionNumber: number;
  noPadding?: boolean;
}

const { closeLastContentItem } = mainContentSlice.actions;

export const MainContent: FC<PropsWithChildren<Props>> = ({
  children,
  className,
  positionNumber,
  noPadding,
  contentItem,
}): ReactElement => {
  const { t } = useTranslation();

  const dispatch = useAppDispatch();

  const closEContentItemName = () => dispatch(closeLastContentItem());

  return (
    <div
      className={classNames("main-content", className, {
        "main-content--animate": positionNumber,
        "main-content--no-padding": noPadding,
      })}
    >
      <div className="main-content__header">
        <button
          className="main-content__header-btn"
          onClick={closEContentItemName}
        />
        <h2 className="main-content__header-title">
          {t(`mainContent.header.title.${contentItem.name}`)}
        </h2>
      </div>
      <div className="main-content__children">{children}</div>
    </div>
  );
};
