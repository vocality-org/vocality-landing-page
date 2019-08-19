<template>
    <div id="app">
        <Sidenav :width="200" :isOpen="sidenavOpenState" @closeSidenav="() => {this.sidenavOpenState = false}"></Sidenav>
        <div id="page-wrap">
            <Navbar :sidenavOpen="sidenavOpenState" @sidenavStateChange="(state) => this.sidenavOpenState = state"></Navbar>
            <router-view />
            <!--<Footer></Footer>-->
        </div>
    </div>
</template>

<script>
// import Footer from '@/components/Footer.vue'
import Navbar from '@/components/Navbar.vue'
import Sidenav from '@/components/Sidenav.vue'

export default {
    components: {
        // Footer,
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
    -webkit-tap-highlight-color: transparent;
    body {
        color: clr('text');
        background-color: clr(background);
    }
}

#page-wrap {
    height: 100%;
    background-color: clr(background);
}

a {
    cursor: pointer;
    color: clr(text);
    text-decoration: none;
}

button {
    padding: 0;
    border: none;
    outline: none;
    font: inherit;
    color: inherit;
    background: none;
}

h1 {
    font-weight: normal;
}

:focus {
    outline: none;
}
</style>
