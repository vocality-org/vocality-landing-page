<template>
	<div class="navbar flex justify-end">
		<div v-if="!sidenavOpen">
            <button class="sidenav-button" @click="openSidenavClick">Open</button>
        </div>
        <div v-else>
            <button class="sidenav-button" @click="closeSidenavClick">Close</button>
        </div>
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

</style>
