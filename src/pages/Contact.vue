<template>
    <div class="contact">
        <HeroBanner title="Contact" color="pink"></HeroBanner>
        <section class="contact-details max-mid relative mx-auto">
            <div class="container flex justify-center items-center flex-column">
                <div class="data items-center">
                    <a href="https://www.google.com/maps/" target="__blank" class="icon-container flex justify-center items-center">
                        <img src="@/assets/location.svg" alt="location" height="42">
                    </a>
                    <div class="flex items-center">1600 Amphitheatre Pkwy, Mountain View, CA 94043, USA</div>
                    <a href="tel:+1 650-253-000" target="__blank" class="icon-container flex justify-center items-center">
                        <img src="@/assets/phone.svg" alt="phone" height="42">
                    </a>
                    <div class="flex items-center">+1 650-253-000</div>
                    <a href="mailto:my-mail@email.com" target="__blank" class="icon-container flex justify-center items-center">
                        <img src="@/assets/email.svg" alt="email" height="42">
                    </a>
                    <div class="flex items-center">my-mail@gmail.com</div>
                </div>
                <div class="map">
                    <l-map
                    :zoom="zoom"
                    :center="center"
                    :options="mapOptions"
                    @update:center="centerUpdate"
                    @update:zoom="zoomUpdate"
                    >
                        <l-tile-layer :url="url" />
                        <l-marker :lat-lng="location">
                            <l-popup>
                                <div>
                                    Our Location Kappa
                                </div>
                            </l-popup>
                        </l-marker>
                    </l-map>
                </div>
            </div>
        </section>
        <section class="social-media flex flex-column justify-center items-center">
            <a href="https://www.facebook.com/" target="__blank" class="icon-container flex justify-center items-center">
                <img src="@/assets/facebook.svg" alt="facebook" height="64">
            </a>
            <a href="https://www.instagram.com/" target="__blank" class="icon-container flex justify-center items-center">
                <img src="@/assets/instagram.svg" alt="instagran" height="64">
            </a>
            <a href="https://www.twitter.com/" target="__blank" class="icon-container flex justify-center items-center">
                <img src="@/assets/twitter.svg" alt="twitter" height="64">
            </a>
        </section>
        <section class="message mx-auto max-mid">
            <h2 class="m0 w-100 text-center h1">Or send a message</h2>
            <form ref="messageForm" class="form mt4 mx-auto" action="#0" method="post">
                <div class="firstname">
                    <label for="firstname">Firstname</label>
                    <input ref="firstname" type="text" id="firstname" name="firstname" required class="mt1 w-100" placeholder="Firstname">
                </div>
                <div class="lastname">
                    <label for="lastname">Lastname</label>
                    <input ref="lastname" type="text" id="lastname" name="lastname" required class="mt1 w-100" placeholder="Lastname">
                </div>
                <div class="text">
                    <label for="firstname">Message</label>
                    <textarea ref="text" required type="text" id="text" class="mt1 flex w-100" />
                </div>
                <div class="submit flex">
                    <button ref="submitButton" @click="submitMessage" class="flex justify-center mx-auto cta">SUBMIT</button>
                </div>
            </form>
            <div v-if="messageSubmitted" class="afterSubmit text-center mt2">
                <div @click="requestForm" class="submit-request h3 flex items-center justify-center">
                    Submit again
                    <img src="@/assets/arrow-right.svg" alt="arrow pointing right" class="ml2">
                </div>
            </div>
        </section>
        <Footer class="footer" />
    </div>
</template>

<script>
import { latLng, Icon } from 'leaflet'
import { LMap, LTileLayer, LMarker, LPopup } from 'vue2-leaflet'
import HeroBanner from '@/components/HeroBanner.vue'
import Footer from '@/components/Footer.vue'

export default {
    name: 'contact',
    data () {
        return {
            zoom: 13,
            center: latLng(37.4219999, -122.0840575),
            url: 'http://{s}.tile.osm.org/{z}/{x}/{y}.png',
            currentZoom: 14,
            currentCenter: latLng(37.4219999, -122.0840575),
            location: latLng(37.4219999, -122.0840575),
            mapOptions: {
                zoomSnap: 0.5
            },
            messageSubmitted: false
        }
    },
    components: {
        HeroBanner,
        Footer,
        LMap,
        LTileLayer,
        LMarker,
        LPopup
    },
    methods: {
        zoomUpdate (zoom) {
            this.currentZoom = zoom
        },
        centerUpdate (center) {
            this.currentCenter = center
        },
        requestForm () {
            this.messageSubmitted = false
            this.$refs.messageForm.classList.remove('slide-out-right')
                void this.$refs.messageForm.offsetWidth
        },
        submitMessage (e) {
            if (this.isInputValid()) {
                e.preventDefault()
                this.$refs.messageForm.classList.remove('slide-out-right')
                void this.$refs.messageForm.offsetWidth
                this.$refs.messageForm.classList.add('slide-out-right')
                this.clearInputs()
                setTimeout(() => {
                    this.messageSubmitted = true
                }, 700)
            } else {
                this.$refs.submitButton.classList.remove('error-animation')
                void this.$refs.submitButton.offsetWidth
                this.$refs.submitButton.classList.add('error-animation')
            }
        },
        isInputValid () {
            return this.$refs.firstname.value &&
                this.$refs.lastname.value &&
                this.$refs.text.value
        },
        clearInputs () {
            this.$refs.firstname.value = ''
            this.$refs.lastname.value = ''
            this.$refs.text.value = ''
        }
    },
    created () {
        delete Icon.Default.prototype._getIconUrl
        Icon.Default.mergeOptions({
            iconUrl: require('@/assets/logo.svg'),
            iconSize: [42, 42],
            shadowUrl: require('@/assets/leaflet-shadow.svg'),
            shadowAnchor: [4, 38]
        })
    }
}
</script>

<style lang="scss" scoped>
@import "../../node_modules/leaflet/dist/leaflet.css";
.contact {
    overflow: hidden;
}
.contact-details {
    margin-top: 469px;
    padding: 180px 20px 0;
    .container {
        @include mq(sm) {
            flex-direction: row;
        }
        .data {
            display: grid;
            grid-template-columns: 64px minmax(100px, 250px);
            grid-gap: 32px;
            .icon-container {
                height: 64px; width: 64px;
                background-color: clr(brand, pink);
                box-shadow: 2px 2px 2px 2px rgba(0, 0, 0, 0.2)
                img {
                    transition: all 0.1s ease;
                }
                &:hover,
                &:focus {
                    filter: brightness(0.9);
                    img {
                        transform: scale(1.1);
                    }
                }
            }
        }
        .map {
            margin-top: 64px;
            @include mq(sm) {
                margin: 0 0 0 64px;
            }
            width: 400px;
            height:400px;
            l-map {
                height: 400px;
                width: 400px;
                box-shadow: 2px 2px 2px 2px rgba(0, 0, 0, 0.4);
            }
        }
    }
}
.social-media {
    padding: 180px 20px;
    @include mq(sm) {
        flex-direction: row;
    }
    .icon-container {
        width: 128px;
        height: 128px;
        background-color: clr(background, secondary);
        border-radius: 50%;
        margin: 32px 0;
        @include mq(sm) {
            margin: 0 32px;
        }
        img {
            filter: brightness(0) invert(1);
            opacity: 0.8;
        }
        &:hover,
        &:focus {
            img {
                filter: none;
                opacity: 1;
            }
        }
    }
}
.message {
    padding: 0 20px;
    h2 {
        color: clr(brand, pink);
    }
    .form {
        max-width: 800px;
        display: grid;
        grid-gap: 32px;
        grid-template-areas:
            'firstname'
            'lastname'
            'text'
            'submit';
        @include mq(md) {
            grid-template-areas:
            'firstname lastname'
            'text text'
            'submit submit';
        }
        input, textarea {
            padding: 8px 12px;
            background-color: clr(background, secondary);
            color: clr(text);
            border: 2px solid clr(background, bright);
            border-radius: 4px;
            box-sizing: border-box;
        }
        input {
            line-height: 48px;
        }
        textarea {
            min-height: 100px;
            resize: vertical;
        }
        .firstname {
            grid-area: firstname;
        }
        .lastname {
            grid-area: lastname;
        }
        .text {
            grid-area: text;
        }
        .submit {
            grid-area: submit;
            .cta {
                margin-top: 27px;
                background: clr(brand, pink);
            }
        }
    }
    .submit-request {
        cursor: pointer;
        img {
            filter: brightness(0) invert(1);
        }
        opacity: 0.5;
        &:hover,
        &:focus {
            opacity: 1;
        }
    }
}
.error-animation {
    animation: shake-bottom 0.6s ease both;
}
@keyframes shake-bottom {
    0%,
    100% {
        transform: rotate(0deg);
        transform-origin: 50% 50%;
    }
    10% {
        transform: rotate(2deg);
    }
    20%,
    40%,
    60% {
        transform: rotate(-4deg);
    }
    30%,
    50%,
    70% {
        transform: rotate(4deg);
    }
    80% {
        transform: rotate(-2deg);
    }
    90% {
        transform: rotate(2deg);
    }
}
.slide-out-right {
	animation: slide-out-right 0.4s cubic-bezier(0.550, 0.085, 0.680, 0.530) both;
}
@keyframes slide-out-right {
    0% {
        transform: translateX(0);
        opacity: 1;
        height: 100%;
    }
    100% {
        transform: translateX(1000px);
        opacity: 0;
        height: 0;
    }
}
.footer {
    padding-top: 180px;
}
</style>
