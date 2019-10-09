import apisauce from "apisauce";

function objToQueryString(obj) {
  const keyValuePairs = [];
  for (let i = 0; i < Object.keys(obj).length; i += 1) {
    keyValuePairs.push(
      `${encodeURIComponent(Object.keys(obj)[i])}=${encodeURIComponent(
        Object.values(obj)[i]
      )}`
    );
  }
  return `?${keyValuePairs.join("&")}`;
}

const create = (baseURL = "https://randomuser.me/api/0.4/") => {
  const api = apisauce.create({
    baseURL,
    headers: {
      "Cache-Control": "no-cache"
    },
    timeout: 10000
  });

  const getPeople = () => api.get('?results=5');

  return {
    getPeople
  };
};

export default {
  create
};
