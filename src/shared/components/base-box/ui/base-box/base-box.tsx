import { FC, PropsWithChildren, ReactElement } from "react";

import classNames from "classnames";

import "./base-box.scss";

interface Props {
  className?: string;
}

export const BaseBox: FC<PropsWithChildren<Props>> = ({
  children,
  className,
}): ReactElement => {
  return <div className={classNames("base-box", className)}>{children}</div>;
};
