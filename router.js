const routes = {
  '/' : catalog,
  '/catalog' : catalog,
  '/create' : create,
  '/coffee-info' : coffeeInfo,
  '/login' : login,
  '/register' : register,
  '/error' : error
};

const scripts = {
  '/' : "scripts/catalog.js",
  '/catalog' : "scripts/catalog.js",
  '/create' : "scripts/create-coffee.js",
  '/coffee-info' : "scripts/coffee-info.js",
  '/login' : "scripts/auth.js",
  '/register' : "scripts/auth.js",
  '/error' : ""
}

const authRoutes = ['/create'];

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

async function addContent(pathname) {
  let isAuth = await authService.isAuthenticated();
  console.log('add content: ' + isAuth);
  if (authRoutes.includes(pathname)) {
    if (!isAuth) {
      onNavigate('/error');
      return;
    }
  }
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
