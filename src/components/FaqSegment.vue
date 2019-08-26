<template>
    <div class="faqSeg">
        <div class="question flex items-center h3">
            <span class="dropCap pl2 pb1 mr3">Q.</span>
            <p>
                <b><slot name="question"></slot></b>
            </p>
        </div>
        <div class="answer flex items-center h4">
            <span class="dropCap pl2 pt1 mr3">A.</span>
            <p>
                <slot name="answer"></slot>
            </p>
        </div>
    </div>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
.dropCap {
    line-height: 72px;
    font-size: 72px;
    border-left: 4px solid;
}
.question {
    .dropCap {
        color: clr(brand, pink);
    }
}
.answer {
    color: clr(text, secondary);
    .dropCap {
        color: clr(text, secondary);
    }
}
</style>
