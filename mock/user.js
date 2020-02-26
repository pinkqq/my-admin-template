const tokens = {
  admin: { token: "admin-token" },
  editor: { token: "editor-token" }
};

const users = {
  "admin-token": {
    id: 1,
    roles: ["admin"],
    username: "admin",
    nickname: "管理员",
    avatar: "https://avatar.cdn.hecaila.com/NkHnkhlTl/H1377276V/200",
    phone: null,
    enabled: true
  },
  "editor-token": {
    id: 2,
    roles: ["editor"],
    username: "editor",
    nickname: "队员",
    avatar: "https://avatar.cdn.hecaila.com/NkHnkhlTl/H1377276V/200",
    phone: null,
    enabled: true
  }
};

export default [
  // login
  {
    url: "/login",
    type: "post",
    response: config => {
      const { username } = JSON.parse(config.body);
      const token = tokens[username];
      const userInfo = users[token];
      if (!token) {
        return {
          code: 400,
          error: { subCode: 1001, message: "用户名或者密码错误" }
        };
      } else {
        return {
          code: 0,
          data: {
            ...userInfo,
            token: token
          }
        };
      }
    }
  }
];
