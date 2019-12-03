<template>
    <div
        class="dashboard-about absolute top-0 h-100 w-100 flex justify-center items-center flex-column"
    >
        The Vocality Web Dashboard is coming soon
        <div class="countdown flex">
            <span class="mx3 px2">
                {{ countdown.days }}
                <div>
                    Days
                </div>
            </span>
            <span class="mx3 px2">
                {{ countdown.hours }}
                <div>
                    Hours
                </div>
            </span>
            <span class="mx3 px2">
                {{ countdown.minutes }}
                <div>
                    Minutes
                </div>
            </span>
            <span class="mx3 px2">
                {{ countdown.seconds }}
                <div>
                    Seconds
                </div>
            </span>
        </div>
    </div>
</template>

<script>
import { setInterval } from 'timers';

export default {
    data() {
        return {
            releaseDate: new Date('Oct 1, 2019 00:00'),
            now: new Date(),
        };
    },
    created() {
        setInterval(() => {
            this.now = Date.now();
        }, 1000);
    },
    computed: {
        countdown: function() {
            const distance = this.releaseDate - this.now;
            return {
                days: Math.floor(distance / (1000 * 60 * 60 * 24)),
                hours: Math.floor(
                    (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
                ),
                minutes: Math.floor(
                    (distance % (1000 * 60 * 60)) / (1000 * 60)
                ),
                seconds: Math.floor((distance % (1000 * 60)) / 1000),
            };
        },
    },
};
</script>

<style lang="scss" scoped>
.dashboard-about {
    background-color: clr(background);
    z-index: 100;
    text-align: center;
}
.countdown {
    margin-top: 100px;
    span {
        font-size: 72px;
        div {
            font-size: 16px;
            color: clr(text, secondary);
        }
    }
}
</style>
