export interface IMessage {
  id: string;
  chatId: string;
  fromWhom: string;
  type: "text";
  text: string;
  createdAt: string;
  updatedAt: string;
}
