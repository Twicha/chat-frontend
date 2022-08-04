import { IUser } from "src/shared/models";

export interface ContactsState {
  contacts: IUser[];
  isLoadingGet: boolean;
  isLoadingAdd: boolean;
  isLoadingDelete: boolean;
  isCompleted: boolean;
}
