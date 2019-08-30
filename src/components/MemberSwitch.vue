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
        <div class="carousel mt3 flex justify-around relative">
            <div class="previous absolute flex justify-center items-center" @click="totalChanges--">
                <img src="@/assets/icons/arrow-back.svg" alt="previous member" />
            </div>
            <div class="next absolute flex justify-center items-center" @click="totalChanges++">
                <img src="@/assets/icons/arrow-forward.svg" alt="next member" />
            </div>
            <img
                v-for="m in members"
                :key="m.id"
                class="polygon absolute"
                :class="transitionClass(m.id)"
                src="@/assets/images/member.jpg"
                width="232"
                height="232"
            />
        </div>
        <div class="information">
            <h2 class="m0 h3">John Doe</h2>
            <h3 class="m0 h6 mt1">HR Manager</h3>
            <p class="m0 h6  mt3 mx-auto">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                consequat.
            </p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'member-switch',
    data() {
        return {
            totalChanges: 0,
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
    @include mq(sm) {
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
    img {
        transition: transform 0.4s ease, opacity 0.3s ease;
    }
    .previous {
        left: 370px;
    }
    .next {
        right: 370px;
    }
    .before-oc {
        transform: translate3d(-500px, 200px, 0) rotate(-30deg) scale(0.5);
        opacity: 0;
    }
    .before {
        transform: translate3d(-300px, 50px, 0) rotate(-20deg) scale(0.8);
    }
    .current {
        transform: none;
        &:hover {
        }
    }
    .after {
        transform: translate3d(300px, 50px, 0) rotate(20deg) scale(0.8);
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
        max-width: 300px;
    }
}
</style>
