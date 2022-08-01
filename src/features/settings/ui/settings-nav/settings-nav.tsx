import { FC, ReactElement } from "react";

import classNames from "classnames";

import { useTranslation } from "react-i18next";

import { useAppDispatch } from "src/shared/hooks";

import { EContentItemName, mainContentSlice } from "src/entities/main-content";

import { settingsBtnIcons, settingsBtns } from "../../lib";

import "./settings-nav.scss";

interface Props {
  activeContent: EContentItemName;
  className?: string;
}

const { addContentItem } = mainContentSlice.actions;

export const SettingsNav: FC<Props> = ({
  activeContent,
  className,
}): ReactElement => {
  const { t } = useTranslation();

  const dispatch = useAppDispatch();

  return (
    <div className={classNames("settings-nav", className)}>
      {settingsBtns.map((name) => (
        <button
          key={name}
          className={classNames("settings-nav__item", {
            "settings-nav__item--active": activeContent === name,
          })}
          onClick={() =>
            dispatch(
              addContentItem({
                name,
              })
            )
          }
        >
          {settingsBtnIcons[name]}
          {t(`settingsTab.btn.${name}`)}
        </button>
      ))}
    </div>
  );
};
