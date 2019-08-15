<template>
    <div>
        <div ref="sidenavRef" class="sidenav fixed h-100"></div>
    </div>
</template>

<script>
export default {
    name: 'sidenav',
    data () {
        return {
            isSidenavOpen: false
        }
    },
    props: {
        isOpen: {
            type: Boolean,
            required: false
        },
        width: {
            type: Number,
            required: true
        }
    },
    methods: {
        openSidenav () {
            this.$emit('openSidenav')
            this.$refs.sidenavRef.style.width = this.openedWidth
            this.pushPage()
        },

        closeSidenav () {
            this.$emit('closeSidenav')
            this.$refs.sidenavRef.style.width = '0px'
            this.pullPage()
        },

        closeSidenavOnEsc (e) {
            e = e || window.event

            if (e.key === 'Escape' || e.keyCode === 27) {
                this.closeSidenav()
            }
        },

        closeSidenavOnDocumentClick (e) {
            let className = null

            if (e && e.target) {
                className = e.target.className
            }

            if (
                this.isOpen &&
                !className.includes('sidenav')
            ) {
                this.closeSidenav()
            }
        },

        pushPage () {
            document.querySelector('#page-wrap').style.transition = 'all 0.3s ease 0s'
            document.querySelector('#page-wrap').style.transform = `translate3d(-${this.openedWidth}, 0px, 0px )`
            document.querySelector('#app').style.overflow = 'hidden'
        },

        pullPage () {
            document.querySelector('#page-wrap').style.transition = 'all 0.3s ease 0s'
            document.querySelector('#page-wrap').style.transform = ''
        }
    },
    mounted () {
        document.addEventListener('keyup', this.closeSidenavOnEsc)
    },
    created: function () {
        // document.addEventListener('click', this.closeSidenavOnDocumentClick)
    },
    destroyed: function () {
        document.removeEventListener('keyup', this.closeSidenavOnEsc)
        document.removeEventListener('click', this.closeSidenavOnDocumentClick)
    },
    watch: {
        isOpen: {
            deep: true,
            immediate: true,
            handler (newValue, oldValue) {
                this.isSidenavOpen = newValue
                this.$nextTick(() => {
                    if (newValue) {
                        this.openSidenav()
                    }
                    if (!newValue) {
                        this.closeSidenav()
                    }
                })
            }
        }
    },
    computed: {
        openedWidth: function () {
            return `${this.width}px`
        }
    }
}
</script>

<style lang="scss" scoped>
.sidenav {
    width: 0;
    z-index: 100;
    overflow-x: hidden;
    padding-top: 60px;
    top: 0;
    left: auto;
    right: 0;
    background-color: $color-background-secondary;
    transition: width 0.3s ease;
}
</style>
