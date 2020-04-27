const routes = {
  '/' : catalog,
  '/create' : create,
  '/coffee-info' : coffeeInfo,
  '/login' : login,
  '/register' : register
};

const scripts = {
  '/' : "scripts/catalog.js",
  '/create' : "scripts/create-coffee.js",
  '/coffee-info' : "scripts/coffee-info.js",
  '/login' : "",
  '/register' : ""
}

function getPathWithoutParams(pathname) {
  let indexOfSecondSlash = pathname.indexOf('?');
  if (indexOfSecondSlash != -1) {
    return pathname.slice(0, indexOfSecondSlash);
  }
  return pathname;
}

function addScript(pathname) {
  pathname = getPathWithoutParams(pathname);
  var scriptSrc = scripts[pathname];
  if (scriptSrc != "") {
    var script = document.createElement("script");
    script.src = scriptSrc;
    rootDiv.appendChild(script);
  }
}

function addContent(pathname) {
  pathname = getPathWithoutParams(pathname);
  rootDiv.innerHTML = routes[pathname];
  addScript(pathname);
}

const onNavigate = (pathname) => {
  window.history.pushState(
    {},
    pathname,
    window.location.origin + pathname
  );
  addContent(pathname);
}

window.onpopstate = () => {
  addContent(window.location.pathname);
}

const rootDiv = document.getElementById('root');
addContent(window.location.pathname);
