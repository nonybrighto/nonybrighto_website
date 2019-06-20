<template>
  <v-app class="app" dark>
    <Header />
    <v-content>
      <nuxt />
    </v-content>
    <v-footer :fixed="true" app>
      <span>&copy; 2019</span>
    </v-footer>
  </v-app>
</template>

<script>
import Header from '../components/Header'
export default {
  components: {
    Header
  }
}
</script>
<style>
.theme--dark.application {
  background: linear-gradient(to bottom right, #181229, rgb(41, 3, 37));
  color: #fff;
}

.theme--dark.v-navigation-drawer {
  background: linear-gradient(to bottom right, #181229, rgb(41, 3, 37));
}
</style>
