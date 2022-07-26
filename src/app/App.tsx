import { Provider } from "react-redux";

import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import { LoginPage, MainPage, Page404, RegistrationPage } from "src/pages";

import "src/shared/lib/i18n";

import { setupStore } from "./store";

import { PrivateRoute, PublicRoute } from "./providers";

function App() {
  return (
    <Provider store={setupStore()}>
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
    </Provider>
  );
}

export default App;
