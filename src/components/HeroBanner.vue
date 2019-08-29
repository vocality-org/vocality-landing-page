<template>
    <div class="hero-banner text-center absolute w-100 top-0 overflow-hidden" :class="this.color">
        <h1 class="h1 m0">{{ title }}</h1>
    </div>
</template>

<script>
export default {
    name: 'heroBanner',
    props: {
        title: {
            type: String,
            required: true,
        },
        color: {
            type: String,
            default: 'cyan',
            validator: function(color) {
                if (color !== 'cyan' && color !== 'blue' && color !== 'pink') {
                    return false;
                }
                return true;
            },
        },
    },
};
</script>

<style lang="scss" scoped>
$banner-height: 469px;
$navbar-height: 80px;
.hero-banner {
    height: $banner-height;
    line-height: $banner-height - $navbar-height;
    padding-top: $navbar-height;
    box-shadow: 3px 0 10px 4px rgba(0, 0, 0, 0.2);
    h1 {
        font-size: 5vw;
        text-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);
        font-weight: bold;
        letter-spacing: 18px;
    }
    &::after {
        content: '';
        position: absolute;
        top: -72px;
        left: -45px;
        opacity: 0.3;
        width: 200%;
        height: 72px + $banner-height + $navbar-height;
        background-image: url('../assets/icons/banner-bg.svg');
    }
}
.cyan {
    background-color: clr(brand, cyan);
}
.blue {
    background-color: clr(brand, blue);
}
.pink {
    background-color: clr(brand, pink);
}
</style>
