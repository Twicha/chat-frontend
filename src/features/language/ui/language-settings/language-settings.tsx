import { FC, ReactElement } from "react";

import classNames from "classnames";

import { useTranslation } from "react-i18next";

import { BaseBox } from "src/shared/components";

import { changeLanguage, languageList } from "src/shared/lib";

import { IActiveContentItem } from "src/shared/store/slices";

import { MainContent } from "src/entities/main-content";

import { langItems } from "../../lib";

import "./language-settings.scss";

interface Props {
  contentItem: IActiveContentItem;
  positionNumber: number;
}

export const LanguageSettings: FC<Props> = ({
  contentItem,
  positionNumber,
}): ReactElement => {
  const { i18n } = useTranslation();

  return (
    <MainContent contentItem={contentItem} positionNumber={positionNumber}>
      <div className="language-settings">
        <BaseBox className="language-settings__list">
          {languageList.map((lang) => (
            <button
              key={lang}
              className={classNames("language-settings__list-item", {
                "language-settings__list-item--active": lang === i18n.language,
              })}
              onClick={() => changeLanguage(lang)}
            >
              <div className="language-settings__list-item-title">
                {langItems[lang].title}
              </div>
              <div className="language-settings__list-item-description">
                {langItems[lang].description}
              </div>
            </button>
          ))}
        </BaseBox>
      </div>
    </MainContent>
  );
};
