import Vue from 'vue';

export default {

  async putUser(id, userUpdate) {
    await Vue.prototype.$axios.post(`/rest/users/${id}`, userUpdate)
  },

  async patchUser(id, userUpdate) {
    let { data } = (await Vue.prototype.$axios.patch(`/rest/users/${id}}`, userUpdate))
    return data;
  },
  user: null,
  getUser() {
    return this.user
  },
  async login(data) {
    let resp = (await Vue.prototype.$axios.post("/rpc/login", data)).data;
    this.user = resp.session.user;
    return this.user;
  },
  async getSelf() {
    let { data } = await Vue.prototype.$axios.get("/rest/users/self")
    return data
  },
  async init() {
    if (this.user) return this.user;
    try {
      this.user = await this.getSelf()
      return this.user;
    } catch (error) {
    }
  },
  async logout() {
    await Vue.prototype.$axios.post(`/rpc/logout`)
    this.user = null;
  },
  isAuthorized(authorizedOperations) {

    if (authorizedOperations === null || authorizedOperations === undefined) {
      return true;
    }

    if (!this.getUser()) {
      return false;
    }

    return this.getUser().operations.some(op => authorizedOperations.indexOf(op) >= 0);
  },
  isAuthenticated() {
    return !!this.user;
  },
  async getAll() {
    let { data } = await Vue.prototype.$axios.get(`/rest/users`)
    return data;
  }
}
