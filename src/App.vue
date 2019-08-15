<template>
    <div id="app">
        <Sidenav :width="400" :isOpen="sidenavOpenState" @closeSidenav="() => {this.sidenavOpenState = false}"></Sidenav>
        <div id="page-wrap">
            <Navbar :sidenavOpen="sidenavOpenState" @sidenavStateChange="(state) => this.sidenavOpenState = state"></Navbar>
            <router-view />
            <Footer></Footer>
        </div>
    </div>
</template>

<script>
import Footer from '@/components/Footer.vue'
import Navbar from '@/components/Navbar.vue'
import Sidenav from '@/components/Sidenav.vue'

export default {
    components: {
        Footer,
        Navbar,
        Sidenav
    },
    data () {
        return {
            sidenavOpenState: false
        }
    }
}

</script>

<style lang="scss">
html,
body {
    font-family: "Roboto", sans-serif;
    height: 100%;
    overflow-x: hidden;
    body {
        color: $color-text;
        background-color: rgb(73, 73, 73);
        margin: 0;
    }
}

#app {
    height: 100%;
}

#page-wrap {
    height: 100%;
    background-color: $color-background;
}

a {
    cursor: pointer;
    color: $color-text;
}

:focus {
    outline: none;
}
</style>
