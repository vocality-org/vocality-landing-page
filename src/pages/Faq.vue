<template>
    <div class="faq">
        <HeroBanner title="FAQ" color="pink" />
        <section class="header max-mid mx-auto text-center">
            <h2 class="m0 h1 pb3">Frequently Asked Questions</h2>
            <SearchField
                v-model="searchString"
                placeholder="What do you need help with?"
                :overrideStyle="searchFieldStyle"
                class="mb4 pb3"
            />
        </section>
        <section class="faq-list max-mid mx-auto pr3 border-box">
            <FaqSegment
                v-for="faq in filteredList"
                v-bind:key="faq.id"
                v-bind="faq"
                class="mb4"
            >
                <template v-slot:question>
                    <span class="faqs">
                        {{ faq.question }}
                    </span>
                </template>
                <template v-slot:answer>
                    {{ faq.answer }}
                </template>
            </FaqSegment>
        </section>
        <Footer class="footer"></Footer>
    </div>
</template>

<script>
import HeroBanner from '@/components/HeroBanner.vue';
import SearchField from '@/components/SearchField.vue';
import FaqSegment from '@/components/FaqSegment.vue';
import Footer from '@/components/Footer.vue';

export default {
    name: 'faq',
    data() {
        return {
            searchString: '',
            searchFieldStyle: {
                fontSize: '25px',
                lineHeight: '25px',
            },
            faqList: require('./faq.json'),
        };
    },
    computed: {
        filteredList() {
            return this.faqList.filter(faq => {
                const foundInQuestion =
                    faq.question
                        .toLowerCase()
                        .indexOf(this.searchString.trim().toLowerCase()) > -1;
                if (!foundInQuestion) {
                    return (
                        faq.answer
                            .toLowerCase()
                            .indexOf(this.searchString.trim().toLowerCase()) >
                        -1
                    );
                }
                return foundInQuestion;
            });
        },
    },
    components: {
        HeroBanner,
        SearchField,
        FaqSegment,
        Footer,
    },
};
</script>

<style lang="scss" scoped>
.header {
    margin-top: 469px;
    padding-top: 180px;
    h2 {
        color: clr(brand, pink);
    }
}
.footer {
    padding-top: 180px;
}
.highlight {
    color: red;
}
</style>
