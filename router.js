const routes = {
  '/' : catalog,
  '/catalog' : catalog,
  '/create' : create,
  '/coffee-info' : coffeeInfo,
  '/login' : login,
  '/register' : register,
  '/404' : notFound
};

const scripts = {
  '/' : "scripts/catalog.js",
  '/catalog' : "scripts/catalog.js",
  '/create' : "scripts/create-coffee.js",
  '/coffee-info' : "scripts/coffee-info.js",
  '/login' : "scripts/auth.js",
  '/register' : "scripts/auth.js"
}

const authRoutes = ['/create'];

function getPathWithoutParams(pathname) {
  let startParamsIndex = pathname.indexOf('?');
  if (startParamsIndex != -1) {
    return pathname.slice(0, startParamsIndex);
  }
  return pathname;
}

function addScript(pathname) {
  var scriptSrc = scripts[pathname];
  var script = document.createElement("script");
  script.src = scriptSrc;
  rootDiv.appendChild(script);
}

async function addContent(pathname) {
  if (authRoutes.includes(pathname)) {
    let isAuth = await authService.isAuthenticated();
    if (!isAuth) {
      onNavigate('/404');
      return;
    }
  }
  pathname = getPathWithoutParams(pathname);
  if (pathname in routes) {
    rootDiv.innerHTML = routes[pathname];
    if (pathname in scripts) {
      addScript(pathname);
    }
  }
  else {
    onNavigate('/404');
  }
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
