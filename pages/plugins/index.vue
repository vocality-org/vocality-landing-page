<template>
  <div class="background">
    <div class="plugins">
      <div
        v-for="p in plugins"
        :key="p.name"
        class="plugins__card"
        @click="navigateTo(p.name)"
      >
        <PluginCard :name="p.name" :color="p.color" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import PluginCard from '../../components/PluginCard.vue';

@Component({
  components: {
    PluginCard,
  },
})
export default class Plugins extends Vue {
  plugins = [
    { name: 'core' },
    { name: 'music', color: 'blue' },
    { name: 'votes', color: 'pink' },
    { name: 'random', color: 'cyan' },
  ];

  navigateTo(name: string) {
    this.$router.push({ path: `plugins/${name}` });
  }
}
</script>

<style lang="scss" scoped>
.background {
  background-color: #303030;
  min-height: 100vh;
}
.plugins {
  max-width: 1040px;
  margin: auto;
  &__card {
    margin-bottom: 14px;
  }
}
</style>
