<template>
  <v-layout column>
    <v-parallax
      dark
      :src="require('~/assets/images/bg_image.jpg')"
      :height="isExtraSmall ? 360 : 500"
    >
      <v-layout align-center column justify-center class="pt-5">
        <h1
          class="display-3 font-weight-bold mb-3"
          :class="{ 'display-1': isExtraSmall }"
        >
          NONYBRIGHTO
        </h1>
        <div class="limit">
          <p class="subheading text-xs-center heading-text font-weight-bold">
            A fullstack developer! Flutter Lover. Angular2+, Electron, Vue.js,
            From Vanilla PHP and some laravel to nodejs/express, Java
            Developer(JavaFX). Neo4j Fan! Mongodb, MySQL and PostgreSql Plays
            with javascript. Luv pink and purple a lot! A cat person :-)
          </p>
        </div>
        <v-hover>
          <v-btn slot-scope="{ hover }" color="primary" to="/contact"
            >HIRE ME
            <v-icon right dark>{{
              hover ? 'sentiment_very_satisfied' : 'arrow_forward'
            }}</v-icon>
          </v-btn>
        </v-hover>
      </v-layout>
    </v-parallax>

    <v-layout column align-center>
      <h1>Specialization</h1>
      <p class="limit text-xs-center">
        These are the platforms I work on and the tools used.
      </p>
    </v-layout>
    <v-layout row wrap justify-center align-center>
      <div v-for="(work, index) in works" :key="index" xs12 md4>
        <Work :work="work" />
      </div>
    </v-layout>
    <v-layout column align-center>
      <h1>Recent Projects</h1>
      <p class="limit text-xs-center subheading">
        Here are some amazing projects recently completed by me. Had a great
        time working on them. Every project is a learning experience for
        something more amazing to come :-)
      </p>
    </v-layout>
    <HomeProjectBox
      v-for="(project, index) in homeProjects"
      :key="project.id"
      :project="project"
      :left="index % 2 == 0 ? false : true"
    />
  </v-layout>
</template>

<script>
import HomeProjectBox from '~/components/HomeProjectBox'
import Work from '~/components/Work'
import { mapState } from 'vuex'

export default {
  components: {
    HomeProjectBox,
    Work
  },
  data() {
    return {
      height: 500,
      isHydrated: false,
      isSmall: false,
      works: [
        {
          icon: 'fa fa-cloud',
          title: 'Web',
          description:
            'Create web applications with Vue,express, PHP, Flutter should be major soon',
          style: {
            background: 'linear-gradient(153deg, #e64c4c 0%, #ef32fb 95%)'
          }
        },
        {
          icon: 'fa fa-mobile',
          title: 'Mobile',
          description:
            'Create mobile applications mainly with flutter.Also work with native android(java)',
          style: {
            background: 'linear-gradient(153deg, #e64c4c 0%, #fb8332 95%)'
          }
        },
        {
          icon: 'fa fa-desktop',
          title: 'Desktop',
          description:
            'Create desktop applications with JavaFx and also make use of Electron, Flutter',
          style: {
            background: 'linear-gradient(153deg, #ef33f2 0%, #3544dc 95%)'
          }
        }
      ]
    }
  },
  computed: {
    isExtraSmall() {
      return this.isHydrated ? this.$vuetify.breakpoint.xsOnly : false
    },
    ...mapState({
      homeProjects: state => state.projects.homeProjects
    })
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
.limit {
  max-width: 500px;
}
.heading-text {
  color: rgba(255, 255, 255, 0.8);
}
</style>
