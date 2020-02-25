import { login } from "@/api/user";
import { getToken, setToken, removeToken } from "@/utils/auth";

const state = {
  token: getToken()
};
const mutations = {
  SET_TOKEN: (state, token) => {
    state.token = token;
  },
  REMOVE_TOKEN: state => {
    state.token = "";
  }
};
const actions = {
  login({ commit }, loginInfo) {
    return login(loginInfo).then(userInfo => {
      setToken(userInfo.token);
      commit("SET_TOKEN", userInfo.token);
      return userInfo;
    });
  },
  logout({ commit }) {
    removeToken();
    commit("REMOVE_TOKEN");
    return Promise.resolve();
  }
};

export default {
  namespaced: true,
  state,
  mutations,
  actions
};
