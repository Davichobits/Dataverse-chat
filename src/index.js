import { Home } from "./pages/Home/Home.js";
import { Details } from "./pages/Details/Details.js";
import { Error } from "./pages/Error/Error.js";
import { setRootEl, setRoutes, onURLChange } from "./router.js";

const routes = {
  "/": Home,
  "/details": Details,
  "/error": Error,
};

setRoutes(routes);

window.addEventListener("DOMContentLoaded", (event) => {
  setRootEl(document.querySelector("#root"));
  onURLChange(event);
});

window.onpopstate = onURLChange;