<template>
    <div class="header row p-2">
        <div class="header__logo col-lg-5">
            <h1>Logo</h1>
        </div>

        <div class="header__links col-lg-7 d-flex">
            <div class="header__links__item col-md-2">
                <nuxt-link to="/home">მთავარი</nuxt-link>
            </div>

            <div class="header__links__item col-md-2">
                <nuxt-link to="/our-works">რას ვაკეთებთ</nuxt-link>
            </div>

            <div class="header__links__item col-md-2">
                <nuxt-link to="/publications">პუბლიკაციები</nuxt-link>
            </div>

            <div class="header__links__item col-md-2">
                <nuxt-link to="/about-us">ჩვენს შესახებ</nuxt-link>
            </div>

            <div class="header__links__item col-md-2">
                <nuxt-link to="/contact">კონტაქტი</nuxt-link>
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
    border-bottom: 1px solid #ffffff;
    background: #ffffff;
    box-shadow: 0 3px 4px #c4c4c4;
    justify-content: space-between;

    &__links {
        &__item {
            display: flex;
            align-items: center;
            justify-content: center;
            white-space: nowrap;
            a {
                color: #808080;
                font-size: 15px;
                text-decoration: none;

                &:hover {
                    color: #1d1d1d;
                    transition: 0.3s;
                }
            }
        }
    }
}
.nuxt-link-active {
    color: #1d1d1d !important;
}
</style>
