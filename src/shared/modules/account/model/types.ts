export interface AccountState {
  account: IAccount | null;
  isLoading: boolean;
  error: string;
}

export interface IAccount {
  avatar: string | null;
  contacts: string[];
  firstName: string;
  lastName: string;
  phone: string;
  color?: string;
}
