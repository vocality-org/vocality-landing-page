<template>
    <div class="search">
        <div class="search flex justify-center">
            <img ref="searchIcon" src="@/assets/icons/search.svg" alt="search" class="search-icon">
            <input ref="searchInput" :placeholder="placeholder" :style="[overrideStyle]"
                :value="value" @input="updateAndEmit"
                type="search" name="search" contenteditable="true" autocomplete="off"
                maxlength="48" class="border-none">
            <span ref="searchHelperSpan" :style="[overrideStyle]"></span>
        </div>
    </div>
</template>

<script>
export default {
    name: 'search',
    props: {
        value: {
            type: String,
            default: ''
        },
        placeholder: {
            type: String,
            default: ''
        },
        overrideStyle: {
            type: Object,
            default: function () {
                return {
                    fontSize: '24px',
                    lineHeight: '24px'
                }
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
        },
        updateAndEmit: function (e) {
            const char = e.data

            if (char) {
                const newChar = String.fromCharCode(char.keyCode | char.charCode)
                this.resizeInputForText(this.$refs.searchInput.value + newChar)
            } else {
                this.resizeInputForText(this.$refs.searchInput.value)
            }

            this.$emit('input', this.$refs.searchInput.value)
        }
    },
    mounted: function () {
        this.initInput()
    }
}
</script>

<style lang="scss" scoped>
.search {
    height: 116px;
    .search-icon {
        height: 24px;
        margin: auto 8px auto 0;
    }
    input, span {
        text-shadow: 2px 2px 4px #727272ba;
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
        .search-icon {
            height: 36px;
        }
    }
}
</style>
