import { FC, ReactElement } from "react";

import { useAppDispatch } from "src/shared/hooks";

import { authSlice } from "src/shared/modules";

import "./main-page.scss";

interface Props {}

const { resetStore } = authSlice.actions;

export const MainPage: FC<Props> = (): ReactElement => {
  const dispatch = useAppDispatch();

  return (
    <div>
      <button
        onClick={() => {
          dispatch(resetStore());
        }}
      >
        logout
      </button>
    </div>
  );
};
