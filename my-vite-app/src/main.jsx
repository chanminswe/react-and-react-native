import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import PermissionProvider from "./react-class/ch-3/exercise/PermissionProvider.jsx";

createRoot(document.getElementById("root")).render(
  <PermissionProvider>
    <App />
  </PermissionProvider>
);
