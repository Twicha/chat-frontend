import { FC, ReactElement, useState } from "react";

import { ESidebarTabs } from "../../model";

import { SidebarTabs } from "../sidebar-tabs";

import "./sidebar.scss";

interface Props {}

export const Sidebar: FC<Props> = (): ReactElement => {
  const [activeTab, setActiveTab] = useState<ESidebarTabs>(ESidebarTabs.CHATS);

  const isContactsTab: boolean = activeTab === ESidebarTabs.CONTACTS;

  const isChatsTab: boolean = activeTab === ESidebarTabs.CHATS;

  const isSettingsTab: boolean = activeTab === ESidebarTabs.SETTINGS;

  return (
    <aside className="sidebar">
      {isContactsTab && <div>contacts</div>}

      {isChatsTab && <div>chats</div>}

      {isSettingsTab && <div>settings</div>}

      <SidebarTabs
        className="sidebar__tabs"
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
    </aside>
  );
};
