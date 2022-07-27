import { Dispatch, FC, ReactElement, SetStateAction } from "react";

import classNames from "classnames";

import {
  ChatsIcon,
  ContactsIcon,
  SettingsIcon,
} from "src/shared/component-icons";

import { ESidebarTabs } from "../../model";

import "./sidebar-tabs.scss";

interface Props {
  className?: string;
  activeTab: ESidebarTabs;
  setActiveTab: Dispatch<SetStateAction<ESidebarTabs>>;
}

const sidebarTabList: ESidebarTabs[] = Object.values(ESidebarTabs);

const tabIconClass: string = "sidebar-tabs__item-icon";

const sidebarTabsIcons: Record<ESidebarTabs, ReactElement> = {
  [ESidebarTabs.CONTACTS]: <ContactsIcon className={tabIconClass} />,
  [ESidebarTabs.CHATS]: <ChatsIcon className={tabIconClass} />,
  [ESidebarTabs.SETTINGS]: <SettingsIcon className={tabIconClass} />,
};

export const SidebarTabs: FC<Props> = ({
  className,
  activeTab,
  setActiveTab,
}): ReactElement => {
  return (
    <div className={classNames("sidebar-tabs", className)}>
      {sidebarTabList.map((tab) => (
        <button
          key={tab}
          className={classNames("sidebar-tabs__item", {
            "sidebar-tabs__item--active": activeTab === tab,
          })}
          onClick={() => setActiveTab(tab)}
        >
          {sidebarTabsIcons[tab]}
        </button>
      ))}
    </div>
  );
};
