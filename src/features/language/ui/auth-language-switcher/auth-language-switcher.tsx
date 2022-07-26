import { FC, ReactElement } from "react";

import classNames from "classnames";

import { useTranslation } from "react-i18next";

import { changeLanguage, languageList } from "src/shared/lib";

import "./auth-language-switcher.scss";

interface Props {
  className?: string;
}

export const AuthLanguageSwitcher: FC<Props> = ({
  className,
}): ReactElement => {
  const { t, i18n } = useTranslation();

  return (
    <div className={classNames("auth-language-switcher", className)}>
      <div className="auth-language-switcher__title">
        {t("authLanguageSwitcher.title")}
      </div>
      {languageList.map((lang) => (
        <button
          key={lang}
          className={classNames("auth-language-switcher__lang", {
            "auth-language-switcher__lang--active": lang === i18n.language,
          })}
          onClick={() => changeLanguage(lang)}
        >
          {lang}
        </button>
      ))}
    </div>
  );
};
