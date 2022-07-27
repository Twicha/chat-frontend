import { FC, ReactElement, useEffect } from "react";

import { Navigate } from "react-router-dom";

import "./404-page.scss";

interface Props {}

export const Page404: FC<Props> = (): ReactElement => {
  useEffect(() => {
    alert(
      "Данной страницы не существует. Вы были перенаправлены на стартовую страницу."
    );
  }, []);

  return <Navigate to="/" replace />;
};
