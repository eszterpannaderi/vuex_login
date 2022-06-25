<template>
  <h1>Sikeres kijelentkezés</h1>
</template>

<script>
import store from '@/store'

export default {
    name:'logout-view',
    created(){

    let loggedInUser={
                       email: '',
                       username:'',
                       status:false
                   }
                   store.commit('setStatus',loggedInUser)

    }


}
</script>

<style>

</style>