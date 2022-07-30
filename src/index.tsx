import ReactDOM from "react-dom/client";

import { Provider } from "react-redux";

import App from "./app/App";

import { setupStore } from "./app/store";

import "./shared/styles/index.scss";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLDivElement
);

root.render(
  <Provider store={setupStore()}>
    <App />
  </Provider>
);
