<template>
  <v-layout row justify-center class="ma-2">
    <h1 class="display-2">{{ title }}</h1>
  </v-layout>
</template>
<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    }
  }
}
</script>
