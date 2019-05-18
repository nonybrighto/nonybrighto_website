<template>
  <v-container>
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
                <v-icon dark>account_circle</v-icon>
              </v-avatar>
            </div>
          </div>
          <h2>NONYBRIGHTO</h2>
          <h4>FULLSTACK WEB DEVELOPER</h4>
        </v-layout>
      </v-flex>
      <v-flex xs12 md6 class="pl-3">
        <h4><v-icon dark size="medium">account_circle</v-icon> Profile</h4>
        <v-layout column>
          <ProfileInfo
            v-for="(info, index) in infos"
            :key="index"
            :info="info"
          />
        </v-layout>
        <h4><v-icon dark size="medium">account_circle</v-icon> Objective</h4>
        <div class="limit">
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam
            animi corporis tempora ut ullam esse eius hic soluta repudiandae
            sapiente maiores placeat ab necessitatibus, tenetur magni dolores,
            modi, quibusdam beatae!
          </p>
        </div>
      </v-flex>
    </v-layout>
    <v-layout row class="pt-3">
      <v-flex>
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
      <v-flex>
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
      <v-flex>
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
export default {
  components: {
    ProfileInfo
  },
  data() {
    return {
      infos: [
        {
          icon: 'account_circle',
          title: 'Name',
          value: 'Onwukwe Chinonso Bright'
        },
        {
          icon: 'account_circle',
          title: 'Name',
          value: 'Onwukwe Chinonso Bright'
        },
        {
          icon: 'account_circle',
          title: 'Name',
          value: 'Onwukwe Chinonso Bright'
        }
      ]
    }
  }
}
</script>
<style scoped>
.border {
  border-right: 2px solid rgb(140, 140, 221);
  padding: 15px;
}

.thick {
  border: 10px solid red;
  border-radius: 50%;
}

.light {
  padding: 4px;
  border-radius: 50%;
  border: 2px solid red;
}

.limit {
  max-width: 400px;
}
</style>
