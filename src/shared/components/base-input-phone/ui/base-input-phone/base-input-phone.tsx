import { ChangeEvent, FC, ReactElement } from "react";

import { CountryCode } from "libphonenumber-js";

import { TBaseInputCombined, BaseInput } from "src/shared/components";

import { formatPhone } from "../../lib";

import "./base-input-phone.scss";

interface Props extends TBaseInputCombined {
  countryCode?: CountryCode;
}

export const BaseInputPhone: FC<Props> = ({
  countryCode = "RU",
  ...props
}): ReactElement => {
  const onChangeHandler = ({ target }: ChangeEvent<HTMLInputElement>): void => {
    const regEx = /[^+\d]/g;

    const {
      field: { name },
      form: { setFieldValue },
    } = props;

    const formattedPhone = formatPhone(target.value, undefined, countryCode);

    const localValue: string =
      formattedPhone !== undefined ? formattedPhone : target.value;

    const formattedLocalValue = localValue.replace(regEx, "");

    setFieldValue(name, formattedLocalValue);
  };

  return (
    <BaseInput
      {...props}
      value={formatPhone(props.field.value)}
      type="tel"
      onChange={onChangeHandler}
      maxLength={20}
    />
  );
};
