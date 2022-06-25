<template>
  <div class="container-fluid nav-bg-color">
    <nav class="navbar navbar-expand-lg navbar-light">
      <div class="container-fluid">
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li
              class="nav-item"
              v-for="(menuItem, index) in menuItems"
              :key="index"
              v-show="menuItem.loggedInStatus"
            >
              <div v-if="menuItem.to">
                <router-link class="nav-link" :to="menuItem.to">{{
                  menuItem.title
                }}</router-link>
              </div>
              <div v-else>
                <a href="#" class="nav-link" @click="handleFunctionCall(menuItem.link)">{{ menuItem.title }}</a>
              </div>
            </li>
          </ul>
          <div v-if="$store.state.user.username">
            Bejelentkezve: {{ $store.state.user.username }}
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
import store from "@/store";
export default {
  name: "app-nav",
  data() {
    return {};
  },
  computed: {
    menuItems() {
      return [
        { title: "Nyitó oldal", to: "/", loggedInStatus: true, link: false },
        {
          title: "Bejelentkezés",
          to: "/bejelentkezes",
          loggedInStatus: !this.getloggedInStatus,
          link: false,
        },
        {
          title: "Profil",
          to: "/profil",
          loggedInStatus: this.getloggedInStatus,
          link: false,
        },
        {
          title: "Kijelentkezés",
          to: "/kijelentkezes",
          loggedInStatus: this.getloggedInStatus,
          link: "onLogout",
        },
      ];
    },
    getloggedInStatus() {
      return store.state.user.status;
    },
  },

  methods: {
    onLogout() {
      let loggedInUser = {
        email: "",
        username: "",
        status: false,
      };
      store.commit("setStatus", loggedInUser);
      this.$router.push('/')
    },
    handleFunctionCall(functionName){
      this[functionName]()
    }
  },
};
</script>

<style>
</style>