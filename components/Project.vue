<template>
  <v-card class="ma-1">
    <v-img :src="require('~/assets/images/image.png')" height="260px"></v-img>
    <v-card-title>
      <div>{{ project.name }}</div>
      <div class="grey--text">{{ project.description }}</div>
    </v-card-title>
    <v-divider light></v-divider>
    <v-card-actions class="pa-3">
      <v-chip color="blue">Mobile</v-chip>
      <v-spacer></v-spacer>
      <div>
        <v-btn flat color="primary">Primary</v-btn>
      </div>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  props: {
    project: {
      type: Object,
      required: true
    }
  }
}
</script>
