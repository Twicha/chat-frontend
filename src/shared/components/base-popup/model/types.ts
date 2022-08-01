export enum EPopupName {
  MESSAGE = "message",
}

export interface IPopupMessage {
  text: string[];
  type?: "default" | "response";
  isError?: boolean;
}

export enum EPopupDataIdName {
  DEFAULT = "default",
}

export interface IPopupDataId {
  value: string;
  name: EPopupDataIdName;
}

export interface IPopupOpenPayload {
  name: EPopupName;
  message?: IPopupMessage;
  dataId?: IPopupDataId[];
  someBooleanTrigger?: boolean;
}

export interface IPopupClosePayload {
  name: EPopupName;
  callback?: () => void;
}

export interface IPopupCloseAllPayload {
  callback?: () => void;
}

export interface BasePopupState {
  activePopups: IPopupOpenPayload[];
  showedPopups: EPopupName[];
}
