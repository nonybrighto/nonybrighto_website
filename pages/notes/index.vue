<template>
  <v-container>
    <PageHeader title="Notes" />
    <v-layout v-if="hasNotes()" column>
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
    <v-layout
      v-if="loading"
      column
      align-center
      justify-center
      class="mt-4 subheading text-xs-center font-italic"
    >
      <v-progress-circular
        indeterminate
        :color="$vuetify.theme.primary"
      ></v-progress-circular>
    </v-layout>
  </v-container>
</template>
<script>
import { mapState } from 'vuex'
import PageHeader from '~/components/PageHeader'

export default {
  components: {
    PageHeader
  },
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
    },

    hasNotes() {
      return this.notes.length > 0
    }
  }
}
</script>
