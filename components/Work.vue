<template>
  <v-layout column align-center justify-center class="pa-2 ma-2 elevation-4">
    <v-avatar size="120px" color="purple">
      <v-icon dark>{{ work.icon }}</v-icon>
    </v-avatar>
    <h2>{{ work.title }}</h2>
    <p class="text-xs-center">
      {{ work.description }}
    </p>
  </v-layout>
</template>
<script>
export default {
  props: {
    work: {
      type: Object,
      required: true
    }
  }
}
</script>
