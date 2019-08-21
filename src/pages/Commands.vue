<template>

    <div class="commands">
        <section class="content max-mid mx-auto">
            <div class="search flex justify-center">
                <img ref="searchIcon" src="@/assets/search.svg" alt="search" class="search-icon">
                <input ref="searchInput" type="search" placeholder="Search Commands..." name="search" contenteditable="true" autocomplete="off"
                    maxlength="48" id="search-field" class="border-none">
                <span ref="searchHelperSpan" id="search-field-helper"></span>
            </div>

            <div class="container">
                <div class="tabs mx-auto flex justify-center text-center absolute w-100">
                    <button :class="{'active': activeTag === 0}" @click="() => {activeTag = 0}" class="mx3 tab">Music</button>
                    <button :class="{'active': activeTag === 1}" @click="() => {activeTag = 1}" class="mx3 tab">All</button>
                    <button :class="{'active': activeTag === 2}" @click="() => {activeTag = 2}" class="mx3 tab">General</button>
                </div>
                <div class="pt3">
                    <Command v-bind="test"></Command>
                    <Command v-bind="test"></Command>
                    <Command v-bind="test"></Command>
                    <Command v-bind="test"></Command>
                    <Command v-bind="test"></Command>
                    <Command v-bind="test"></Command>
                    <Command v-bind="test"></Command>
                    <Command v-bind="test"></Command>
                    <Command v-bind="test"></Command>
                    <Command v-bind="test"></Command>
                    <Command v-bind="test"></Command>
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
import Command from '@/components/Command.vue';
import Footer from '@/components/Footer.vue';

export default {
    name: 'commands',
    data () {
        return {
            activeTag: 1,
            test: {
                name: 'play',
                arguments: [
                    'link or query'
                ],
                description: 'Vitae magnam autem ut facere nihil consequuntur et quia. Nihil ut ut sit.',
                tags: [
                    'music',
                    'general'
                ],
                imageUrl: 'https://i.imgur.com/7Y19cDG.png'
            }
        }
    },
    methods: {
        initInput: function () {
            this.$refs.searchInput.focus()
            this.resizeInputForText('')
        },
        resizeInputForText: function (text) {
            if (!text.trim()) {
                text = this.$refs.searchInput.getAttribute('placeholder').trim()
                this.$refs.searchIcon.style.display = 'block'
            } else {
                this.$refs.searchIcon.style.display = 'none'
            }
            this.$refs.searchHelperSpan.innerHTML = text
            this.$refs.searchInput.style.width = window.getComputedStyle(this.$refs.searchHelperSpan).width
        }
    },
    mounted: function () {
        this.initInput()
    },
    created: function () {
        this.$nextTick(() => {
            // listen on keydown of all characters
            this.$refs.searchInput.addEventListener('keypress', (char) => {
                if (char.which && char.charCode) {
                    const newChar = String.fromCharCode(char.keyCode | char.charCode)
                    this.resizeInputForText(this.$refs.searchInput.value + newChar)
                }
            })
            // listen to keyup and react to backspace and del
            this.$refs.searchInput.addEventListener('keyup', (char) => {
                if (char.keyCode === 8 || char.keyCode === 46) {
                    this.resizeInputForText(this.$refs.searchInput.value)
                }
            })
        })
    },
    components: {
        Command,
        Footer
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
    .search {
        height: 116px;
        padding: 200px 0 100px;
        .search-icon {
            height: 24px;
            margin: auto 8px;
        }
        input, span {
            text-shadow: 2px 2px 4px #727272ba;
            font-size: 24px;
            line-height: 24px;
            white-space: pre;
            background-color:  transparent;
            color: clr(text);

            &::placeholder {
                color: clr(text, secondary);
            }
        }
        span {
            visibility: hidden;
            position: absolute;
            z-index: -1;
            user-select: none;
        }
        @include mq(sm) {
            padding: 100px 0 120px;
            .search-icon {
                height: 36px;
            }
            input, span {
                font-size: 36px;
                line-height: 36px;
            }
        }
    }
    .container {
        background-color: clr(background, secondary);
        .tabs {
            $tab-height: 40px;
            height: $tab-height;
            line-height: $tab-height;
            margin-top: ($tab-height / 2) * (-1);
            .tab {
                position: relative;
                cursor: pointer;
                width: 130px;
                background-color: clr(background, secondary);
                border-radius: $tab-height/2;
                overflow: hidden;
                &:hover,
                &:focus {
                    background-color: clr(background, bright);
                }
                &::after {
                    content: '';
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
                &::after {
                    transform: scale(1);
                }
            }
        }
    }
}
/* clears the 'X' from Internet Explorer */
input[type=search]::-ms-clear {  display: none; width: 0; height: 0; }
input[type=search]::-ms-reveal {  display: none; width: 0; height: 0; }

/* clears the 'X' from Chrome */
input[type="search"]::-webkit-search-decoration,
input[type="search"]::-webkit-search-cancel-button,
input[type="search"]::-webkit-search-results-button,
input[type="search"]::-webkit-search-results-decoration { display: none; }
</style>
