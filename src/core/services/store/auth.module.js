import ApiService from "@/core/services/api.service";
import JwtService from "@/core/services/jwt.service";
// import restaurantApi from "@/core/services/api/restaurantApi";

// action types
export const VERIFY_AUTH = "verifyAuth";
export const LOGIN = "login";
export const LOGOUT = "logout";
export const REGISTER = "register";
export const UPDATE_PASSWORD = "updateUser";

// mutation types
export const PURGE_AUTH = "logOut";
export const SET_AUTH = "setUser";
export const SET_PASSWORD = "setPassword";
export const SET_ERROR = "setError";

const state = {
  errors: null,
  user: {},
  isAuthenticated: !!JwtService.getToken()
};

const getters = {
  currentUser(state) {
    return state.user;
  },
  isAuthenticated(state) {
    return state.isAuthenticated;
  }
};

const actions = {
  [LOGIN](context, credentials) {
    return new Promise(resolve => {
      ApiService.post("login", credentials)
        .then(({ data }) => {
          context.commit(SET_AUTH, data);
          resolve(data);
        })
        .catch(({ response }) => {
          context.commit(SET_ERROR, response.data.errors);
        });
    });
  },
  [LOGOUT](context) {
    context.commit(PURGE_AUTH);
  },
  [REGISTER](context, credentials) {
    return new Promise(resolve => {
      ApiService.post("register", credentials)
        .then(({ data }) => {
          context.commit(SET_AUTH, data);
          resolve(data);
        })
        .catch(({ response }) => {
          context.commit(SET_ERROR, response.data.errors);
        });
    });
  },
  /* async */ [VERIFY_AUTH](context) {

    if (JwtService.getToken()) {

      ApiService.setHeader();

      // await restaurantApi.get('verify')
      // .then(({data}) => {
      //   // console.log(data)
      //   context.commit(SET_AUTH, data);
      // })
      // .catch(({response}) => {
        
      //   console.error(response.data);

      //   if(window.location.pathname != '/'){
      //     localStorage.clear();
      //     this.$router.go();
      //   }

      // })

    } else {

      context.commit(PURGE_AUTH);

    }

  },
  [UPDATE_PASSWORD](context, payload) {
    const password = payload;

    return ApiService.put("password", password).then(({ data }) => {
      context.commit(SET_PASSWORD, data);
      return data;
    });
  }
};

const mutations = {
  [SET_ERROR](state, error) {
    state.errors = error;
  },
  [SET_AUTH](state, data) {
    // console.log(data);
    state.isAuthenticated = true;
    state.data = data;
    state.errors = {};
    JwtService.saveToken(state.data.token);
    localStorage.setItem("user", JSON.stringify(state.data.user));
  },
  [SET_PASSWORD](state, password) {
    state.user.password = password;
  },
  [PURGE_AUTH](state) {
    state.isAuthenticated = false;
    state.user = {};
    state.errors = {};
    localStorage.clear();
  }
};

export default {
  state,
  actions,
  mutations,
  getters
};
