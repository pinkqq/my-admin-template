import Mock from "mockjs";

import user from "./user";

const mocks = [...user];

const responseFake = (url, type, respond) => {
  return Mock.mock(
    new RegExp(`${process.env.VUE_APP_BASE_API}${url}`),
    type || "get",
    options => {
      console.log("request invoke:" + options.url);
      return respond instanceof Function ? respond(options) : respond;
    }
  );
};

mocks.map(route => {
  return responseFake(route.url, route.type, route.response);
});
