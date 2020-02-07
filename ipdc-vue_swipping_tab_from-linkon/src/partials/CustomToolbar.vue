<template>
  <v-ons-toolbar>
    <div class="center"><slot>{{ title }}</slot></div>
  </v-ons-toolbar>
</template>

<script>
export default {
  props: ['title', 'backLabel']
};
</script>