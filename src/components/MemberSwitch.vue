<template>
    <div class="member-switch mx-auto text-center py4 flex flex-column justify-center">
        <svg height="0" width="0" class="absolute">
            <defs>
                <clipPath id="poly-clip">
                    <path
                        d="M86.6107 21.3525C104.135 8.62034 127.865 8.62035 145.389 21.3525L196.933 58.8015C214.458 71.5337 221.791 94.102 215.097 114.703L195.409 175.297C188.715 195.898 169.517 209.846 147.856 209.846H84.144C62.4827 209.846 43.2849 195.898 36.5912 175.297L16.9031 114.703C10.2094 94.1021 17.5423 71.5337 35.0667 58.8015L86.6107 21.3525Z"
                    />
                </clipPath>
            </defs>
        </svg>
        <h1 class="m0 h1">Team Members</h1>
        <div class="carousel mt3 flex justify-center relative">
            <div class="previous absolute flex justify-center items-center" @click="changeCarousel(-1)">
                <img src="@/assets/icons/arrow-back.svg" alt="previous member" />
            </div>
            <div class="next absolute flex justify-center items-center" @click="changeCarousel(1)">
                <img src="@/assets/icons/arrow-forward.svg" alt="next member" />
            </div>
            <div v-for="m in members" :key="m.id" class="flex justify-center image-wrapper">
                <img
                    class="polygon absolute"
                    :class="transitionClass(m.id)"
                    @click="handleImageClick(m.id)"
                    :src="require(`@/assets/images/${m.name.toLowerCase()}.jpg`)"
                    width="232"
                    height="232"
                />
                <div
                    v-if="computedTransitionClasses[2] === m.id"
                    class="center-overlay z1 polygon flex justify-center items-center"
                >
                    <a :href="`https://github.com/${m.github}`" target="__blank">
                        <img src="@/assets/icons/github.svg" alt="github" width="36" height="36" />
                    </a>
                </div>
            </div>
        </div>
        <transition :name="`fade-${lastChange === -1 ? 'right' : 'left'}`">
            <div class="information" :key="currentMember">
                <h2 class="m0 h3">{{ currentMember.name }}</h2>
                <h3 class="m0 h6 mt1">{{ currentMember.position }}</h3>
                <p class="m0 h6  mt3 mx-auto">{{ currentMember.description }}</p>
            </div>
        </transition>
    </div>
</template>

<script>
export default {
    name: 'member-switch',
    data() {
        return {
            totalChanges: 0,
            lastChange: 0,
        };
    },
    props: {
        members: Array,
    },
    methods: {
        transitionClass: function(memberId) {
            return {
                'before-oc': memberId === this.computedTransitionClasses[0],
                before: memberId === this.computedTransitionClasses[1],
                current: memberId === this.computedTransitionClasses[2],
                after: memberId === this.computedTransitionClasses[3],
                'after-oc': memberId === this.computedTransitionClasses[4],
                'hidden-oc': !this.computedTransitionClasses.includes(memberId),
            };
        },
        handleImageClick: function(memberId) {
            if (this.computedTransitionClasses[1] === memberId) {
                this.changeCarousel(-1);
            }
            if (this.computedTransitionClasses[3] === memberId) {
                this.changeCarousel(1);
            }
        },
        changeCarousel: function(change) {
            this.totalChanges += change;
            this.lastChange = change;
        },
        getImage: function() {
            return '@/assets/images/members/julian.jpg';
        },
    },
    computed: {
        wrappingIndex: function() {
            return ((this.totalChanges % this.members.length) + this.members.length) % this.members.length;
        },
        computedTransitionClasses: function() {
            const posArr = [];

            let count = 0;
            for (let index = this.wrappingIndex; index < this.members.length; index++) {
                if (count === 5) {
                    break;
                }
                posArr.push(index);
                count++;
            }

            const remaining = 5 - posArr.length;
            for (let index = 0; index < remaining; index++) {
                posArr.push(index);
            }

            return posArr;
        },
        currentMember: function() {
            return this.members[this.computedTransitionClasses[2]];
        },
    },
};
</script>

<style lang="scss" scoped>
.member-switch {
    width: 1040px;
    background-color: clr(background);
    height: 100%;
    h1 {
        color: clr(brand, cyan);
    }
    @media (min-width: 1040px) {
        background-color: clr(background, secondary);
        border-radius: 25px;
        height: unset;
    }
}
.polygon {
    clip-path: url(#poly-clip);
    min-width: 232px;
}
.carousel {
    height: 280px;

    .previous,
    .next {
        user-select: none;
        top: 116px;
        width: 32px;
        height: 32px;
        border-radius: 50%;
        cursor: pointer;
        &:hover,
        &:focus {
            background-color: clr(background, bright);
        }
    }
    .previous {
        left: 370px;
        @media (max-width: 1040px) {
            left: 20px;
        }
    }
    .next {
        right: 370px;
        @media (max-width: 1040px) {
            right: 20px;
        }
    }
    .image-wrapper {
        .center-overlay {
            position: absolute;
            background-color: clr(brand, cyan);
            width: 232px;
            height: 232px;
            opacity: 0;
            transition: opacity 0.15s ease;
            &:hover {
                opacity: 0.7;
            }
            img {
                transition: transform 0.2s ease;
                &:hover {
                    transform: scale(1.2);
                }
            }
        }
    }
    img {
        transition: transform 0.4s ease, opacity 0.3s ease;
    }
    .before-oc {
        transform: translate3d(-500px, 200px, 0) rotate(-30deg) scale(0.5);
        opacity: 0;
    }
    .before {
        transform: translate3d(-300px, 50px, 0) rotate(-20deg) scale(0.8);
        cursor: pointer;
        &:hover {
            filter: brightness(0.8);
        }
        @media (max-width: 1040px) {
            opacity: 0;
        }
    }
    .current {
        transform: none;
    }
    .after {
        transform: translate3d(300px, 50px, 0) rotate(20deg) scale(0.8);
        cursor: pointer;
        &:hover {
            filter: brightness(0.8);
        }
        @media (max-width: 1040px) {
            opacity: 0;
        }
    }
    .after-oc {
        transform: translate3d(500px, 200px, 0) rotate(30deg) scale(0.5);
        opacity: 0;
    }
    .hidden-oc {
        opacity: 0;
    }
}

.information {
    h2,
    h3 {
        font-weight: normal;
    }
    h3,
    p {
        color: clr(text, secondary);
    }
    p {
        max-width: 230px;
        height: 80px;
    }
}
.fade-right-enter-active,
.fade-right-leave-active,
.fade-left-enter-active,
.fade-left-leave-active {
    transition: all 0.4s ease;
}
.fade-right-enter,
.fade-right-leave-to {
    opacity: 0;
    transform: translateX(-200px);
}
.fade-left-enter,
.fade-left-leave-to {
    opacity: 0;
    transform: translateX(200px);
}
</style>
