<template>
    <div class="faq-seg">
        <div class="question flex items-center h3">
            <span class="drop-cap-q pl2 pb1 mr3">Q.</span>
            <p>
                <b><slot name="question"></slot></b>
            </p>
        </div>
        <div class="answer flex items-center h4">
            <span class="drop-cap-a pl2 pt1 mr3">A.</span>
            <p>
                <slot name="answer"></slot>
            </p>
        </div>
    </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.drop-cap-q {
    line-height: 72px;
    font-size: 72px;
    border-left: 4px solid;
    color: clr(brand, pink);
}
.drop-cap-a {
    line-height: 72px;
    font-size: 72px;
    border-left: 4px solid;
    color: #fff;
}
.answer {
    color: clr(text, secondary);
}
</style>
