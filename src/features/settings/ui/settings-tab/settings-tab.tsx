import classNames from "classnames";
import { FC, ReactElement, useMemo } from "react";

import { useAppDispatch, useAppSelector } from "src/shared/hooks";

import { EContentItemName, mainContentSlice } from "src/shared/store/slices";

import { AccountBlock, SettingsNav } from "../";

import "./settings-tab.scss";

interface Props {
  className?: string;
}

const { addContentItem } = mainContentSlice.actions;

export const SettingsTab: FC<Props> = ({ className }): ReactElement => {
  const dispatch = useAppDispatch();

  const { activeContent } = useAppSelector(({ mainContent }) => mainContent);

  const lastActiveContentName: EContentItemName | undefined = useMemo(
    () => activeContent[activeContent.length - 1]?.name,
    [activeContent]
  );

  return (
    <div className={classNames("settings-tab", className)}>
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
