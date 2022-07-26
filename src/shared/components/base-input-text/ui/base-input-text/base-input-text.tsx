import { FC, ReactElement } from "react";

import { TBaseInputCombined, BaseInput } from "src/shared/components";

import "./base-input-text.scss";

interface Props extends TBaseInputCombined {}

export const BaseInputText: FC<Props> = (props): ReactElement => (
  <BaseInput type="text" {...props} onChange={props.onChange} />
);
