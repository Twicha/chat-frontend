import { FC, ReactElement } from "react";

import classNames from "classnames";

import { useAppDispatch, useAppSelector } from "src/shared/hooks";

import {
  EContentItemName,
  filteredChats,
  mainContentSlice,
} from "src/shared/store/slices";

import { ChatCard } from "../chat-card";

import "./chat-list.scss";

interface Props {
  className?: string;
}

const { addContentItem } = mainContentSlice.actions;

export const ChatList: FC<Props> = ({ className }): ReactElement => {
  const dispatch = useAppDispatch();

  const chats = useAppSelector(filteredChats);

  const { activeContent } = useAppSelector(({ mainContent }) => mainContent);

  const onClickHandler = (id: string) => {
    dispatch(addContentItem({ name: EContentItemName.CHAT, id }));
  };

  return (
    <div className={classNames("chat-list", className)}>
      {chats.map(({ id, participant, lastMessage }) => (
        <ChatCard
          key={id}
          className="chat-list__item"
          isActive={activeContent.some((item) => item.id === id)}
          message={lastMessage}
          user={participant}
          onClick={() => onClickHandler(id)}
        />
      ))}
    </div>
  );
};
