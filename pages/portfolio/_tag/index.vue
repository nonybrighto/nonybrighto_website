<template>
  <v-layout column align-center>
    <h2>Portfolio</h2>
    <p>These are the projects that have been worked on recently</p>
    <v-layout row>
      <v-chip
        v-for="platform in platforms"
        :key="platform.name"
        :color="platform.color"
        text-color="white"
        @click="getProjectByTag(platform.name)"
      >
        <v-avatar>
          <v-icon>{{ platform.icon }}</v-icon>
        </v-avatar>
        {{ platform.name | capitalize }}
      </v-chip>
    </v-layout>
    <v-layout row wrap>
      <v-chip
        v-for="tag in tags"
        :key="tag.id"
        text-color="white"
        @click="getProjectByTag(tag.name)"
      >
        {{ tag.name }}
      </v-chip>
    </v-layout>
    <v-container fluid>
      <v-layout row wrap>
        <v-flex v-for="project in projects" :key="project.id" xs12 sm6 md4>
          <Project :project="project" />
        </v-flex>
      </v-layout>
    </v-container>
  </v-layout>
</template>

<script>
import Project from '~/components/Project.vue'
import { mapState } from 'vuex'
export default {
  components: {
    Project
  },
  data() {
    return {
      happy: true,
      platforms: [
        {
          name: 'web',
          icon: 'account_circle',
          color: 'pink'
        },
        {
          name: 'mobile',
          icon: 'account_circle',
          color: 'purple'
        },
        {
          name: 'desktop',
          icon: 'account_circle',
          color: 'blue'
        }
      ]
    }
  },
  computed: {
    ...mapState({
      tags: state => state.projects.tags
    }),
    currentTag() {
      return this.$router.params.tag
    },
    projects() {
      const tag = this.$route.params.tag
      if (tag) {
        return this.$store.getters['projects/getProjectsByTag'](tag)
      }
      return this.$store.getters['projects/getRecentProjects']
    }
  },
  fetch({ store }) {
    return Promise.all([
      store.dispatch('projects/getProjects'),
      store.dispatch('projects/getTags')
    ])
  },
  methods: {
    getProjectByTag: function(tag) {
      // eslint-disable-next-line no-console
      // console.log('The tag to get is ' + tag)
      // // eslint-disable-next-line no-console
      // console.log(this.$store.getters['projects/getProjectsByTag'](tag))
      // this.projects = this.$store.getters['projects/getProjectsByTag'](tag)
      this.$router.push('/portfolio/' + tag)
    }
  }
}
</script>
