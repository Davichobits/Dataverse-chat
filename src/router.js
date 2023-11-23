
let ROUTES = {};
let rootEl;

export const setRootEl = (el) => rootEl = el;

export const setRoutes = (routesObj) => {
  ROUTES = routesObj;
}

export function navigateTo(pathname, params) {
  const url = `${window.location.origin}${pathname}${params ? `?${new URLSearchParams(params)}` : ''}`;
  window.history.pushState(params, "", url);
  renderView(pathname, params);
}

function renderView(pathname, params={}) {
  const view = ROUTES[pathname] ?? ROUTES["/error"];
  const root = rootEl;
  const component = view(params);
  root.innerHTML = "";
  root.appendChild(component);
}

export function onURLChange({ currentTarget: { location } }) {
  renderView(location.pathname);
}