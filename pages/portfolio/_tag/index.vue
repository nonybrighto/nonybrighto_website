<template>
  <v-layout column align-center>
    <h2>Portfolio</h2>
    <p>These are the projects that have been worked on recently</p>
    <v-layout row>
      <v-chip
        v-for="platform in platforms"
        :key="platform.id"
        :color="platform.color"
        text-color="white"
      >
        <v-avatar>
          <v-icon>{{ platform.icon }}</v-icon>
        </v-avatar>
        {{ platform.name }}
      </v-chip>
    </v-layout>
    <v-layout row wrap>
      <v-chip v-for="tag in tags" :key="tag.id" text-color="white">
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
export default {
  components: {
    Project
  },
  data() {
    return {
      happy: true,
      platforms: [
        {
          id: 'web',
          name: 'Web',
          icon: 'account_circle',
          color: 'pink'
        },
        {
          id: 'mobile',
          name: 'Mobile',
          icon: 'account_circle',
          color: 'purple'
        },
        {
          id: 'desktop',
          name: 'Desktop',
          icon: 'account_circle',
          color: 'blue'
        }
      ],

      tags: [
        {
          id: 'web',
          name: 'css'
        },
        {
          id: 'web',
          name: 'css'
        },
        {
          id: 'html',
          name: 'html'
        },
        {
          id: 'flutter',
          name: 'flutter'
        },
        {
          id: 'javaFX',
          name: 'javaFX'
        },
        {
          id: 'electron',
          name: 'electron'
        },
        {
          id: 'unity',
          name: 'unity'
        },
        {
          id: 'vue',
          name: 'vue'
        }
      ],

      projects: [
        {
          id: '1',
          name: 'Project name',
          description: 'THis is a very short descrition of the project',
          iconImagePath: '../../assets/images/image.png',
          sourceLink: '',
          imagePaths: [''],
          tags: ['']
        },
        {
          id: '2',
          name: 'Project name',
          description: 'THis is a very short descrition of the project',
          iconImagePath: '/assets/images/image.png',
          sourceLink: 'no link',
          imagePaths: [''],
          tags: ['']
        },
        {
          id: '3',
          name: 'Project name',
          description: 'THis is a very short descrition of the project',
          iconImagePath: '/assets/images/image.png',
          sourceLink: '',
          imagePaths: [''],
          tags: ['']
        },
        {
          id: '4',
          name: 'Project name',
          description: 'THis is a very short descrition of the project',
          iconImagePath: '~/images/image.png',
          sourceLink: '',
          imagePaths: [''],
          tags: ['']
        },
        {
          id: '5',
          name: 'Project name',
          description: 'THis is a very short descrition of the project',
          iconImagePath:
            'https://www.gettyimages.co.uk/gi-resources/images/RoyaltyFree/Apr17Update/ColourSurge1.jpg',
          sourceLink: '',
          imagePaths: [''],
          tags: ['']
        }
      ]
    }
  }
}
</script>
