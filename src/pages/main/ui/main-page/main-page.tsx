import { FC, ReactElement, useCallback, useEffect } from "react";

import { useAppDispatch, useAppSelector } from "src/shared/hooks";

import {
  MainContent,
  EContentItemName,
  mainContentSlice,
  IActiveContentItem,
} from "src/entities/main-content";

import { AccountSettings } from "src/features/settings";

import { Sidebar } from "src/widgets/sidebar";

import "./main-page.scss";

interface Props {}

const { closeLastContentItem } = mainContentSlice.actions;

const test: Record<EContentItemName, any> = {
  [EContentItemName.ACCOUNT_SETTINGS]: (
    item: IActiveContentItem,
    index: number
  ) => (
    <AccountSettings
      key={item.name + index}
      contentItem={item}
      positionNumber={index}
    />
  ),
  [EContentItemName.PASSWORD_SETTINGS]: (
    item: IActiveContentItem,
    index: number
  ) => (
    <MainContent
      key={item.name + index}
      contentItem={item}
      positionNumber={index}
    >
      password {index}
    </MainContent>
  ),
  [EContentItemName.CHAT]: (item: IActiveContentItem, index: number) => (
    <MainContent
      key={item.name + index}
      contentItem={item}
      positionNumber={index}
    >
      chat {index}
    </MainContent>
  ),
  [EContentItemName.LANGUAGE_SETTINGS]: (
    item: IActiveContentItem,
    index: number
  ) => (
    <MainContent
      key={item.name + index}
      contentItem={item}
      positionNumber={index}
    >
      language {index}
    </MainContent>
  ),
};

export const MainPage: FC<Props> = (): ReactElement => {
  const dispatch = useAppDispatch();

  const { activeContent } = useAppSelector(({ mainContent }) => mainContent);

  const closEContentItemName = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        dispatch(closeLastContentItem());
      }
    },
    [dispatch]
  );

  useEffect(() => {
    document.addEventListener("keydown", closEContentItemName);

    return () => {
      document.removeEventListener("keydown", closEContentItemName);
    };
  }, [closEContentItemName]);

  return (
    <div className="main-page">
      <Sidebar className="main-page__sidebar" />
      <div className="main-page__content">
        {activeContent.map((item, index) => test[item.name](item, index))}
      </div>
    </div>
  );
};
