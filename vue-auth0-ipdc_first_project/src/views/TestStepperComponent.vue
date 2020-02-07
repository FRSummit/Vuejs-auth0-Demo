<template>
  <form class="form" @submit.prevent="onSubmit">
    <div class="step-1">
      <label>Step 1</label>
      <input label="Name" name="name" v-model="name"/>
      <input label="E-mail" name="email" v-model="email"/>

      <v-btn class="mr-4" @click="next_step1">Next</v-btn>
      <v-btn @click="clear_step1">clear</v-btn>
    </div>

    <div class="step-2 hide">
      <label>Step 2</label>
      <input label="Phone" name="phone" v-model="phone"/>
      <input label="Address" name="address" v-model="address">/>

      <v-btn class="mr-4" @click="next_step2">Next</v-btn>
      <v-btn @click="clear_step2">clear</v-btn>
    </div>

    <div class="step-3 hide">
      <label>Step 3</label>
      <input label="State" name="state" v-model="state"/>
      <input label="Country" name="country" v-model="country"/>

      <v-btn class="mr-4" @click="submit">submit</v-btn>
      <v-btn @click="clear_submit">clear</v-btn>
    <button type="submit" class="waves-effect waves-light btn" style="background-color: #f5f5f5; height: 36px; 
                                    min-width: 64px; padding: 0 16px; will-change: box-shadow; font-size: 0.875rem;">Save</button>
    </div>
  </form>
</template>

<script>
export default {
  name: 'stepper_form',

  components: {
  },
  data () {
    return {
      name: '',
      email: '',
      phone: '',
      address: '',
      state: '',
      country: ''
    }
  },
  methods:{
    next_step1() {
      event.target.parentElement.parentElement.classList.add('hide');
      event.target.parentElement.parentElement.nextSibling.className = 'step-2';
    },
    clear_step1() {
      console.log('clear 1');
      this.data =  name;
      console.log(this.data);
    },
    next_step2() {
      event.target.parentElement.parentElement.classList.add('hide');
      event.target.parentElement.parentElement.nextSibling.className = 'step-3';
    },
    clear_step2() {
      console.log('clear 2');
    },
    submit() {
      console.log('submit');
      console.log(event.target.parentElement.parentElement.className);
    },
    clear_submit() {
      console.log('clear Submit');
    },
    onSubmit() {
      const form_data = {
        name: this.name,
        email: this.email,
        phone: this.phone,
        address: this.address,
        state: this.state,
        country: this.country
      };
      console.log(form_data);
    }
  },
  created() {

  },
}
</script>

<style scoped>
.hide {
  display: none;
}

</style>