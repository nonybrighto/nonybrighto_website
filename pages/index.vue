<template>
  <v-layout column>
    <v-parallax
      dark
      src="https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg"
      :height="$vuetify.breakpoint.xs ? 340 : 500"
    >
      <v-layout align-center column justify-center class="pt-5">
        <h1
          class="display-3 font-weight-bold mb-3"
          :class="{ 'display-1': $vuetify.breakpoint.xs }"
        >
          NONYBRIGHTO
        </h1>
        <div class="limit">
          <p class="subheading text-xs-center">
            A fullstack developer! Flutter Lover. Angular, Electron Developer.
            Java Developer. JavaFX A fullstack developer! Flutter Lover.
            Angular, Electron Developer. Java Developer. JavaFX
          </p>
        </div>
        <v-hover>
          <v-btn slot-scope="{ hover }" color="primary"
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
        Specialization of the stufss
      </p>
    </v-layout>
    <v-layout row wrap>
      <v-flex v-for="(work, index) in works" :key="index" xs12 md4>
        <Work :work="work" />
      </v-flex>
    </v-layout>
    <v-layout column align-center>
      <h1>Recent Projects</h1>
      <p class="limit text-xs-center">
        Here are some amazing projects recently completed by me. Had a great
        time working on them. Every project is a learning experience for
        something more amazing to come :-)
      </p>
    </v-layout>
    <HomeProjectBox
      v-for="(project, index) in recentProjects"
      :key="project.id"
      :project="project"
      :left="index % 2 == 0 ? false : true"
    />
  </v-layout>
</template>

<script>
import HomeProjectBox from '~/components/HomeProjectBox'
import Work from '~/components/Work'
export default {
  components: {
    HomeProjectBox,
    Work
  },
  data() {
    return {
      height: 500,
      recentProjects: [
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
          id: '1',
          name: 'Project name',
          description: 'THis is a very short descrition of the project',
          iconImagePath: '../../assets/images/image.png',
          sourceLink: '',
          imagePaths: [''],
          tags: ['']
        }
      ],
      works: [
        {
          icon: 'account_circle',
          title: 'Web Design',
          description:
            'descripEnim consequatur non autem est sapiente velit numquam asperiores cum.'
        },
        {
          icon: 'account_circle',
          title: 'Mobile Application',
          description:
            'descripEnim consequatur non autem est sapiente velit numquam asperiores cum.'
        },
        {
          icon: 'account_circle',
          title: 'Desktop Application',
          description:
            'descripEnim consequatur non autem est sapiente velit numquam asperiores cum.'
        }
      ]
    }
    // components: {
    // }
  }
}
</script>

<style scoped>
.limit {
  max-width: 500px;
}
</style>
