import { FC, ReactElement } from "react";

import { useAppDispatch } from "src/shared/hooks";

import { authSlice } from "src/shared/modules";

import { Sidebar } from "src/widgets/sidebar";

import "./main-page.scss";

interface Props {}

const { resetStore } = authSlice.actions;

export const MainPage: FC<Props> = (): ReactElement => {
  const dispatch = useAppDispatch();

  return (
    <div className="main-page">
      <Sidebar />
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
