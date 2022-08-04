import { IUser } from "src/shared/models";

export interface UsersState {
  users: IUser[];
  isLoading: boolean;
  isCompleted: boolean;
}
