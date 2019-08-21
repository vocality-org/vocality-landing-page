<template>
    <div class="commands">
        <div class="content max-mid mx-auto px2" style="height: 200vh">
            <div class="search flex justify-center">
                <img ref="searchIcon" src="@/assets/search.svg" alt="search" class="search-icon">
                <input ref="searchInput" type="search" placeholder="Search Commands..." name="search" contenteditable="true" autocomplete="off"
                    maxlength="48" id="search-field" class="border-none">
                <span ref="searchHelperSpan" id="search-field-helper"></span>
            </div>
        </div>

        <svg  class="bg-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 2524"
            height="100%" width="100%" fill="none" preserveAspectRatio="none">
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
export default {
    name: 'commands',
    data () {
        return {}
    },
    methods: {
        initSvg: function () {
            const body = document.getElementsByTagName('body')[0]
            const bodyHeight = window.getComputedStyle(body).height
            document.getElementsByClassName('bg-svg')[0].style.height = bodyHeight
        },
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
        this.initSvg()
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
    }
}
</script>

<style lang="scss" scoped>
.bg-svg {
    position: absolute;
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
            padding: 100px 0 100px;
            .search-icon {
                height: 36px;
            }
            input, span {
                font-size: 36px;
                line-height: 36px;
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
