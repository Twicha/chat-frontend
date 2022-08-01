import { FC, ReactElement } from "react";

import classNames from "classnames";

import { useTranslation } from "react-i18next";

import {
  BaseButton,
  BasePopup,
  basePopupSlice,
  EPopupName,
} from "src/shared/components";

import { useAppDispatch, useAppSelector } from "src/shared/hooks";

import "./base-message-popup.scss";

interface Props {}

const { closePopup } = basePopupSlice.actions;

export const BaseMessagePopup: FC<Props> = (): ReactElement => {
  const { t } = useTranslation();

  const dispatch = useAppDispatch();

  const { activePopups } = useAppSelector(({ basePopup }) => basePopup);

  const message = activePopups.find(
    ({ name }) => name === EPopupName.MESSAGE
  )?.message;

  const singleMessage: boolean =
    message?.text.length !== undefined && message.text.length === 1;

  const closePopupHandler = () => {
    dispatch(closePopup({ name: EPopupName.MESSAGE }));
  };

  const messageClass: string = classNames("base-message-popup__description", {
    "base-message-popup__description--error": message?.isError,
  });

  return (
    <BasePopup name={EPopupName.MESSAGE}>
      {message && (
        <div className="base-message-popup">
          {singleMessage && (
            <p className={messageClass}>{t(message.text[0])}</p>
          )}
          {!singleMessage && (
            <ul>
              {message.text.map((item, index) => (
                <li key={item + index} className={messageClass}>
                  {index + 1}) {t(item)}
                </li>
              ))}
            </ul>
          )}
          <BaseButton
            size="default"
            color={message.isError ? "red" : "dark-blue"}
            onClick={closePopupHandler}
          >
            {t("common.okey")}
          </BaseButton>
        </div>
      )}
    </BasePopup>
  );
};
