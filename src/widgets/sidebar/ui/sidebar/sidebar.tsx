import classNames from "classnames";

import { FC, ReactElement, useState } from "react";
import { ChatsTab } from "src/features/chats";

import { ContactsTab } from "src/features/contacts";

import { SettingsTab } from "src/features/settings";

import { ESidebarTabs } from "../../model";

import { SidebarTabs } from "../sidebar-tabs";

import "./sidebar.scss";

interface Props {
  className?: string;
}

const tabsContent: Record<
  ESidebarTabs,
  (payload?: { className?: string }) => ReactElement
> = {
  [ESidebarTabs.CONTACTS]: (payload) => (
    <ContactsTab className={payload?.className} />
  ),
  [ESidebarTabs.CHATS]: (payload) => (
    <ChatsTab className={payload?.className} />
  ),
  [ESidebarTabs.SETTINGS]: (payload) => (
    <SettingsTab className={payload?.className} />
  ),
};

export const Sidebar: FC<Props> = ({ className }): ReactElement => {
  const [activeTab, setActiveTab] = useState<ESidebarTabs>(ESidebarTabs.CHATS);

  return (
    <aside className={classNames("sidebar", className)}>
      {tabsContent[activeTab]({ className: "sidebar__content" })}

      <SidebarTabs
        className="sidebar__tabs"
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
    </aside>
  );
};
