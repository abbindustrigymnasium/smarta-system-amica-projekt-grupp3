<template>
  <q-layout view="lHh Lpr lFf" class="column flex-center">
    <div class="column flex-center">
      <img class="q-mb-lg" style="width: 150px; height: 150px" src="data:image/png;base64,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">
      <div id="form" class="column flex-center">
        <h4 class="q-ma-sm" style="font-weight: 800">Food & Co.</h4>
        <h6 class="q-ma-sm">Admin</h6>
        <q-input class="q-ma-sm" outlined v-model="username" label="Admin Username" style="width: 300px"/>
        <q-input type="password" class="q-ma-sm" outlined v-model="password" label="Password" style="width: 300px"/>
        <q-btn class="q-ma-sm" :loading="loading" color="accent" rounded style="width: 200px" @click="login" label="Login" />
        <h6 class="q-ma-sm" style="font-size: 15px">Not an Admin? <a href="http://foodandco.se" style="color: blue">Click here</a></h6>
      </div>
    </div>
    <q-page-sticky v-if="loginError" position="bottom" class="flex flex-center">
      <p class="bg-red text-white q-pa-sm q-pl-md" style="border-radius: 5px; box-shadow: #000 0 0px 15px -7px">Login information does not match any account<q-btn flat class="q-ma-sm" color="white" label="OK" @click="loginError=false"/></p>
    </q-page-sticky>
  </q-layout>
  
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'Login',
  data () {
    return {
      username: '',
      password: '',
      loginError: false,
      loading: false
    }
  },
  methods: {
    ...mapActions('auth', ['loginUser']),
    login() {
      this.loading = true
      let user = { email: this.username, password: this.password }
      // console.log(user)
      this.loginUser(user)
        .then(u => {
          this.$router.push('/')
        })
        .catch(error => {
          console.error('Email-Password login:', error)
          this.loginError = true
          this.loading = false
        })
    }
  }
}
</script>

<style>

</style>
