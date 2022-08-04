import { FC, ReactElement } from "react";

import { Navigate, Outlet } from "react-router-dom";

import { useAppSelector } from "src/shared/hooks";

import { selectHasAccess } from "src/shared/store/slices";

interface Props {
  redirectUrl?: string;
}

export const PrivateRoute: FC<Props> = ({
  redirectUrl = "/login",
}): ReactElement => {
  const hasAccess = useAppSelector(selectHasAccess);

  return hasAccess ? <Outlet /> : <Navigate to={redirectUrl} />;
};
