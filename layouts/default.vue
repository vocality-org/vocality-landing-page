<template>
  <v-app>
    <v-navigation-drawer v-model="drawer" fixed app>
      <v-list>
        <v-list-item link @click="navigateTo('index')">
          <v-list-item-icon>
            <v-icon>{{ homeIcon }}</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>Home</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item link @click="navigateTo('plugins')">
          <v-list-item-icon>
            <v-icon>{{ pluginIcon }}</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>Plugins</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item link @click="navigateTo('cli')">
          <v-list-item-icon>
            <v-icon>{{ cliIcon }}</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>Vocality CLI</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item link @click="navigateTo('members')">
          <v-list-item-icon>
            <v-icon>{{ membersIcon }}</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>Members</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item link href="https://github.com/vocality-org/vocality">
          <v-list-item-icon>
            <v-icon>{{ githubIcon }}</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>Github</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item link @click="navigateTo('donate')">
          <v-list-item-icon>
            <v-icon>{{ donateIcon }}</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>Donate</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar color="#303030" elevate-on-scroll fixed app>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-spacer />
      <v-btn outlined class="mx-2" color="grey" @click="navigateTo('plugins')">
        Plugins
      </v-btn>
      <v-btn
        outlined
        class="mx-2"
        color="grey"
        href="https://github.com/vocality-org/vocality"
      >
        Github
      </v-btn>
      <v-btn
        outlined
        class="mx-2"
        color="primary"
        @click="navigateTo('donate')"
      >
        Donate
      </v-btn>
    </v-app-bar>

    <v-content>
      <nuxt />
    </v-content>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import {
  mdiViewDashboard,
  mdiAccountGroup,
  mdiGithubCircle,
  mdiGift,
  mdiHome,
  mdiConsole,
} from '@mdi/js';

@Component({})
export default class Layout extends Vue {
  drawer: boolean = false;
  pluginIcon = mdiViewDashboard;
  membersIcon = mdiAccountGroup;
  githubIcon = mdiGithubCircle;
  donateIcon = mdiGift;
  homeIcon = mdiHome;
  cliIcon = mdiConsole;

  navigateTo(path: string) {
    this.$router.push({ name: path });
    this.drawer = false;
  }
}
</script>

<style lang="scss" scoped>
.theme--dark.v-application {
  background: transparent !important;
}
</style>
