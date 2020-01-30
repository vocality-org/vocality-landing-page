<template>
  <div class="plugin-card elevation-2" :class="`brand-${color}`">
    <h1 class="h2 plugin-card__name">{{ name }}</h1>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component, Prop } from 'vue-property-decorator';

@Component
export default class PluginCard extends Vue {
  @Prop() readonly name: string | undefined;
  @Prop() readonly color: string | undefined;
}
</script>

<style lang="scss" scoped>
.brand-pink {
  background: clr(brand, pink);
}
.brand-blue {
  background: clr(brand, blue);
}
.brand-cyan {
  background: clr(brand, cyan);
}
.brand-undefined {
  background: clr(background);
}
.plugin-card {
  border-radius: 8px;
  height: 200px;
  max-width: 1040px;
  position: relative;
  &__name {
    margin: 0;
    position: absolute;
    bottom: 16px;
    left: 16px;
    text-transform: uppercase;
    &:first-letter {
      font-size: 1.25em;
    }
  }
  &:hover {
    cursor: pointer;
    box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
      0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12) !important;
    filter: brightness(0.9);
  }
}
</style>
