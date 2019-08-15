<template>
    <div id="app">
        <router-view/>
    </div>
</template>

<style lang="scss">
    html, body {
        font-family: 'Roboto', sans-serif;

        body {
            background-color: $color-background;
            color: $color-text;
            margin: 0;

            .page-wrap {
                float: right;
                width: 100%;
                transition: margin-right 0.3s ease-out;
            }
        }
    }

    a {
        cursor: pointer;
        color: $color-text;
    }

    :focus {
        outline: none;
    }
</style>
