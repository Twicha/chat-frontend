export interface AccountState {
  account: IAccount | null;
  isLoading: boolean;
  error: string;
}

export interface IAccount {
  id: string;
  avatar: string | null;
  contacts: string[];
  firstName: string;
  lastName: string;
  phone: string;
  color?: string;
}
