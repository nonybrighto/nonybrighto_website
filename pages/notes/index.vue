<template>
  <v-container>
    <v-layout v-if="notes" column>
      <v-timeline align-top :dense="dense">
        <v-timeline-item
          v-for="(note, i) in notes"
          :key="i"
          :color="getTagColor(note.tag)"
          :icon="getTagIcon(note.tag)"
          fill-dot
        >
          <v-card :color="getTagColor(note.tag)" dark>
            <v-card-title class="title">{{ note.title }}</v-card-title>
            <v-card-text class="white black--text">
              <p>{{ note.content }}</p>
              <span class="grey--text">{{ note.createdAt | daysAgoFb }}</span>
            </v-card-text>
          </v-card>
        </v-timeline-item>
      </v-timeline>
    </v-layout>
    <v-layout v-if="loading">
      <span> Loading ...... </span>
    </v-layout>
  </v-container>
</template>
<script>
import { mapState } from 'vuex'
export default {
  data() {
    return {
      isHydrated: false,
      like: false
    }
  },
  computed: {
    ...mapState({
      loading: state => state.notes.loading,
      error: state => state.notes.error,
      notes: state => state.notes.notes
    }),
    dense() {
      return this.isHydrated ? this.$vuetify.breakpoint.xsOnly : false
    }
  },
  fetch({ store, params }) {
    return store.dispatch('notes/getNotes')
  },
  mounted() {
    this.isHydrated = true
  },
  methods: {
    getTagColor: function(tag) {
      return 'pink'
    },
    getTagIcon: function(tag) {
      return 'account_circle'
    }
  }
}
</script>
