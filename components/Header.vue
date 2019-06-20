<template>
  <div>
    <v-navigation-drawer
      v-model="drawer"
      :clipped="clipped"
      :permanent="permanentDrawer"
      fixed
      app
      :mini-variant="mini"
    >
      <v-list>
        <!-- <v-layout v-if="!mini" row justify-end>
          <v-btn icon @click.stop="mini = !mini">
            <v-icon>chevron_left</v-icon>
          </v-btn>
        </v-layout> -->
        <div v-if="!mini" class="mini-icon">
          <v-btn icon @click.stop="mini = !mini">
            <v-icon>chevron_left</v-icon>
          </v-btn>
        </div>
        <v-layout v-if="!mini" column align-center>
          <v-avatar color="indigo" size="120px">
            <img
              :src="require('~/assets/images/profile_pics.jpg')"
              alt="nonybrighto"
            />
          </v-avatar>
          <h2>{{ personalDetails.name }}</h2>
          <v-layout row>
            <v-btn round dark to="/contact" :color="$vuetify.theme.primary"
              >HIRE ME</v-btn
            >
            <v-btn round dark to="/about">MORE</v-btn>
          </v-layout>
        </v-layout>
        <v-list-tile v-if="mini" @click.stop="mini = !mini">
          <v-list-tile-action>
            <v-icon>chevron_right</v-icon>
          </v-list-tile-action>
        </v-list-tile>
        <v-list-tile
          v-for="(item, i) in items"
          :key="i"
          :to="item.to ? item.to : false"
          :href="item.href ? item.href : false"
          :target="item.href ? '_blank' : false"
          router
          exact
        >
          <v-list-tile-action>
            <v-icon style="font-size: 18px">{{ item.icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title v-text="item.title" />
          </v-list-tile-content>
        </v-list-tile>

        <!-- <h2 class="text-xs-center">Social Accounts</h2>
        <v-layout row justify-center>
          <v-btn v-for="social in accounts.social" :key="social.name" icon>
            <v-icon>{{ social.icon }}</v-icon>
          </v-btn>
        </v-layout>
        <h2 class="text-xs-center">Developer Accounts</h2>
        <v-layout row justify-center>
          <v-btn
            v-for="developer in accounts.developer"
            :key="developer.name"
            icon
          >
            <v-icon>{{ developer.icon }}</v-icon>
          </v-btn>
        </v-layout> -->
      </v-list>
    </v-navigation-drawer>
    <v-toolbar v-if="showBar" :clipped-left="clipped" fixed app>
      <v-toolbar-side-icon @click="drawer = !drawer" />
      <v-toolbar-title v-text="title" />
      <v-spacer />
    </v-toolbar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      clipped: false,
      drawer: null,
      fixed: true,
      title: 'nonybrighto.com',
      mini: false,
      isHydrated: false,
      items: [
        {
          icon: 'fa fa-home',
          title: 'Home',
          to: '/'
        },
        {
          icon: 'fa fa-briefcase',
          title: 'Portfolio',
          to: '/portfolio'
        },
        {
          icon: 'fa fa-sticky-note',
          title: 'Notes',
          to: '/notes'
        },
        {
          icon: 'fa fa-info-circle',
          title: 'About',
          to: '/about'
        },
        {
          icon: 'fa fa-blog',
          title: 'blog',
          href: 'https://medium.com/@nonybrighto'
        },
        {
          icon: 'fa fa-envelope',
          title: 'Contact',
          to: '/contact'
        }
      ],
      personalDetails: {
        name: 'nonybrighto',
        briefDescription: `This is brief description anout myself
                            This is brief description anout myself
                            This is brief description anout myself
                            This is brief description anout myself`
      },
      accounts: {
        social: [
          {
            name: 'facebook',
            icon: 'bubble_chart',
            to: 'http://facebook.com'
          },
          {
            name: 'twitter',
            icon: 'bubble_chart',
            to: 'http://facebook.com'
          },
          {
            name: 'instagram',
            icon: 'bubble_chart',
            to: 'http://facebook.com'
          },
          {
            name: 'linkn',
            icon: 'bubble_chart',
            to: 'http://facebook.com'
          }
        ],
        developer: [
          {
            name: 'stackoverflow',
            icon: 'bubble_chart',
            to: 'http://facebook.com'
          },
          {
            name: 'github',
            icon: 'bubble_chart',
            to: 'http://facebook.com'
          }
        ]
      }
    }
  },
  computed: {
    showBar() {
      return this.isHydrated ? this.$vuetify.breakpoint.smAndDown : false
    },
    permanentDrawer() {
      return this.isHydrated ? this.$vuetify.breakpoint.mdAndUp : false
    }
  },
  mounted() {
    this.isHydrated = true
    this.mini = this.$vuetify.breakpoint.mdOnly
  }
}
</script>

<style scoped>
.mini-icon {
  position: absolute;
  top: 0;
  right: 0;
}
</style>
