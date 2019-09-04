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
            <FaqSegment v-for="faq in filteredList" v-bind:key="faq.id" v-bind="faq" class="mb4">
                <template v-slot:question>
                    {{ faq.question }}
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
            faqList: [
                {
                    id: 0,
                    question: 'Lorem ipsum Search test?',
                    answer:
                        'Eum repellat cupiditate assumenda nemo qui excepturi impedit omnis. Et voluptatem consequatur cupiditate et minima necessitatibus consectetur dignissimos. Voluptas ratione omnis et sed minus. Consectetur earum autem qui architecto iusto illo adipisci id. Modi dolorem sapiente totam cum sapiente. Iste odit nisi dicta.',
                },
                {
                    id: 1,
                    question: 'Lorem ipsum?',
                    answer:
                        'Search test Eum repellat cupiditate assumenda nemo qui excepturi impedit omnis. Et voluptatem consequatur cupiditate et minima necessitatibus consectetur dignissimos. Voluptas ratione omnis et sed minus. Consectetur earum autem qui architecto iusto illo adipisci id. Modi dolorem sapiente totam cum sapiente. Iste odit nisi dicta.',
                },
                {
                    id: 2,
                    question: 'Lorem ipsum?',
                    answer:
                        'Eum repellat cupiditate assumenda nemo qui excepturi impedit omnis. Et voluptatem consequatur cupiditate et minima necessitatibus consectetur dignissimos. Voluptas ratione omnis et sed minus. Consectetur earum autem qui architecto iusto illo adipisci id. Modi dolorem sapiente totam cum sapiente. Iste odit nisi dicta.',
                },
                {
                    id: 3,
                    question: 'Lorem ipsum?',
                    answer:
                        'Eum repellat cupiditate assumenda nemo qui excepturi impedit omnis. Et voluptatem consequatur cupiditate et minima necessitatibus consectetur dignissimos. Voluptas ratione omnis et sed minus. Consectetur earum autem qui architecto iusto illo adipisci id. Modi dolorem sapiente totam cum sapiente. Iste odit nisi dicta.',
                },
                {
                    id: 4,
                    question: 'Lorem ipsum?',
                    answer:
                        'Eum repellat cupiditate assumenda nemo qui excepturi impedit omnis. Et voluptatem consequatur cupiditate et minima necessitatibus consectetur dignissimos. Voluptas ratione omnis et sed minus. Consectetur earum autem qui architecto iusto illo adipisci id. Modi dolorem sapiente totam cum sapiente. Iste odit nisi dicta.',
                },
                {
                    id: 5,
                    question: 'Lorem ipsum?',
                    answer:
                        'Eum repellat cupiditate assumenda nemo qui excepturi impedit omnis. Et voluptatem consequatur cupiditate et minima necessitatibus consectetur dignissimos. Voluptas ratione omnis et sed minus. Consectetur earum autem qui architecto iusto illo adipisci id. Modi dolorem sapiente totam cum sapiente. Iste odit nisi dicta.',
                },
                {
                    id: 6,
                    question: 'Lorem ipsum?',
                    answer:
                        'Eum repellat cupiditate assumenda nemo qui excepturi impedit omnis. Et voluptatem consequatur cupiditate et minima necessitatibus consectetur dignissimos. Voluptas ratione omnis et sed minus. Consectetur earum autem qui architecto iusto illo adipisci id. Modi dolorem sapiente totam cum sapiente. Iste odit nisi dicta.',
                },
                {
                    id: 7,
                    question: 'Lorem ipsum?',
                    answer:
                        'Eum repellat cupiditate assumenda nemo qui excepturi impedit omnis. Et voluptatem consequatur cupiditate et minima necessitatibus consectetur dignissimos. Voluptas ratione omnis et sed minus. Consectetur earum autem qui architecto iusto illo adipisci id. Modi dolorem sapiente totam cum sapiente. Iste odit nisi dicta.',
                },
                {
                    id: 8,
                    question: 'Lorem ipsum?',
                    answer:
                        'Eum repellat cupiditate assumenda nemo qui excepturi impedit omnis. Et voluptatem consequatur cupiditate et minima necessitatibus consectetur dignissimos. Voluptas ratione omnis et sed minus. Consectetur earum autem qui architecto iusto illo adipisci id. Modi dolorem sapiente totam cum sapiente. Iste odit nisi dicta.',
                },
            ],
        };
    },
    computed: {
        filteredList() {
            return this.faqList.filter(faq => {
                const foundInQuestion = faq.question.toLowerCase().indexOf(this.searchString.trim().toLowerCase()) > -1;
                if (!foundInQuestion) {
                    return faq.answer.toLowerCase().indexOf(this.searchString.trim().toLowerCase()) > -1;
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
</style>
