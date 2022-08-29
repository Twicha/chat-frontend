import { IChat, IUser } from "src/shared/models";

import { IFilteredChat } from "../model";

export const getFilteredChats = (
  chats: IChat[],
  accountId: string | undefined,
  participants: IUser[]
): IFilteredChat[] =>
  chats
    .reduce((final: IFilteredChat[], curr) => {
      const participant: IUser | undefined = participants.find(
        (participant) => {
          const participantId = curr.participants.filter(
            (id) => id !== accountId
          )[0];

          return participant.id === participantId;
        }
      );

      const hasLastMessage = curr.lastMessage.length;

      if (participant && hasLastMessage && accountId) {
        final.push({
          id: curr.id,
          participant,
          lastMessage: curr.lastMessage[0],
        });
      }

      return final;
    }, [])
    .sort((a, b) => {
      return (
        new Date(b.lastMessage.createdAt).getTime() -
        new Date(a.lastMessage.createdAt).getTime()
      );
    });
