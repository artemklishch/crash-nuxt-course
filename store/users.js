export const state = () => ({
  users: []
});

export const mutations = {
  setUsers(state, users) {
    state.users = users;
  }
};

export const actions = {
  async fetchFunc({ commit }) {
    const users = await this.$axios.$get(
      "https://jsonplaceholder.typicode.com/users"
    );
    commit("setUsers", users);
  }
};

export const getters = {
  usersGetter: s => s.users
};
