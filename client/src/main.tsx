import ReactDOM from "react-dom/client";

import App from "../src/App.tsx";
import Context from "./context/context.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Context>
    <App />
  </Context>
);
