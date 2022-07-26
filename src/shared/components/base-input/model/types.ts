import { FieldProps, FormikHandlers } from "formik";

export type TInputTypeAttribute =
  | "button"
  | "checkbox"
  | "color"
  | "date"
  | "datetime-local"
  | "email"
  | "file"
  | "hidden"
  | "image"
  | "month"
  | "number"
  | "password"
  | "radio"
  | "range"
  | "reset"
  | "search"
  | "submit"
  | "tel"
  | "text"
  | "time"
  | "url"
  | "week";

export interface IBaseInput {
  placeholder?: string;
  disabled?: boolean;
  required?: boolean;
  className?: string;
  maxLength?: number;
  onChange?: FormikHandlers["handleChange"];
  value?: string;
}

export type TBaseInputCombined = FieldProps & IBaseInput;
