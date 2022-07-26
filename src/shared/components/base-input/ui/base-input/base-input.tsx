import { FC, ReactElement } from "react";

import { FieldProps } from "formik";

import { useTranslation } from "react-i18next";

import classNames from "classnames";

import { IBaseInput, TInputTypeAttribute } from "../../model";

import "./base-input.scss";

interface Props extends IBaseInput {
  type?: TInputTypeAttribute;
  step?: number;
  min?: number | string;
  max?: number | string;
}

export const BaseInput: FC<Props & FieldProps> = ({
  type = "text",
  maxLength,
  disabled,
  required,
  placeholder,
  step,
  min,
  max,
  field,
  form,
  className,
  onChange,
  value,
}): ReactElement => {
  const { t } = useTranslation();

  const { value: fieldValue, name } = field;

  const { errors, touched } = form;

  const localValue = value || fieldValue;

  const localPlaceholder =
    placeholder || t(`authForm.form.input.placeholder.${name}`);

  return (
    <div className={classNames("base-input", className)}>
      <label
        className={classNames(
          "base-input-field",
          `base-input-field--type_${type}`
        )}
      >
        <input
          {...field}
          type={type}
          maxLength={maxLength}
          disabled={disabled}
          step={step}
          min={min}
          max={max}
          required={required}
          className={classNames(
            "base-input-field__input",
            `base-input-field__input--type_${type}`,
            {
              "base-input-field__input--error error-field":
                errors[name] && touched[name],
              [`base-input-field__input--type_${type}-has-value`]: !!localValue,
            }
          )}
          value={localValue}
          onChange={onChange || field.onChange}
        />
        <span
          className={classNames("base-input-field__label", {
            "base-input-field__label--collapsed": localValue,
            required: required,
          })}
        >
          {localPlaceholder}
        </span>
      </label>

      {touched[name] && errors[name] && (
        <div className="base-input__error">{t(errors[name] as string)}</div>
      )}
    </div>
  );
};
