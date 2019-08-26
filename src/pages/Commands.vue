<template>
    <div class="commands">
        <section class="content max-mid mx-auto">
            <SearchField v-model="searchValue" placeholder="Search Commands..." class="mb4"/>
            <div class="container">
                <div class="tabs mx-auto flex justify-center text-center w-100">
                    <button :class="{'active': activeTag === 'music'}" @click="() => {activeTag = 'music'}" class="px3 tab">Music</button>
                    <button :class="{'active': activeTag === 'all'}" @click="() => {activeTag = 'all'}" class="px3 tab">All</button>
                    <button :class="{'active': activeTag === 'general'}" @click="() => {activeTag = 'general'}" class="px3 tab">General</button>
                </div>
                <div class="pt3">
                    <Command v-for="c in filteredList" v-bind:key="c.name" v-bind="c"></Command>
                    <div v-if="filteredList.length === 0" class="flex justify-center p4 h2">
                        No Commands found
                    </div>
                </div>
            </div>
        </section>
        <Footer class="z1 relative mt4 pt4"></Footer>
        <svg  class="bg-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 2524"
            height="180vh" width="100%" fill="none" preserveAspectRatio="none">
            <rect width="727.426" height="4670.24" fill="#FF3F60"
                transform="matrix(-0.311873 -0.950124 0.936184 -0.35151 -950.606 3105.51)" />
            <rect width="727.426" height="4670.24" fill="#0C003F"
                transform="matrix(-0.311873 -0.950124 0.936184 -0.35151 -1155.87 2407.65)" />
            <rect width="727.426" height="4670.24" fill="#29ABE2"
                transform="matrix(-0.311873 -0.950124 0.936184 -0.35151 -1361.14 1709.78)" />
        </svg>
    </div>

</template>

<script>
import Command from '@/components/Command.vue'
import Footer from '@/components/Footer.vue'
import SearchField from '@/components/SearchField.vue'

export default {
    name: 'commands',
    data () {
        return {
            activeTag: 'all',
            searchValue: '',
            commands: [
                {
                    name: 'play',
                    arguments: [
                        'link or query'
                    ],
                    description: 'Vitae magnam autem ut facere nihil consequuntur et quia. Nihil ut ut sit.',
                    tags: [
                        'general'
                    ],
                    imageUrl: 'https://i.imgur.com/7Y19cDG.png'
                },
                {
                    name: 'lyrics',
                    arguments: [
                        'query'
                    ],
                    description: 'Vitae magnam autem ut facere nihil consequuntur et quia. Nihil ut ut sit.',
                    tags: [
                        'general'
                    ],
                    imageUrl: 'https://i.imgur.com/7Y19cDG.png'
                },
                {
                    name: 'help',
                    description: 'Vitae magnam autem ut facere nihil consequuntur et quia. Nihil ut ut sit.',
                    tags: [
                        'general'
                    ],
                    imageUrl: 'https://i.imgur.com/7Y19cDG.png'
                },
                {
                    name: 'stop',
                    description: 'Vitae magnam autem ut facere nihil consequuntur et quia. Nihil ut ut sit.',
                    tags: [
                        'general'
                    ],
                    imageUrl: 'https://i.imgur.com/7Y19cDG.png'
                },
                {
                    name: 'play2',
                    arguments: [
                        'link or query'
                    ],
                    description: 'Vitae magnam autem ut facere nihil consequuntur et quia. Nihil ut ut sit.',
                    tags: [
                        'music'
                    ],
                    imageUrl: 'https://i.imgur.com/7Y19cDG.png'
                },
                {
                    name: 'lyrics2',
                    arguments: [
                        'query'
                    ],
                    description: 'Vitae magnam autem ut facere nihil consequuntur et quia. Nihil ut ut sit.',
                    tags: [
                        'music2'
                    ],
                    imageUrl: 'https://i.imgur.com/7Y19cDG.png'
                },
                {
                    name: 'help2',
                    description: 'Vitae magnam autem ut facere nihil consequuntur et quia. Nihil ut ut sit.',
                    tags: [
                        'music'
                    ],
                    imageUrl: 'https://i.imgur.com/7Y19cDG.png'
                },
                {
                    name: 'stop2',
                    description: 'Vitae magnam autem ut facere nihil consequuntur et quia. Nihil ut ut sit.',
                    tags: [
                        'music'
                    ],
                    imageUrl: 'https://i.imgur.com/7Y19cDG.png'
                }
            ]
        }
    },
    computed: {
        filteredList () {
            return this.commands
            .filter(c => {
                return c.name.indexOf(this.searchValue.trim().toLowerCase()) > -1
            })
            .filter(c => {
                if (this.activeTag === 'all') { return true }
                return c.tags.includes(this.activeTag)
            })
        }
    },
    components: {
        Command,
        Footer,
        SearchField
    }
}
</script>

<style lang="scss" scoped>
.bg-svg {
    position: fixed;
    top: 0;
}

.content {
    z-index: 1;
    .container {
        background-color: clr(background, secondary);
        .tabs {
            $tab-height: 40px;
            height: $tab-height;
            line-height: $tab-height;
            .tab {
                position: relative;
                cursor: pointer;
                width: 130px;
                background-color: clr(background, secondary);
                overflow: hidden;
                &:hover,
                &:focus {
                    background-color: clr(background, bright);
                }
                &::after {
                    position: absolute;
                    box-sizing: border-box;
                    top: 0; left: 0;
                    width: 130px; height: $tab-height;
                    border-radius: $tab-height/2;
                    border: 4px solid clr(brand, cyan);
                    transform: scale(1.3);
                    transition: transform 0.2s ease;
                }
                @include mq(md) {
                    width: 180px;
                    &::after {
                        width: 180px;
                    }
                }
            }
            .active {
                background-color: clr(background, bright);
                &::after {
                    transform: scale(1);
                }
            }
            @include mq(sm) {
                position: absolute;
                margin-top: ($tab-height / 2) * (-1);
                .tab {
                    border-radius: $tab-height/2;
                    &::after { content: ''; }
                }
                .active {
                    background-color: clr(background, secondary);
                }
            }
        }
    }
}
</style>
