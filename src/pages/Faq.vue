<template>
    <div class="faq">
        <HeroBanner title="FAQ" color="pink"/>
        <section class="header max-mid mx-auto text-center">
            <h2 class="m0 h1 mb4 pb2">Frequently Asked Questions</h2>
            <SearchField v-model="searchString" placeholder="Search FAQs"/>
        </section>
        {{searchString}}
    </div>
</template>

<script>
import HeroBanner from '@/components/HeroBanner.vue'
import SearchField from '@/components/SearchField.vue'

export default {
    name: 'faq',
    data () {
        return {
            searchString: ''
        }
    },
    components: {
        HeroBanner,
        SearchField
    }
}
</script>

<style lang="scss" scoped>
.header {
    margin-top: 469px;
    padding-top: 180px;
    h2 {
        color: clr(brand, pink);
    }
}
</style>
