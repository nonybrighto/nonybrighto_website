<template>
  <v-container>
    <PageHeader title="About" />
    <v-layout row wrap align-center>
      <v-flex
        text-xs-center
        xs12
        md6
        :class="{ border: $vuetify.breakpoint.mdAndUp }"
      >
        <v-layout column align-center justify-center>
          <div class="light">
            <div class="thick">
              <v-avatar color="indigo" size="200px">
                <img
                  :src="require('~/assets/images/about_image.jpg')"
                  alt="nonybrighto"
                />
              </v-avatar>
            </div>
          </div>
          <h2>NONYBRIGHTO</h2>
          <h4>FULLSTACK DEVELOPER</h4>
        </v-layout>
      </v-flex>
      <v-flex xs12 md6 class="pl-3">
        <h3>
          <v-icon dark size="medium" class="pb-1">fa fa-user-circle</v-icon>
          Profile
        </h3>
        <v-layout column>
          <ProfileInfo
            v-for="(info, index) in infos"
            :key="index"
            :info="info"
          />
        </v-layout>
        <h3>
          <v-icon dark size="medium" class="pb-1">fa fa-bullseye</v-icon>
          Objective
        </h3>
        <div class="limit">
          <p>
            To develop and contribute to projects that will help improve the
            world, make more people happy and make life easier. I aim to improve
            education and write projects to help students. I hope to contribute
            to the growth of technology in my country. Positive thoughts.
          </p>
        </div>
      </v-flex>
    </v-layout>
    <v-layout row wrap class="pt-3">
      <v-flex xs12 sm6 md4>
        <v-layout column>
          <h1>What i do</h1>
          <h3>Web Development(Front)</h3>
          <p>HTML5/CSS3, JavaScript, Angular2+, Vue.js, Flutter</p>
          <h3>Web development(Back)</h3>
          <p>Node.js/Express, PHP, REST API</p>
          <h3>Databases</h3>
          <p>MySQL, SQLite, Neo4j, Mongodb, Firestore</p>
          <h3>CMS</h3>
          <p>Wordpress</p>
          <h3>Desktop</h3>
          <p>Flutter, Electron, JavaFX</p>
          <h3>IDE</h3>
          <p>VS Code, Android Studio, Eclipse</p>
        </v-layout>
      </v-flex>
      <v-flex xs12 sm6 md4>
        <v-layout column>
          <h1>Education</h1>
          <h3>Tertiary</h3>
          <p>
            Bluecrest University College, Accra, Ghana
            <i>(2013 - 2017)</i><br />Bsc.IT
          </p></v-layout
        >
        <h3>Secondary</h3>
        <p>Air Force Secondary School, Rivers, Nigeria <i>(2004 - 2010)</i></p>

        <h3>Primary</h3>
        <p>
          St. Ann's Nursery and Primary School, Rivers, Nigeria
          <i>(2003)</i>
        </p>
      </v-flex>
      <v-flex xs12 sm6 md4>
        <v-layout column>
          <h1>Certification</h1>
          <h3>IBM</h3>
          <p>Application Security Analyst Mastery Award <i>(2017)</i></p>
        </v-layout>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import ProfileInfo from '~/components/ProfileInfo'
import PageHeader from '~/components/PageHeader'
export default {
  components: {
    ProfileInfo,
    PageHeader
  },
  data() {
    return {
      infos: [
        {
          icon: 'fa fa-user',
          title: 'Name',
          value: 'Onwukwe Chinonso Bright'
        },
        {
          icon: 'fa fa-map-marker-alt',
          title: 'Address',
          value: 'Port-Harcourt, Nigeria'
        },
        {
          icon: 'fa fa-envelope',
          title: 'Email',
          value: 'nonybrighto@gmail.com'
        },
        {
          icon: 'fa fa-phone',
          title: 'Phone No',
          value: '+(234)8148772181'
        }
      ]
    }
  }
}
</script>
<style scoped>
.border {
  border-right: 1px solid rgb(114, 114, 129);
  padding: 15px;
}

.thick {
  border: 10px solid #292628;
  border-radius: 50%;
}

.light {
  border-radius: 50%;
  border: 2px solid #8b2596;
}

.limit {
  max-width: 400px;
}
</style>
