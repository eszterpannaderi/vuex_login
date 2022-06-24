<template>
  <div class="container-fluid nav-bg-color">
      <nav class="navbar navbar-expand-lg navbar-light ">
  <div class="container-fluid">
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item"
        v-for="(menuItem ,index) in menuItems" :key="index">
          <router-link class="nav-link" :to="menuItem.to">{{menuItem.title}}</router-link>
        </li>
      </ul>

    </div>
  </div>
</nav>
  </div>
</template>

<script>
export default {
    name:'app-nav',
    data(){
        return{
            menuItems:[
                {title:'Nyitó oldal', to:'/'},
                {title:'Bejelentkezés', to:'/bejelentkezes'},
                {title:'Profil', to:'/profil'},
                {title:'Kijelentkezés', to:'/kijelentkezes'},
            ]
        }
    }

}
</script>

<style>

</style>