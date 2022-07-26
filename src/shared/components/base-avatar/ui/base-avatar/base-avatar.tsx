import { FC, ReactElement } from "react";

import classNames from "classnames";

import { IUser } from "src/shared/models";

import { TBaseAvatarSize } from "../../model";

import "./base-avatar.scss";

interface Props {
  className?: string;
  account: IUser;
  size?: TBaseAvatarSize;
}

export const BaseAvatar: FC<Props> = ({
  account,
  className,
  size = "default",
}): ReactElement => {
  const { firstName, lastName, avatar, color = "green" } = account;

  return (
    <div
      className={classNames("base-avatar", className)}
      style={{
        backgroundImage: avatar ? `url(${avatar})` : undefined,
      }}
      data-color={color}
      data-size={size}
    >
      {!avatar && `${firstName[0] || ""}${lastName[0] || ""}`}
    </div>
  );
};
