import { FC, ReactElement, useEffect, useState } from "react";

import classNames from "classnames";

import { useTranslation } from "react-i18next";

import { BaseAvatar } from "src/shared/components";

import { IMessage, IUser } from "src/shared/models";

import { formatMessageTime } from "../../lib";

import "./chat-card.scss";

interface Props {
  message: IMessage;
  user: IUser;
  className?: string;
  isActive: boolean;
  onClick: () => void;
}

export const ChatCard: FC<Props> = ({
  message,
  user,
  className,
  isActive,
  onClick,
}): ReactElement => {
  const { i18n } = useTranslation();

  const { firstName, lastName } = user;

  const { text, createdAt } = message;

  const [messageTime, setMessageTime] = useState<string>("");

  useEffect(() => {
    formatMessageTime(createdAt, i18n.language).then((res) => {
      setMessageTime(res);
    });
  }, [createdAt, i18n.language]);

  return (
    <button
      className={classNames("chat-card", className, {
        "chat-card--active": isActive,
      })}
      onClick={onClick}
    >
      <BaseAvatar account={user} />
      <div className="chat-card__container">
        <div className="chat-card__header">
          <div className="chat-card__title">{`${firstName} ${lastName}`}</div>
          <div className="chat-card__time">{messageTime}</div>
        </div>
        <div className="chat-card__description">{text}</div>
      </div>
    </button>
  );
};
