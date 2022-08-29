import { ReactElement } from "react";

import { EContentItemName, IActiveContentItem } from "src/shared/store/slices";

import { MainContent } from "src/entities/main-content";

import { LanguageSettings } from "src/features/language";

import { AccountSettings } from "src/features/settings";
import { ChatBlock } from "src/widgets/chats";

export const mainContentItems: Record<
  EContentItemName,
  (item: IActiveContentItem, index: number) => ReactElement
> = {
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
    <ChatBlock
      key={item.name + index}
      contentItem={item}
      positionNumber={index}
    />
  ),
  [EContentItemName.LANGUAGE_SETTINGS]: (
    item: IActiveContentItem,
    index: number
  ) => (
    <LanguageSettings
      key={item.name + index}
      contentItem={item}
      positionNumber={index}
    />
  ),
};
