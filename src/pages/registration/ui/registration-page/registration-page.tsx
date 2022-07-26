import { FC, ReactElement } from "react";

import { AuthForm, IAuthFormData } from "src/shared/components";

import { useAppDispatch } from "src/shared/hooks";

import { fetchRegistrationAction } from "src/shared/modules";

import { AuthLanguageSwitcher } from "src/features/language";

import "./registration-page.scss";

interface Props {}

export const RegistrationPage: FC<Props> = (): ReactElement => {
  const dispatch = useAppDispatch();

  const onSubmitHandler = ({
    lastName = "",
    firstName = "",
    password,
    phone,
  }: IAuthFormData) => {
    dispatch(
      fetchRegistrationAction({
        phone,
        password,
        firstName,
        lastName,
      })
    );
  };

  return (
    <div className="auth-page">
      <AuthLanguageSwitcher className="auth-page__lang-switcher" />
      <AuthForm authType="registration" onSubmit={onSubmitHandler} />
    </div>
  );
};
