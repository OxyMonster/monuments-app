<template>
    <div>
        <div>
            <div class="wrapper row p-0">
                <div class="wrapper__header col-12">
                    <AppHeader></AppHeader>
                </div>

                <div class="wrapper__body col-12">
                    <Nuxt />
                </div>

                <div class="wrapper__footer col-12">
                    <AppFooter></AppFooter>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import AppHeader from "../components/AppHeader";
import AppFooter from "../components/AppFooter";

export default {
    components: {
        AppHeader,
        AppFooter
    }
};
</script>
<style lang="scss">
html {
    font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont,
        "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
    font-size: 16px;
    word-spacing: 1px;
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    box-sizing: border-box;
}

*,
*::before,
*::after {
    box-sizing: border-box;
    margin: 0;
}

.wrapper {
    margin: 0 auto;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    background: #eaedf2;

    &__header {
        background-color: #eaedf2;
        position: absolute;
        top: 0;
    }

    &__body {
        padding: 0 112px 150px;
        margin-top: 120px;
    }

    &__footer {
        padding: 0 112px;
        background-color: #141313;
    }
}

.title {
    font-family: "Quicksand", "Source Sans Pro", -apple-system,
        BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial,
        sans-serif;
    display: block;
    font-weight: 300;
    font-size: 100px;
    color: #35495e;
    letter-spacing: 1px;
}

.subtitle {
    font-weight: 300;
    font-size: 42px;
    color: #526488;
    word-spacing: 5px;
    padding-bottom: 15px;
}

.links {
    padding-top: 15px;
}
</style>
