<template>
  <v-layout row wrap>
    <v-flex sm12 md8>
      <v-form>
        <v-layout column>
          <h3>Brief Description</h3>
          <v-textarea
            outline
            name=""
            label="Specify reason for contact"
            value=""
          ></v-textarea>
          <h3>About You</h3>
          <v-layout row justify-space-between>
            <v-text-field label="Full Name" outline class="mr-1"></v-text-field>
            <v-text-field
              label="Email Address"
              outline
              class="ml-1"
            ></v-text-field>
          </v-layout>
          <div>
            <v-btn large color="primary">Primary</v-btn>
          </div>
        </v-layout>
      </v-form>
    </v-flex>
    <v-flex sm12 md4>
      <div class="pl-3">
        <h3>Get In Touch</h3>
        <p class="text-xs-justify">
          This is just a brief description stuff that i am adding to be a This
          is just a brief description stuff that i am adding to be a This is
          just a brief description stuff that i am adding to be a
        </p>
        <h4><v-icon small>chevron_left</v-icon> Address</h4>
        <p>This is my address</p>

        <h4><v-icon small>chevron_left</v-icon> Email</h4>
        <p>Tnonybrighto@gmail.com</p>

        <h4><v-icon small>chevron_left</v-icon> Phone</h4>
        <p>+(234)8148772181</p>
      </div>
    </v-flex>
  </v-layout>
</template>
