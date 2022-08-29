import { IMessage } from "./messages";

export interface IChat {
  id: string;
  type: "single" | "multi" | "public";
  participants: string[];
  createdAt: string;
  updatedAt: string;
  lastMessage: IMessage[];
}
