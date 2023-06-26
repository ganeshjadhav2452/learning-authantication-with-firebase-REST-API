import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import AuthcontextProvider from "./components/authContext/AuthcontextProvider";
import "./index.css";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <BrowserRouter>
  <AuthcontextProvider>
      <App />
  </AuthcontextProvider>
    </BrowserRouter>
);
