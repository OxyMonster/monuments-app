<template>
    <div class="header row">
        <div class="header__logo col-md-6">
            <h1>Logo</h1>
        </div>

        <div class="header__links">
            <div class="header__links__item">
                <nuxt-link to="/">Home</nuxt-link>
            </div>

            <div class="header__links__item">
                <nuxt-link to="/about-us">About us</nuxt-link>
            </div>

            <div class="header__links__item">
                <nuxt-link to="/gallery">Gallery</nuxt-link>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "AppHeader"
};
</script>

<style></style>
