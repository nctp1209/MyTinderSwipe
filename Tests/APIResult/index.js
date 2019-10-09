export default {
  getPeople: () => {
    const apiResult = require("../APIResult/GetPeopleResult.json");
    return {
      ok: true,
      data: apiResult
    };
  }
};
