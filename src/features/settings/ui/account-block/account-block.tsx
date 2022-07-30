import { FC, ReactElement } from "react";

import classNames from "classnames";

import { useAppSelector } from "src/shared/hooks";

import "./account-block.scss";

interface Props {
  className?: string;
  onClick: () => void;
  isActive: boolean;
}

export const AccountBlock: FC<Props> = ({
  className,
  onClick,
  isActive,
}): ReactElement => {
  const { account } = useAppSelector(({ account }) => account);

  const fullName: string = `${account?.firstName || ""} ${
    account?.lastName || ""
  }`.trim();

  return (
    <button
      className={classNames("account-block", className, {
        "account-block--active": isActive,
      })}
      onClick={onClick}
    >
      <div className="account-block__avatar">
        {`${account?.firstName[0] || ""}${account?.lastName[0] || ""}`}
      </div>
      <div className="account-block__container">
        <div className="account-block__name">{fullName}</div>
        <div className="account-block__phone">{account?.phone}</div>
        <div className="account-block__username">@username</div>
      </div>
    </button>
  );
};
