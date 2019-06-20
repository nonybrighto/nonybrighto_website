<template>
  <v-layout
    column
    align-center
    justify-center
    class="pa-2 ma-2 elevation-4 work-card"
    :style="[{ ...work.style }, { maxWidth: reduceWidth ? '200px' : '300px' }]"
  >
    <v-icon dark :size="reduceWidth ? 100 : 130">{{ work.icon }}</v-icon>
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
  },
  data() {
    return {
      isHydrated: false
    }
  },
  computed: {
    reduceWidth() {
      return this.isHydrated ? this.$vuetify.breakpoint.mdAndDown : false
    }
  },
  fetch({ store }) {
    return store.dispatch('projects/getHomeProjects')
  },
  mounted() {
    this.isHydrated = true
  }
}
</script>

<style scoped>
.work-card {
  border-radius: 20px;
}
</style>
