<template>
  <div class="row">
      <div class="col-12">
          <h1 class="display-4 text-center my-5">Bejelentkezés</h1>
      </div>
      <div class="col-12 col-md-4 mx-auto mb-5">
          <form @submit.prevent="onLogin" >
              <div class="form-floating mb-3">
  <input v-model="loginForm.email" type="email" class="form-control" id="floatingInput" placeholder="name@example.com">
  <label for="floatingInput">E-mail</label>
</div>
<div class="form-floating">
  <input v-model="loginForm.password" type="password" class="form-control" id="floatingPassword" placeholder="Password">
  <label  for="floatingPassword">Jelszó</label>
</div>
<div class="my-3 mb-5">
    <button type="submit" class="btn btn-primary w-100">Bejelentkezés</button>
</div>
          </form>
          <div v-if="alertMessage" class="alert alert-danger" role="alert">
  {{alertMessage}}
</div>

      </div>
  </div>
</template>

<script>
import store from '@/store'
export default {
    name:'login-view',
    data(){
        return{
            loginForm:{
                email:'',
                password:''
            },
            alertMessage:''
        }
    },
    methods:{
        onLogin(){
            //console.log(this.loginForm)
            let loggedInUser={
                       email: '',
                       username:'',
                       status:false
                   }
                   store.commit('setStatus',loggedInUser)
                   this.alertMessage=''


            if(this.loginForm.email == 'a@a' &&
               this.loginForm.password == 'Aa12345'){
                   let loggedInUser={
                       email: this.loginForm.email,
                       username:'Józsi',
                       status:true
                   }
                   store.commit('setStatus',loggedInUser)
               } else{
                   this.alertMessage='Sikertelen belépés!'

               }
        }
    },

}
</script>

<style>

</style>