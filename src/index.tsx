import ReactDOM from "react-dom/client";

import App from "./app/App";

import "./shared/styles/index.scss";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLDivElement
);

root.render(<App />);
