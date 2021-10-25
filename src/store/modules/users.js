// STATE
const state = {
  users: []
};

// GETTERS
const getters = {
  users : (state) => state.users
};

// ACTIONS
const actions = {
  async getAllUsers(ctx) {
    let recs = await fetch('https://jsonplaceholder.typicode.com/users');
    recs     = await recs.json();
    ctx.commit('setUsers', recs)
  }
};

// MUTATIONS
const mutations = {
  async setUsers(state, users) {
    state.users = Object.prototype.toString.call(users) === '[object Array]' ? users : [users];
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
