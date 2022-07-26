import { ObjectShape } from "yup/lib/object";

import * as Yup from "yup";

import { TAuthType } from "../model";

const phoneRegExp = /^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/im;

export const formErrors = (authType: TAuthType) => {
  const yupObj: ObjectShape = {
    phone: Yup.string()
      .matches(phoneRegExp, {
        message: "baseInput.error.wrongPhoneFormat",
      })
      .required("baseInput.error.required"),
    password: Yup.string()
      .min(8, "baseInput.error.passwordMin")
      .max(16, "baseInput.error.passwordMax")
      .required("baseInput.error.required"),
  };

  if (authType === "registration") {
    yupObj.firstName = Yup.string().required("baseInput.error.required");

    yupObj.lastName = Yup.string().required("baseInput.error.required");
  }

  return Yup.object().shape(yupObj);
};
