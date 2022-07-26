import { TAuthType } from "../model/types";

export const reverseLink: Record<TAuthType, TAuthType> = {
  registration: "login",
  login: "registration",
};
