import { FC, ReactElement, useMemo } from "react";

import { useAppDispatch, useAppSelector } from "src/shared/hooks";

import { mainContentSlice, EContentItemName } from "src/entities/main-content";

import { AccountBlock, SettingsNav } from "../";

import "./settings-tab.scss";

interface Props {}

const { addContentItem } = mainContentSlice.actions;

export const SettingsTab: FC<Props> = (): ReactElement => {
  const dispatch = useAppDispatch();

  const { activeContent } = useAppSelector(({ mainContent }) => mainContent);

  const lastActiveContentName: EContentItemName | undefined = useMemo(
    () => activeContent[activeContent.length - 1]?.name,
    [activeContent]
  );

  return (
    <div className="settings-tab">
      <AccountBlock
        className="settings-tab__account"
        isActive={lastActiveContentName === EContentItemName.ACCOUNT_SETTINGS}
        onClick={() =>
          dispatch(
            addContentItem({
              name: EContentItemName.ACCOUNT_SETTINGS,
            })
          )
        }
      />
      <SettingsNav
        className="settings-tab__nav"
        activeContent={lastActiveContentName}
      />
    </div>
  );
};
