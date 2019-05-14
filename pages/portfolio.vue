<template>
  <v-layout>
    <v-flex text-xs-center>
      <ul>
        <li><nuxt-link to="/portfolio/mobile">Mobile</nuxt-link></li>
        <li><nuxt-link to="/portfolio/web">Web</nuxt-link></li>
        <li><nuxt-link to="/portfolio/desktop">Desktop</nuxt-link></li>
      </ul>
      <nuxt-child />
    </v-flex>
  </v-layout>
</template>
