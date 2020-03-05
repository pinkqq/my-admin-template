import { login, getInfo } from "@/api/user";
import { getToken, setToken, removeToken } from "@/utils/auth";
import { resetRouter } from "@/router";

const getDefaultState = () => {
  return { token: getToken(), roles: [] };
};

const state = getDefaultState();

const mutations = {
  RESET_STATE: state => {
    Object.assign(state, getDefaultState());
  },
  SET_ROLES: (state, roles) => {
    state.roles = roles;
  },
  SET_TOKEN: (state, token) => {
    state.token = token;
  },
  REMOVE_TOKEN: state => {
    state.token = "";
  }
};
const actions = {
  login({ commit }, loginInfo) {
    return login(loginInfo).then(data => {
      setToken(data.token);
      commit("SET_TOKEN", data.token);
      return data;
    });
  },
  getInfo({ commit, state }) {
    return getInfo(state.token).then(userInfo => {
      commit("SET_ROLES", userInfo.roles);
      return userInfo;
    });
  },
  logout({ commit }) {
    removeToken();
    resetRouter();
    commit("RESET_STATE");
    return Promise.resolve();
  },
  resetToken({ commit }) {
    return new Promise(resolve => {
      removeToken();
      commit("REMOVE_TOKEN", "");
      resolve();
    });
  }
};

export default {
  namespaced: true,
  state,
  mutations,
  actions
};
