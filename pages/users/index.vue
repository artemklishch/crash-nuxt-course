<template>
  <section>
    <h1>{{ pageTitle }}</h1>
    <ul>
      <li v-for="user of users" :key="user.id">
        <a href="#" @click.prevent="openUser(user)">{{ user.name }}</a>
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  async fetch({ store }) {
    if (store.getters['users/usersGetter'].length === 0) {
      await store.dispatch("users/fetchFunc");
    }
  },
  // async asyncData({ $axios }) {
  //   const users = await $axios.$get(
  //     "https://jsonplaceholder.typicode.com/users"
  //   );
  //   return { users };
  // },
  data: () => ({
    pageTitle: "Users page",
  }),
  computed: {
    users() {
      return this.$store.getters['users/usersGetter'];
    },
  },
  // async mounted() {
  //   this.users = await this.$axios.$get(
  //     "https://jsonplaceholder.typicode.com/users"
  //   );
  // },
  methods: {
    openUser(user) {
      this.$router.push("/users/" + user.id);
    },
  },
};
</script>