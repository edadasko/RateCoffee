function getURLParam(param) {
  let queryString = window.location.search;
  let urlParams = new URLSearchParams(queryString);
  let value = urlParams.get(param);
  return value;
}
