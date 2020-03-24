import { param2Obj } from "@/utils";

const tokens = {
  admin: { token: "admin-token" },
  editor: { token: "editor-token" },
};

const users = {
  "admin-token": {
    id: 1,
    roles: ["admin"],
    username: "admin",
    nickname: "管理员",
    avatar: "https://avatar.cdn.hecaila.com/NkHnkhlTl/H1377276V/200",
    phone: null,
    enabled: true,
  },
  "editor-token": {
    id: 2,
    roles: ["editor"],
    username: "editor",
    nickname: "队员",
    avatar: "https://avatar.cdn.hecaila.com/NkHnkhlTl/H1377276V/200",
    phone: null,
    enabled: true,
  },
};

export default [
  // login
  {
    url: "/login",
    type: "post",
    response: (config) => {
      const { username } = JSON.parse(config.body);
      const token = tokens[username];
      if (!token) {
        return {
          code: 400,
          error: { subCode: 1001, message: "用户名或者密码错误" },
        };
      } else {
        return {
          code: 0,
          data: token,
        };
      }
    },
  },
  {
    url: "/info.*",
    type: "get",
    response: (config) => {
      const query = param2Obj(config.url);
      const { token } = query;
      const info = users[token];
      if (!info) {
        return {
          code: 400,
          error: { subCode: 1001, message: "相关用户不存在" },
        };
      }
      return {
        code: 0,
        data: info,
      };
    },
  },
];
