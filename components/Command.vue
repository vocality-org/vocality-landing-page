<template>
  <v-expansion-panel class="command">
    <v-expansion-panel-header class="command__header">
      {{ name }}
      <span v-if="args" style="margin-left: 8px">
        <span v-for="a in args" :key="a" class="arg"> [{{ a }}] </span>
      </span>
    </v-expansion-panel-header>
    <v-expansion-panel-content class="command__content">
      <h4>Description</h4>
      <p>{{ description }}</p>
      <div v-if="aliases">
        <h4>Aliases</h4>
        <ul>
          <li v-for="alias in aliases" :key="alias">{{ alias }}</li>
        </ul>
      </div>
      <h4>Example</h4>
      <div class="example">
        <discord-messages>
          <discord-message> {{ prefix }}{{ example.input }} </discord-message>
          <discord-message
            :bot="true"
            author="Vocality"
            :avatar="require('@/assets/icons/logo.png')"
            role-color="violet"
            v-if="example.output || example.embed"
          >
            <span v-if="example.output">{{ example.output }}</span>
            <discord-embed
              v-else
              slot="embeds"
              :color="example.embed.color"
              :title="example.embed.title"
              :url="example.embed.url"
            >
              {{ example.embed.description }}
              <embed-fields v-if="example.embed.fields" slot="fields">
                <embed-field
                  v-for="f in example.embed.fields"
                  :key="f.name"
                  :title="f.name"
                >
                  <div v-html="f.content"></div>
                </embed-field>
              </embed-fields>
              <footer>{{ example.embed.footer }}</footer>
            </discord-embed>
          </discord-message>
        </discord-messages>
      </div>
      <div v-if="subcommands" class="subcommands">
        <h4 style="margin: 16px 0 8px 0">Sub Commands</h4>
        <command v-for="sc in subcommands" :key="sc.name" v-bind="sc" />
      </div>
    </v-expansion-panel-content>
  </v-expansion-panel>
</template>

<script>
export default {
  name: 'command',
  data() {
    return {
      args: this.arguments,
      isExpanded: false,
      prefix: '?',
    };
  },
  props: {
    name: {
      type: String,
      required: true,
    },
    arguments: {
      type: Array,
      default: function() {
        return [];
      },
    },
    description: {
      required: true,
      type: String,
    },
    example: {
      required: true,
    },
    aliases: {
      type: Array,
    },
    subcommands: {
      require: false,
    },
  },
};
</script>

<style lang="scss" scoped>
h4 {
  margin-top: 12px;
}
.command {
  &__header {
    .arg {
      opacity: 0.8;
    }
  }
  &__content {
    .example {
      margin-top: 8px;
    }
  }
}
</style>
