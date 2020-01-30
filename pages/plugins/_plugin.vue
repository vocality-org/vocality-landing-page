<template>
  <div class="background">
    <div class="containerized">
      <h1 class="h2">{{ name }}</h1>
      <v-row justify="center" class="commands">
        <v-expansion-panels popout focusable multiple>
          <Command v-for="c in commands" :key="c.name" v-bind="c" />
        </v-expansion-panels>
      </v-row>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { Route, Dictionary } from 'vue-router/types/router';
import Component from 'vue-class-component';
import Command from '../../components/Command.vue';

Component.registerHooks(['beforeRouteEnter']);

@Component({
  name: 'plugin',
  components: {
    Command,
  },
})
export default class Plugin extends Vue {
  name = '';
  commands = [];

  beforeRouteEnter(to: Route, from: Route, next: any) {
    const plugins = ['core', 'music', 'votes', 'random'];
    if (plugins.includes(to.params.plugin)) {
      next((model: any) => {
        model.$data.name = to.params.plugin;
        model.$data.commands = require(`./plugin-fixtures/${to.params.plugin}.json`);
      });
    } else {
      next(from);
    }
  }
}
</script>

<style lang="scss" scoped>
.background {
  background-color: #303030;
  min-height: 100vh;
}
.containerized {
  max-width: 1040px;
  margin: auto;
}
.commands {
  margin-top: 12px;
}
</style>
