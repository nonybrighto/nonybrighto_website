<template>
  <v-timeline align-top :dense="$vuetify.breakpoint.xsOnly">
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
          <span class="grey--text">{{ note.createdAt | daysAgo }}</span>
        </v-card-text>
      </v-card>
    </v-timeline-item>
  </v-timeline>
</template>
<script>
export default {
  data() {
    return {
      notes: [
        {
          title: 'The title of the note',
          content: `Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola
            imperdiet nec ut, sed euismod convenire principes at. Est et nobis
            iisque percipit, an vim zril disputando voluptatibus, vix an
            salutandi sententiae.`,
          tag: 'Programming',
          createdAt: '2008-09-15T15:53:00'
        },
        {
          title: 'The title of the note',
          content: `Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola
            imperdiet nec ut, sed euismod convenire principes at. Est et nobis
            iisque percipit, an vim zril disputando voluptatibus, vix an
            salutandi sententiae.`,
          tag: 'Personal',
          createdAt: '2018-09-15T15:53:00'
        },
        {
          title: 'The title of the note',
          content: `Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola
            imperdiet nec ut, sed euismod convenire principes at. Est et nobis
            iisque percipit, an vim zril disputando voluptatibus, vix an
            salutandi sententiae.`,
          tag: 'Programming',
          createdAt: '2008-09-15T15:53:00'
        },
        {
          title: 'The title of the note',
          content: `Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola
            imperdiet nec ut, sed euismod convenire principes at. Est et nobis
            iisque percipit, an vim zril disputando voluptatibus, vix an
            salutandi sententiae.`,
          tag: 'Programming',
          createdAt: '2008-09-15T15:53:00'
        }
      ]
    }
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
