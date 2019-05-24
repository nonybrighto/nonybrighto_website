<template>
  <v-container>
    <v-layout v-if="currentProject" column>
      <v-layout column>
        <h1>{{ currentProject.name }}</h1>
        <p>{{ currentProject.description }}</p>
        <v-layout row justify-start align-start>
          <ProjectLinkButton
            v-if="currentProject.sourceLink"
            :link="currentProject.sourceLink"
            text="VIEW SOURCE"
          />
          <ProjectLinkButton
            v-if="currentProject.visitLink"
            :link="currentProject.visitLink"
            text="VISIT SITE"
          />
          <ProjectLinkButton
            v-if="currentProject.downloadLink"
            :link="currentProject.downloadLink"
            text="DOWNLOAD APP"
          />
        </v-layout>
      </v-layout>
      <v-carousel>
        <v-carousel-item
          v-for="(image, i) in currentProject.imagePaths"
          :key="i"
          :src="image"
        ></v-carousel-item>
      </v-carousel>
      <v-layout row wrap justify-center>
        <v-chip
          v-for="tag in currentProject.tags"
          :key="tag"
          text-color="white"
        >
          {{ tag }}
        </v-chip>
      </v-layout>
      <div v-html="currentProject.content"></div>
    </v-layout>
  </v-container>
</template>
<script>
import { mapState } from 'vuex'
import ProjectLinkButton from '../../components/ProjectLinkButton'

export default {
  components: {
    ProjectLinkButton
  },
  computed: {
    ...mapState({
      currentProject: state => state.projects.currentProject
    })
  },
  fetch({ store, params }) {
    return store.dispatch('projects/getProject', params.name)
  }
}
</script>
