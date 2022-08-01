import { FC, ReactElement, useCallback, useEffect } from "react";

import classNames from "classnames";

import { BaseMessagePopup } from "src/shared/components";

import { useAppDispatch, useAppSelector } from "src/shared/hooks";

import { mainContentSlice } from "src/entities/main-content";

import { Sidebar } from "src/widgets/sidebar";

import { mainContentItems } from "../../lib";

import "./main-page.scss";

interface Props {}

const { closeLastContentItem } = mainContentSlice.actions;

export const MainPage: FC<Props> = (): ReactElement => {
  const dispatch = useAppDispatch();

  const { activeContent } = useAppSelector(({ mainContent }) => mainContent);

  const { activePopups } = useAppSelector(({ basePopup }) => basePopup);

  const closeContentItemName = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape" && !activePopups.length) {
        dispatch(closeLastContentItem());
      }
    },
    [dispatch, activePopups]
  );

  useEffect(() => {
    document.addEventListener("keydown", closeContentItemName);

    return () => {
      document.removeEventListener("keydown", closeContentItemName);
    };
  }, [closeContentItemName]);

  return (
    <div className="main-page">
      <Sidebar className="main-page__sidebar" />
      <div
        className={classNames("main-page__content", {
          "main-page__content--has-content": activeContent.length,
        })}
      >
        {activeContent.map((item, index) =>
          mainContentItems[item.name](item, index)
        )}
      </div>

      <BaseMessagePopup />
    </div>
  );
};
