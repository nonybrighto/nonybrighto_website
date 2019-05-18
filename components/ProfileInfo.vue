<template>
  <v-layout row>
    <v-icon>{{ info.icon }}</v-icon>
    <span class="pl-1">{{ info.title }}:</span>
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
