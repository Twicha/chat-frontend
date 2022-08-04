import { FC, ReactElement } from "react";

import { AuthForm, IAuthFormData } from "src/shared/components";

import { useAppDispatch } from "src/shared/hooks";

import { fetchLoginAction } from "src/shared/store/slices";

import { AuthLanguageSwitcher } from "src/features/language";

import "./login-page.scss";

interface Props {}

export const LoginPage: FC<Props> = (): ReactElement => {
  const dispatch = useAppDispatch();

  const onSubmitHandler = (values: IAuthFormData) => {
    dispatch(fetchLoginAction(values));
  };

  return (
    <div className="auth-page">
      <AuthLanguageSwitcher className="auth-page__lang-switcher" />
      <AuthForm authType="login" onSubmit={onSubmitHandler} />
    </div>
  );
};
