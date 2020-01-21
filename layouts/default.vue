<template>
  <v-app>
    <v-navigation-drawer v-model="drawer" fixed app> </v-navigation-drawer>
    <v-app-bar color="transparent" fixed app class="elevation-0">
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
    </v-app-bar>

    <v-content>
      <v-container>
        <nuxt />
      </v-container>
    </v-content>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import { AppState } from '../store';

@Component({})
export default class Layout extends Vue {
  get drawer() {
    return AppState.appDrawer.isOpen;
  }

  set drawer(state: boolean) {
    state ? AppState.appDrawer.open() : AppState.appDrawer.close();
  }
}
</script>
