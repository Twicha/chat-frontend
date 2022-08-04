import { FC, ReactElement } from "react";

import classNames from "classnames";

import { BaseAvatar } from "src/shared/components";

import { IUser } from "src/shared/models";

import "./user-item.scss";

interface Props {
  className?: string;
  user: IUser;
  rightSlot?: ReactElement;
}

export const UserItem: FC<Props> = ({
  user,
  className,
  rightSlot,
}): ReactElement => {
  const { phone, firstName, lastName } = user;

  return (
    <div className={classNames("user-item", className)}>
      <div className="user-item__container">
        <BaseAvatar
          className="user-item__avatar"
          account={user}
          size="default"
        />
        <div className="user-item__info">
          <h5 className="user-item__name">{`${firstName} ${lastName}`}</h5>
          <div className="user-item__phone">{phone}</div>
        </div>
      </div>
      {rightSlot && <div className="user-item__slot">{rightSlot}</div>}
    </div>
  );
};
