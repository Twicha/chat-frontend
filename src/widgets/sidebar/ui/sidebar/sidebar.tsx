import classNames from "classnames";

import { FC, ReactElement, useState } from "react";

import { SettingsTab } from "src/features/settings";

import { ESidebarTabs } from "../../model";

import { SidebarTabs } from "../sidebar-tabs";

import "./sidebar.scss";

interface Props {
  className?: string;
}

const tabsContent: Record<ESidebarTabs, ReactElement> = {
  [ESidebarTabs.CONTACTS]: <div>CONTACTS</div>,
  [ESidebarTabs.CHATS]: <div>CHATS</div>,
  [ESidebarTabs.SETTINGS]: <SettingsTab />,
};

export const Sidebar: FC<Props> = ({ className }): ReactElement => {
  const [activeTab, setActiveTab] = useState<ESidebarTabs>(ESidebarTabs.CHATS);

  return (
    <aside className={classNames("sidebar", className)}>
      {tabsContent[activeTab]}

      <SidebarTabs
        className="sidebar__tabs"
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
    </aside>
  );
};
