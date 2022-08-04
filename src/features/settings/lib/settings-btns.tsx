import { ReactElement } from "react";

import { GlobeIcon } from "src/shared/component-icons";

import { EContentItemName } from "src/shared/store/slices";

export const settingsBtns: EContentItemName[] = [
  EContentItemName.LANGUAGE_SETTINGS,
];

export const settingsBtnIcons: Partial<Record<EContentItemName, ReactElement>> =
  {
    [EContentItemName.LANGUAGE_SETTINGS]: (
      <GlobeIcon className="settings-nav__item-icon" />
    ),
  };
