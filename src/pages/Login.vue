<template>
  <!-- if you want automatic padding use "layout-padding" class -->
  <div class="layout-padding" @keyup.enter="login">
    <div class="full-width text-center">
      <img src="~/assets/quasar-logo-full.svg" style="max-width: 200px;"/>
    </div>
    <q-input type="text" :float-label="$t('USERNAME')" v-model="username"></q-input>
    <q-input :float-label="$t('PASSWORD')" type="password" v-model="password"></q-input>

    <q-btn :loader="isInLogin" big color="primary" :disabled="!username || !password" class="full-width" @click="login">
      {{$t('LOGIN')}}
    </q-btn>
    <q-item class="text-center" v-if="error">
      <q-item-main class="text-negative">{{$t('USERNAME_OR_PASSWORD_INVALID')}}</q-item-main>
    </q-item>
  </div>
</template>

<script>
  import UserService from 'src/services/UserService';

  export default {
    data() {
      return {
        username: "",
        password: "",
        isInLogin: false,
        error: false
      }
    },
    methods: {
      async login(e, done) {
        this.isInLogin = true
        try {
          await UserService.login({
            username: this.username,
            password: this.password
          });

          this.isInLogin = false
          this.$router.replace('/');

          done && done();
        } catch (error) {
          this.isInLogin = false
          this.error = true
          console.log(error);
        }
      }
    }
  }
</script>

<style>

</style>
