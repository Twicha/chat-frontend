import { FC, ReactElement } from "react";

import { Navigate, Outlet } from "react-router-dom";

import { useAppSelector } from "src/shared/hooks";

interface Props {
  redirectUrl?: string;
}

export const PublicRoute: FC<Props> = ({ redirectUrl = "/" }): ReactElement => {
  const hasAccess = useAppSelector((state) => state.appAccess.hasAppAccess);

  return !hasAccess ? <Outlet /> : <Navigate to={redirectUrl} />;
};
