import { useEffect } from "react";

import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import { useAppDispatch, useAppSelector } from "src/shared/hooks";

import { accountSlice, fetchGetAccountAction } from "src/shared/store/slices";

import { LoginPage, MainPage, Page404, RegistrationPage } from "src/pages";

import "src/shared/lib/i18n";

import { PrivateRoute, PublicRoute } from "./providers";

const { resetStore } = accountSlice.actions;

function App() {
  const dispatch = useAppDispatch();

  const { token } = useAppSelector(({ auth }) => auth);

  const { account } = useAppSelector(({ account }) => account);

  useEffect(() => {
    if (token && !account) {
      dispatch(fetchGetAccountAction());
    } else if (account && !token) {
      dispatch(resetStore());
    }
  }, [token, account, dispatch]);

  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<PrivateRoute />}>
            <Route path="/" element={<Navigate replace to="main" />} />
            <Route path="main" element={<MainPage />} />
          </Route>

          <Route path="login" element={<PublicRoute />}>
            <Route path="/login" element={<LoginPage />} />
          </Route>

          <Route path="registration" element={<PublicRoute />}>
            <Route path="/registration" element={<RegistrationPage />} />
          </Route>

          <Route path="*" element={<Page404 />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
