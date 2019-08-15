<template>
	<div class="navbar">
        <header class="flex py1 px3">
            <div class="icon flex" @click="navigate('/')">
                <router-link to="/" class="flex">
                    <img src="@/assets/logo.svg" alt="vocality-logo">
                </router-link>
            </div>
            <div class="flex-auto"></div>
            <nav class="hide-on-sm">
                <ul class="list-reset flex items-center m0 h-100">
                    <li>
                        <router-link to="/commands" class="text-decoration-none px3">Commands</router-link>
                    </li>
                    <li>
                        <router-link to="/faq" class="text-decoration-none px3">Donate</router-link>
                    </li>
                    <li>
                        <router-link to="/about" class="text-decoration-none px3">About</router-link>
                    </li>
                </ul>
            </nav>
            <div class="show-on-sm flex relative">
                <transition name="fade">
                    <div key=1 v-if="!sidenavOpen" class="flex h-100 absolute" style="right: 32px">
                        <button class="icon" @click="openSidenavClick">
                            <img src="@/assets/menu.svg" alt="Open the menu" class="sidenav-button">
                        </button>
                    </div>
                    <div key=2 v-else class="flex h-100 absolute" style="right: 32px">
                        <button class="icon" @click="closeSidenavClick">
                            <img src="@/assets/close.svg" alt="Close the menu" class="sidenav-button">
                        </button>
                    </div>
                </transition>
            </div>
        </header>
	</div>
</template>

<script>
export default {
    name: 'navbar',
    props: {
        sidenavOpen: {
            type: Boolean,
            required: true
        }
    },
    methods: {
        openSidenavClick () {
            this.$emit('sidenavStateChange', true)
        },

        closeSidenavClick () {
            this.$emit('sidenavStateChange', false)
        }
    }
}
</script>

<style scoped lang="scss">
header {
    background-color: transparent;
    height: 64px;

    .icon {
        img {
            height: 42px;
            width: 42px;
            margin: auto;
        }
        cursor: pointer;
        &:hover {
            transform: scale(1.2);
        }
    }

    li > a {
        color: $color-text-secondary;
        font-weight: 900;
        position: relative;
        transition: color 0.3s ease;

        &::after {
            content: "";
            display: block;
            position: absolute;
            height: 4px;
            width: 0;
            background-color: $color-brand-pink;
            bottom: -8px;
            left: 50%;
            transform: translateX(-50%);
            transition: width 0.3s ease;
        }

        &:hover,
        &:focus {
            color: $color-text;
            &::after {
                width: 30%;
            }
        }
    }
}
.fade-enter-active,
.fade-leave-active {
    transition: transform 0.4s;
}

.fade-enter,
.fade-leave-to {
    transform: rotate(-180deg);
    opacity: 0;
}
</style>
