<template>
  <div>
    <v-btn large color="primary" :href="link" target="_blank">{{ text }}</v-btn>
  </div>
</template>
<script>
export default {
  props: {
    link: {
      type: String,
      required: true
    },
    text: {
      type: String,
      required: true
    }
  }
}
</script>
