const routes = {
  '/' : catalog,
  '/create' : create,
  '/coffee-info' : coffeeInfo,
  '/login' : login,
  '/register' : register
};

const scripts = {
  '/' : "scripts/catalog.js",
  '/create' : "",
  '/coffee-info' : "",
  '/login' : "",
  '/register' : ""
}

function addScript(pathname) {
  var scriptSrc = scripts[pathname];
  if (script != "") {
    var script = document.createElement("script");
    script.src = scriptSrc;
    rootDiv.appendChild(script);
  }
}

const rootDiv = document.getElementById('root');
rootDiv.innerHTML = routes[window.location.pathname];
addScript(window.location.pathname);

const onNavigate = (pathname) => {
  window.history.pushState(
    {},
    pathname,
    window.location.origin + pathname
  );
  rootDiv.innerHTML = routes[pathname];
  addScript(pathname);
}

window.onpopstate = () => {
  rootDiv.innerHTML = routes[window.location.pathname]
  addScript(window.location.pathname);
}
