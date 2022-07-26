import { FC, ReactElement } from "react";

import { TBaseInputCombined, BaseInput } from "src/shared/components";

import "./base-input-password.scss";

interface Props extends TBaseInputCombined {}

export const BaseInputPassword: FC<Props> = (props): ReactElement => (
  <BaseInput type="password" {...props} />
);
