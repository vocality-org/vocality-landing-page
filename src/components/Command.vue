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
            <h2 v-for="a in args" class="command-args my0 h3" :key="a">[{{ a }}]</h2>
            <div class="flex-auto"></div>
            <img :class="{ 'expanded-icon': isExpanded }" class="icon" src="@/assets/icons/expand.svg" alt="toggle panel" />
        </div>
        <div ref="content" class="content px2">
            <h3 class="h4 mb2 mt2">Description</h3>
            <span class="description h5">{{ description }}</span>
            <h3 class="h4 mb2 mt3">Tags</h3>
            <div class="tags flex">
                <div v-for="t in tags" class="tag mx2 text-center" :key="t">{{ t }}</div>
            </div>
            <h3 class="h4 mb2 mt3">Example</h3>
            <img :src="imageUrl" width="400" alt="example image" />
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
            type: String,
        },
        tags: {
            type: Array,
            default: function() {
                return [];
            },
        },
        imageUrl: {
            type: String,
        },
    },
    methods: {
        toggleExpansion: function() {
            this.isExpanded = !this.isExpanded;
            if (this.isExpanded) {
                this.$refs.content.style.maxHeight = this.$refs.content.scrollHeight + 'px';
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
    }
}
</style>
