import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import GlobalStyles from "./GlobalStyles";
import App from "./components/App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <BrowserRouter basename="/tweetomania">
      <App />
      <GlobalStyles />
    </BrowserRouter>
  </StrictMode>
);