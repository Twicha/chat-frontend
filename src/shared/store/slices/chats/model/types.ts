import { IChat, IMessage, IUser } from "src/shared/models";

export interface ChatsState {
  chats: IChat[];
  chatsParticipants: IUser[];
  isLoadingChats: boolean;
  isLoadingParticipants: boolean;
  isCompleted: boolean;
}

export interface IFilteredChat {
  id: string;
  participant: IUser;
  lastMessage: IMessage;
}
