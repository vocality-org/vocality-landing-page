<template>
    <div class="donate text-center">
        <HeroBanner title="Donate"></HeroBanner>
        <section class="donate-cta max-mid mx-auto">
            <h2 class="m0 h1 mb4 pb2">Supporting Vocality</h2>
            <p class="m0 mb3 pb1 bold">Quo totam quo nemo quas doloremque voluptatem maxime. Qui aut quidem commodi non blanditiis. Libero fuga expedita id assumenda dicta qui fuga. Maxime nisi voluptas fugiat. Quia qui suscipit rerum aut nostrum.</p>
            <p class="m0 secondary-paragraph">Ut eos tenetur quas qui et veritatis ratione. Assumenda repellat quas facere aut voluptatem sit voluptatem. Corporis aliquid fugiat sit illum. Sed et maiores asperiores enim. Qui quia occaecati suscipit.</p>
        </section>
        <section class="select-amount">
            <h3 class="m0 h2 p4">Select amount</h3>
                <div class="grid mx-auto pt3">
                    <div class="item h3 relative overflow-hidden">
                        5 €
                        <div class="popup">
                            <a class="stripe-mock">Pay 5 €</a>
                        </div>
                    </div>
                    <div class="item h3 relative overflow-hidden">
                        10 €
                        <div class="popup">
                            <a class="stripe-mock">Pay 10 €</a>
                        </div>
                    </div>
                    <div class="item h3 relative overflow-hidden">
                        25 €
                        <div class="popup">
                            <a class="stripe-mock">Pay 25 €</a>
                        </div>
                    </div>
                    <div class="item h3 relative overflow-hidden">
                        50 €
                        <div class="popup">
                            <a class="stripe-mock">Pay 50 €</a>
                        </div>
                    </div>
                    <div class="item h3 relative overflow-hidden">
                        OTHER
                        <div class="popup other">
                            <div class="flex flex-column justify-center items-center h-100">
                            <div>
                                <input class="my2 pr1" type="number" v-model="otherInputValue">
                                <span>€</span>
                            </div>
                                <transition name="slide-up">
                                    <a v-if="this.otherInputValue" class="stripe-mock">Pay {{otherInputValue}} €</a>
                                </transition>
                            </div>
                        </div>
                    </div>
                </div>
        </section>
        <section class="other-inqs">
            <h2 class="h1 m0 mb3">For other Inqueries</h2>
            <router-link to="/contect" class="cta h3 bold py1 px3">
                Contact Us
            </router-link>
        </section>
        <Footer class="footer"/>
    </div>
</template>

<script>
import Footer from '@/components/Footer.vue'
import HeroBanner from '@/components/HeroBanner.vue'

export default {
    name: 'donate',
    components: {
        Footer,
        HeroBanner
    },
    data () {
        return {
            otherInputValue: ''
        }
    }
}
</script>

<style lang="scss" scoped>
.donate-cta {
    margin-top: 469px;
    padding: 180px 20px 0;
    h2 {
        color: clr(brand, cyan);
    }
    .secondary-paragraph {
        color: clr(text, secondary);
    }
}
.select-amount {
    margin-top: 180px;
    background-color: clr(background, secondary);
    padding: 0 20px;
    .grid {
        padding-bottom: 120px;
        $item-size: 200px;
        display: grid;
        grid-gap: 60px;
        justify-content: center;
        grid-template-columns: repeat(auto-fit, $item-size);
        .item {
            width: $item-size; height: $item-size;
            line-height: $item-size;
            background-color: clr(brand, cyan);
            box-shadow: 3px 3px 6px 2px rgba(0, 0, 0, 0.2);
            transition: transform 0.2s ease;
            &:hover,
            &:focus {
                transform: scale(1.2);
                .popup {
                    transform: translateY(-$item-size);
                }
            }
            .popup {
                width: $item-size; height: $item-size;
                position: absolute;
                background-color: rgba(12, 12, 12, 0.7);
                transition: transform 0.2s ease;
            }
            .other {
                line-height: normal;
                background-color: clr(background, bright);
                input {
                    width: $item-size / 2;
                    background-color: transparent;
                    border: 1px solid transparent;
                    border-bottom-color: clr(text, secondary);
                    color: clr(text);
                    text-align: right;
                }
            }
        }
    }
}
.stripe-mock {
    padding: 8px 20px;
    background-color: clr(brand, cyan);
    border-radius: 3px;
    transition: all 0.1s ease;
    max-width: 100px;
    overflow: hidden;
    &:hover {
        box-shadow: 3px 3px 6px 2px rgba(0, 0, 0, 0.2);
    }
}
input[type=number]::-webkit-inner-spin-button,
input[type=number]::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
}
.slide-up-enter-active, .slide-up-leave-active {
    transition: transform .3s ease opacity .2s ease;
}
.slide-up-enter, .slide-up-leave-to {
    opacity: 0;
    transform: translateY(-20px);
}

.other-inqs {
    padding-top: 180px;
}
.footer {
    padding-top: 180px;
}
</style>
