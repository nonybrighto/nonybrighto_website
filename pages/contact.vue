<template>
  <v-container>
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
              <v-text-field
                label="Full Name"
                outline
                class="mr-1"
              ></v-text-field>
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
            You can always get in touch with me for any project or just to say
            hi.I'd really love to hear from you. My phone number is also
            available on Whatsapp. My email is also active.
          </p>
          <h4><v-icon small>fa fa-map-marker-alt</v-icon> Address</h4>
          <p>Port-Harcourt, Nigeria</p>

          <h4><v-icon small>fa fa-envelope</v-icon> Email</h4>
          <p>nonybrighto@gmail.com</p>

          <h4><v-icon small>fa fa-phone</v-icon> Phone</h4>
          <p>+(234)8148772181</p>
        </div>
      </v-flex>
    </v-layout>
  </v-container>
</template>
