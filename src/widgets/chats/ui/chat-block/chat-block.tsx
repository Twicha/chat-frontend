import { FC, ReactElement, useEffect, useMemo, useState } from "react";

import { useAppSelector } from "src/shared/hooks";

import { filteredChats, IActiveContentItem } from "src/shared/store/slices";

import { fetchGetMessages } from "src/shared/api";

import { IMessage } from "src/shared/models";

import { MainContent } from "src/entities/main-content";

import { ChatField } from "src/features/chats";

import "./chat-block.scss";

interface Props {
  positionNumber: number;
  contentItem: IActiveContentItem;
}

export const ChatBlock: FC<Props> = ({
  positionNumber,
  contentItem,
}): ReactElement => {
  const chats = useAppSelector(filteredChats);

  const [messages, setMessages] = useState<IMessage[]>([]);

  const currentChat = useMemo(
    () => chats.find(({ id }) => id === contentItem.id),
    [chats, contentItem]
  );

  useEffect(() => {
    if (contentItem.id) {
      const chatId = contentItem.id;

      const fetchMessages = async () => {
        const { data } = await fetchGetMessages(chatId);

        setMessages(data);
      };

      fetchMessages();
    }
  }, [contentItem.id]);

  return (
    <MainContent
      positionNumber={positionNumber}
      contentItem={contentItem}
      chatParticipant={currentChat?.participant}
      noPadding
    >
      <div className="chat-block">
        <div className="chat-block__messages">
          {messages.map(({ text, createdAt }) => {
            return (
              <div>
                {text} {createdAt}
              </div>
            );
          })}
        </div>
        <ChatField className="chat-block__field" />
      </div>
    </MainContent>
  );
};
