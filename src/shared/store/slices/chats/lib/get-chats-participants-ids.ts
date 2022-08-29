import { IChat } from "src/shared/models";

export const getChatsParticipantsIds = (
  chats: IChat[],
  id: string | undefined
) => {
  if (!id) {
    return [];
  }

  return chats.reduce((final: string[], { type, participants }) => {
    const isSingleChat: boolean = type === "single";

    if (isSingleChat) {
      const participantId: string = participants.filter(
        (item) => item !== id
      )[0];

      if (!participantId) {
        return final;
      }

      final.push(participantId);
    }

    return final;
  }, []);
};
