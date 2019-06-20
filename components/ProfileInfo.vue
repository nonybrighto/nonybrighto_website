<template>
  <v-layout row class="pl-2">
    <v-icon small>{{ info.icon }}</v-icon>
    <span class="pl-1 pr-1 font-weight-bold">{{ info.title }}:</span>
    <span>{{ info.value }}</span>
  </v-layout>
</template>
<script>
export default {
  props: {
    info: {
      type: Object,
      required: true
    }
  }
}
</script>
