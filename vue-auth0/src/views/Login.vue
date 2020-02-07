<template>
  <div>
    <div class="main-section">
      <div class="img-section">
        <img src="../assets/images/s5_logo_inverted.png" alt="s5_logo_inverted">
        <p>Welcome to IPDC Reporting System</p>
      </div>
      <div class="btn-section">
        <v-btn  @click="auth0Login()" style="background: #3086FF; color: #fff">
          <i class="fas fa-sign-in-alt fa-1x"></i>
          <span style="color: #fff;">Please sign in</span>
        </v-btn>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    name: 'Login',
    methods: {
        auth0Login(){
            this.$store.dispatch('auth0Login');

            console.log('we are in auth0Login');
        },
    },
    created() {
      // this.auth0Login();
    }
}
</script>

<style scoped>
.main-section {
  margin-top: 50px;
  text-align: center;
}
.img-section {
  background: #F8F9FB;
}
img {
  width: 100%;
}
p {
  margin: 0;
  font-size: 18px;
}
.btn-section {
  margin: 50px 0;
}
</style>