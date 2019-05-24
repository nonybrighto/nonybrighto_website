<template>
  <v-hover>
    <v-card
      slot-scope="{ hover }"
      :class="`elevation-${hover ? 12 : 2}`"
      class="ma-1"
      style="cursor:pointer"
      @click.native="$router.push('/projects/' + nameSlug)"
    >
      <v-img :src="project.iconImageUrl" height="260px"></v-img>
      <v-card-title>
        <div>{{ project.name }}</div>
        <div class="grey--text">{{ project.description }}</div>
      </v-card-title>
      <v-divider light></v-divider>
      <v-card-actions class="pa-3">
        <v-chip color="blue">{{ projectPlatform }}</v-chip>
        <v-spacer></v-spacer>
        <div>
          <v-btn
            flat
            color="primary"
            :href="extraInfo.link"
            target="_blank"
            @click.stop=""
            >{{ extraInfo.text }}</v-btn
          >
        </div>
      </v-card-actions>
    </v-card>
  </v-hover>
</template>

<script>
import { slugify } from '../helpers/string-helper'
export default {
  props: {
    project: {
      type: Object,
      required: true
    }
  },

  computed: {
    projectPlatform() {
      const platforms = ['mobile', 'web', 'desktop']
      for (const platform of platforms) {
        if (this.project.tags.includes(platform)) {
          return platform
        }
      }
      return 'no platform'
    },
    extraInfo() {
      if (this.project.sourceLink) {
        return { link: this.project.sourceLink, text: 'VIEW SOURCE' }
      } else if (this.project.visitLink) {
        return { link: this.project.visitLink, text: 'VISIT' }
      } else if (this.project.downloadLink) {
        return { link: this.project.downloadLink, text: 'DOWNLOAD' }
      }
      return null
    },
    nameSlug() {
      return slugify(this.project.name)
    }
  }
}
</script>
