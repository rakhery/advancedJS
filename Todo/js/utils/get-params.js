export function getParams(param) {
    const params = new URLSearchParams(location.search);
    return params.get(param);
  }