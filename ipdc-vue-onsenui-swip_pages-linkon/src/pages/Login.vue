<template>
  <v-ons-page>
    <img class="ipdc-logo login-logo" src="../assets/ipdc.jpg" alt="IPDC Logo">
    <div class="login">
      <v-ons-card class="card-radius">
        <v-ons-list>
          <v-ons-list-item class="input-items">
            <div class="left">
              <ons-icon icon="md-face" class="list-item__icon login-icon"></ons-icon>
            </div>
            <label>
              <v-ons-input id="username" placeholder="Username" type="text" v-model="username"></v-ons-input>
            </label>
          </v-ons-list-item>
          <v-ons-list-item class="input-items">
            <div class="left">
                <i class="icon ion-md-lock login-icon lock-icon-size"></i>
                </div>
                <div class="center">
                <v-ons-input id="password" placeholder="Password" type="password" v-model="password"></v-ons-input>
            </div>
          </v-ons-list-item>
        </v-ons-list>
        <!-- <div>
          {{ usernameApi }}
          {{ passwordApi }}
        </div> -->
      </v-ons-card>
      <v-ons-button class="button loginbtn" @click="login">
        Sign In
      </v-ons-button>
    </div>
  </v-ons-page>
</template>

<script>
import axios from 'axios'
import Splitter from '../AppSplitter.vue'

export default {
  data() {
    return {
      username: '',
      password: '',
      usernameApi: '',
      passwordApi: ''
    }
  },
  mounted() {
    axios
        .get('https://localhost:44397/api/users/1')
        .then(response => (this.usernameApi = response.data.Username, this.passwordApi = response.data.Password))
  },
  methods: {
    login() {
      if(this.username == this.usernameApi && this.password == this.passwordApi)
      {
        this.$store.commit('navigator/push', Splitter);
      }
      else
      {
        this.$alert("Invalid username and password");
        //alert('Invalid username and password');
        this.username = '';
        this.password = '';
      }
    }
  }
}
</script>