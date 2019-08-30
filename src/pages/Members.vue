<template>
    <div class="members absolute flex items-center top-0 h-100 w-100">
        <a to="/" class="back-button" @click="$router.go(-1)">
            <img src="@/assets/icons/arrow-back.svg" alt="back arrow" height="32" />
        </a>
        <MemberSwitch class="member-switch" :members="members" />
        <svg class="shapes" width="110%" height="110%" viewBox="0 0 1920 1080" preserveAspectRatio="none" fill="none">
            <path
                d="M354 211C529.593 94.2073 376 -295.5 -262.5 127C-357.564 189.905 -163.207 151 -143.055 222.557C-122.904 294.114 -96.819 806.5 65 806.5C265 806.499 136 356 354 211Z"
                fill="#29ABE2"
                stroke="black"
            />
            <path
                d="M1204.5 -68.5003C1128.5 7.99979 841.001 -159.501 826.5 -68.5003C812 22.5002 1195.63 195.851 1384.56 150.426C1573.5 105 1280.5 -145 1204.5 -68.5003Z"
                fill="#29ABE2"
                stroke="black"
            />
            <circle cx="1513.5" cy="181.5" r="18.5" fill="#29ABE2" />
            <path
                d="M811.841 1310.73C1297.05 1230.56 500.32 898.283 317.272 1061.52C239.553 1152 -107.831 1065.6 -122.659 1173.23C-137.487 1280.87 335.298 1383.08 501.407 1320.47C650.644 1290.4 572.038 1350.36 811.841 1310.73Z"
                fill="#29ABE2"
                stroke="black"
            />
            <path
                d="M1996.15 980.954C1996.15 825.146 1953.69 751 1806.1 751C1684.06 750.999 1639.81 906.616 1624.99 1040.79C1610.18 1174.95 1763.75 1339.92 1929.71 1261.88C2078.81 1224.39 1996.15 1051.38 1996.15 980.954Z"
                fill="#29ABE2"
                stroke="black"
            />
            <circle cx="1479.5" cy="1008.5" r="39.5" fill="#29ABE2" />
            <circle cx="1573" cy="895" r="22" fill="#29ABE2" />
        </svg>
    </div>
</template>

<script>
import MemberSwitch from '@/components/MemberSwitch.vue';

export default {
    name: 'members',
    components: {
        MemberSwitch,
    },
    data() {
        return {
            members: [
                {
                    id: 0,
                    name: 'John Doe',
                    position: 'HR Manager',
                },
                {
                    id: 1,
                    name: 'John Doe',
                    position: 'HR Manager',
                },
                {
                    id: 2,
                    name: 'John Doe',
                    position: 'HR Manager',
                },
                {
                    id: 3,
                    name: 'John Doe',
                    position: 'HR Manager',
                },
                {
                    id: 4,
                    name: 'John Doe',
                    position: 'HR Manager',
                },
                {
                    id: 5,
                    name: 'John Doe',
                    position: 'HR Manager',
                },
                {
                    id: 6,
                    name: 'John Doe',
                    position: 'HR Manager',
                },
            ],
        };
    },
};
</script>

<style lang="scss" scoped>
.members {
    z-index: 999;
    background-color: clr(background);
    overflow: hidden;
}
.back-button {
    position: absolute;
    top: 28px;
    left: 28px;
    img {
        padding: 6px;
        border-radius: 50%;
        &:hover,
        &:focus {
            background-color: clr(background, bright);
        }
    }
    z-index: 2;
}
.member-switch {
    z-index: 1;
}
.shapes {
    position: absolute;
    top: 0;
    left: 0;
}
</style>
