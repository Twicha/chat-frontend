import { FC, ReactElement, useMemo } from "react";

import { BaseButton } from "src/shared/components";

import { useAppDispatch, useAppSelector } from "src/shared/hooks";

import { authSlice } from "src/shared/modules";

import { mainContentSlice, EContentItemName } from "src/entities/main-content";

import { AccountBlock } from "../account-block";

import "./settings-block.scss";

interface Props {}

const { resetStore } = authSlice.actions;

const { addContentItem } = mainContentSlice.actions;

export const SettingsBlock: FC<Props> = (): ReactElement => {
  const dispatch = useAppDispatch();

  const { activeContent } = useAppSelector(({ mainContent }) => mainContent);

  const lastActiveContentName: EContentItemName | undefined = useMemo(
    () => activeContent[activeContent.length - 1]?.name,
    [activeContent]
  );

  const logoutHandler = () => dispatch(resetStore());

  return (
    <div className="settings-block">
      <div>
        <AccountBlock
          isActive={lastActiveContentName === EContentItemName.ACCOUNT_SETTINGS}
          onClick={() =>
            dispatch(
              addContentItem({
                name: EContentItemName.ACCOUNT_SETTINGS,
              })
            )
          }
        />
      </div>

      <BaseButton
        className="settings-block__logout"
        color="red"
        outline
        size="medium"
        onClick={logoutHandler}
      >
        LogOut
      </BaseButton>
    </div>
  );
};
