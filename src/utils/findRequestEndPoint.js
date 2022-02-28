export const findRequestEndPoint = (pathname, requests) => {
  let routeObject = {};

  requests.map((e) => {
    if (e.name === pathname) {
      return (routeObject = { name: e.name, url: e.url });
    } else {
      return (routeObject = { name: "*" });
    }
  });

  return routeObject;
};
