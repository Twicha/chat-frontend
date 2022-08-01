import { ELanguage } from "src/shared/lib";
import { ILangItem } from "../model";

export const langItems: Record<ELanguage, ILangItem> = {
  [ELanguage.RU]: { title: "Russian", description: "Русский" },
  [ELanguage.EN]: { title: "English", description: "English" },
};
