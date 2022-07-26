export interface IAuthFormData {
  phone: string;
  password: string;
  firstName?: string;
  lastName?: string;
}

export type TAuthType = "login" | "registration";
