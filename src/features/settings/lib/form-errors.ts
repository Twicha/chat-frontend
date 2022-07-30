import { ObjectShape } from "yup/lib/object";

import * as Yup from "yup";

const phoneRegExp = /^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/im;

export const formErrors = () => {
  const yupObj: ObjectShape = {
    phone: Yup.string()
      .matches(phoneRegExp, {
        message: "baseInput.error.wrongPhoneFormat",
      })
      .required("baseInput.error.required"),
    firstName: Yup.string().required("baseInput.error.required"),
    lastName: Yup.string().required("baseInput.error.required"),
  };

  return Yup.object().shape(yupObj);
};
