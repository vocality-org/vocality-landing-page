<template>
    <div class="command panel">
        <div
            class="header flex items-baseline p2"
            @click="
                () => {
                    toggleExpansion();
                }
            "
        >
            <h1 class="command-name my0 mr2 h2">?{{ name }}</h1>
            <h2 v-for="a in args" class="command-args my0 h3" :key="a">
                [{{ a }}]
            </h2>
            <div class="flex-auto"></div>
            <img
                :class="{ 'expanded-icon': isExpanded }"
                class="icon"
                src="@/assets/icons/expand.svg"
                alt="toggle panel"
            />
        </div>
        <div ref="content" class="content px2">
            <h3 class="h4 mb2 mt2">Description</h3>
            <span class="description h5">{{ description }}</span>
            <div class="flex">
                <div class="tags">
                    <h3 class="h4 mb2 mt3">Tags</h3>
                    <div class="tags flex">
                        <div
                            v-for="t in tags"
                            class="tag mx2 text-center"
                            :key="t"
                        >
                            {{ t }}
                        </div>
                    </div>
                </div>
                <div class="aliases ml4" v-if="aliases">
                    <h3 class="h4 mb2 mt3">Aliases</h3>
                    <ul>
                        <li v-for="a in aliases" class="alias mx2" :key="a">
                            {{ a }}
                        </li>
                    </ul>
                </div>
            </div>

            <h3 class="h4 mb2 mt3">Example</h3>
            <div class="example">
                <discord-messages>
                    <discord-message>
                        {{ prefix }}{{ example.input }}
                    </discord-message>
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
                            <embed-fields
                                v-if="example.embed.fields"
                                slot="fields"
                            >
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
        </div>
    </div>
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
        tags: {
            type: Array,
            default: function() {
                return [];
            },
        },
        example: {
            required: true,
        },
        aliases: {
            type: Array,
        },
    },
    methods: {
        toggleExpansion: function() {
            this.isExpanded = !this.isExpanded;
            if (this.isExpanded) {
                this.$refs.content.style.maxHeight =
                    this.$refs.content.scrollHeight + 'px';
            } else {
                this.$refs.content.style.maxHeight = null;
            }
        },
    },
};
</script>

<style lang="scss" scoped>
.command {
    background-color: clr(background, secondary);
}
.panel {
    .header {
        cursor: pointer;
        .command-args {
            color: clr(text, secondary);
            font-weight: 200;
        }
        .icon {
            margin: auto;
            user-select: none;
            height: 28px;
            transition: transform 0.2s ease;
        }
        .expanded-icon {
            transform: rotate(-180deg);
        }
        &:hover,
        &:focus {
            background-color: clr(background, bright);
        }
    }
    .content {
        max-height: 0;
        overflow: hidden;
        transition: max-height 0.2s ease;
        background-color: #191919;
        .tag {
            height: 32px;
            line-height: 32px;
            border-radius: 16px;
            background-color: clr(brand, cyan);
            width: 90px;
            cursor: pointer;
            &:hover {
                background-color: clr(background, bright);
                transform: translateY(-1px);
            }
        }
        .example {
            margin-bottom: 16px;
        }
    }
}
</style>
