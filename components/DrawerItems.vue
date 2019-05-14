<template>
  <v-list>
    <v-layout column align-center>
      <v-avatar color="indigo" size="120px">
        <v-icon dark>account_circle</v-icon>
      </v-avatar>
      <h2>{{ personalDetails.name }}</h2>
      <div class="text-xs-center">
        <span>{{ personalDetails.briefDescription }}</span>
      </div>
      <v-layout row>
        <v-btn round dark>HIRE ME</v-btn>
        <v-btn round dark>MORE</v-btn>
      </v-layout>
    </v-layout>

    <v-list-tile v-for="(item, i) in items" :key="i" :to="item.to" router exact>
      <v-list-tile-action>
        <v-icon>{{ item.icon }}</v-icon>
      </v-list-tile-action>
      <v-list-tile-content>
        <v-list-tile-title v-text="item.title" />
      </v-list-tile-content>
    </v-list-tile>
    <v-spacer />
    <h2 class="text-xs-center">Social Accounts</h2>
    <v-layout row justify-center>
      <v-btn v-for="social in accounts.social" :key="social.name" icon>
        <v-icon>{{ social.icon }}</v-icon>
      </v-btn>
    </v-layout>
    <h2 class="text-xs-center">Developer Accounts</h2>
    <v-layout row justify-center>
      <v-btn v-for="developer in accounts.developer" :key="developer.name" icon>
        <v-icon>{{ developer.icon }}</v-icon>
      </v-btn>
    </v-layout>
  </v-list>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          icon: 'apps',
          title: 'Home',
          to: '/'
        },
        {
          icon: 'bubble_chart',
          title: 'Portfolio',
          to: '/portfolio'
        },
        {
          icon: 'bubble_chart',
          title: 'Notes',
          to: '/notes'
        },
        {
          icon: 'bubble_chart',
          title: 'About',
          to: '/about'
        },
        {
          icon: 'bubble_chart',
          title: 'blog',
          to: '/blog'
        },
        {
          icon: 'bubble_chart',
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
  }
}
</script>
