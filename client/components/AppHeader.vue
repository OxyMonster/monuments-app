<template>
    <div class="header row">
        <div class="header__logo col-md-6">
            <h1>Logo</h1>
        </div>

        <div class="header__links col-md-6 d-flex">
            <div class="header__links__item col-md-4">
                <nuxt-link to="/home">Home</nuxt-link>
            </div>

            <div class="header__links__item col-md-4">
                <nuxt-link to="/about-us">About us</nuxt-link>
            </div>

            <div class="header__links__item col-md-4">
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

<style lang="scss">
.header {
    border-bottom: 1px solid #707070;
    margin-bottom: 6rem;

    &__links {
        &__item {
            display: flex;
            align-items: center;
            a {
                color: #d4d4d5;
                font-size: 18px;
                text-decoration: none;

                &:hover {
                    color: #ffffff;
                    transition: 0.3s;
                }
            }
        }
    }
}
</style>
