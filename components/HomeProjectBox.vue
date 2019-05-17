<template>
  <v-layout
    row
    align-center
    justify-center
    wrap
    class="ma-3 elevation-4"
    :class="{
      'ml-5': $vuetify.breakpoint.mdAndUp,
      'mr-5': $vuetify.breakpoint.mdAndUp
    }"
  >
    <v-flex xs12 sm6 :order-sm1="left">
      <v-img
        :src="require('~/assets/images/image.png')"
        style="width:100%,height:auto"
      ></v-img>
    </v-flex>
    <v-flex xs12 sm6 class="pa-2">
      <v-layout column justify-center align-center>
        <h2 :class="{ 'display-1': $vuetify.breakpoint.mdAndUp }">
          The Project title
        </h2>
        <p class="text-xs-center">
          The description of the project Reprehenderit animi sunt ut molestias.
          Eius eum ex aspernatur sapiente inventore necessitatibus. Similique
          reprehenderit quis consequuntur eum sit nemo reiciendis. Modi
          doloremque id aut reiciendis eum delectus non placeat eos. Delectus
          sint suscipit illum accusamus et.
        </p>
        <div>
          <v-btn flat color="primary">VIEW PROJECT</v-btn>
        </div>
      </v-layout>
    </v-flex>
  </v-layout>
</template>
<script>
export default {
  props: {
    project: {
      type: Object,
      required: true
    },
    left: {
      type: Boolean,
      default: true
    }
  }
}
</script>
