export interface MainContentState {
  activeContent: IActiveContentItem[];
}

export interface IActiveContentItem {
  name: EContentItemName;
  id?: string;
  replace?: boolean;
}

export enum EContentItemName {
  ACCOUNT_SETTINGS = "account-settings",
  PASSWORD_SETTINGS = "password-settings",
  LANGUAGE_SETTINGS = "language-settings",
  CHAT = "chat",
}
