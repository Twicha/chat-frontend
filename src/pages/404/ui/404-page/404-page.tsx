import { FC, ReactElement } from "react";

import { Link } from "react-router-dom";

import "./404-page.scss";

interface Props {}

export const Page404: FC<Props> = (): ReactElement => {
  return (
    <div>
      Page 404
      <Link to="/">Вернуться на главную</Link>
    </div>
  );
};
