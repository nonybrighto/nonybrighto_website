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
      <v-img :src="project.iconImageUrl" style="width:100%,height:auto"></v-img>
    </v-flex>
    <v-flex xs12 sm6 class="pa-2">
      <v-layout column justify-center align-center>
        <h2 :class="{ 'display-1': $vuetify.breakpoint.mdAndUp }">
          {{ project.name }}
        </h2>
        <p class="text-xs-center">
          {{ project.description }}
        </p>
        <div>
          <v-btn flat color="primary" :to="'/projects/' + nameSlug"
            >VIEW PROJECT</v-btn
          >
        </div>
      </v-layout>
    </v-flex>
  </v-layout>
</template>
<script>
import { slugify } from '../helpers/string-helper'
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
  },
  computed: {
    nameSlug() {
      return slugify(this.project.name)
    }
  }
}
</script>
