/* eslint-disable vue/valid-template-root */
<template>
    <div class="burger">
        <div class="burger__icon d-flex justify-content-end p-2">
            <div class="burger__icon__container">
                <img src="~/assets/img/menu.svg" alt="" @click="toggleNav" />
            </div>
        </div>
        <div v-if="open" class="menu__bar">
            <div
                class="header__links__item d-flex justify-content-center mt-2 col-md-2 col-md-offset-1"
            >
                <nuxt-link to="/home">მთავარი</nuxt-link>
            </div>

            <div
                class="header__links__item d-flex justify-content-center mt-2 col-md-2"
            >
                <nuxt-link to="/our-works">რას ვაკეთებთ</nuxt-link>
            </div>

            <div
                class="header__links__item d-flex justify-content-center mt-2 col-md-2"
            >
                <nuxt-link to="/publications">პუბლიკაციები</nuxt-link>
            </div>

            <div
                class="header__links__item d-flex justify-content-center mt-2 col-md-2"
            >
                <nuxt-link v-if="!$auth.user" to="/about-us"
                    >ჩვენს შესახებ</nuxt-link
                >
                <nuxt-link v-if="$auth.user" to="/admin"
                    >ადმინ პანელი</nuxt-link
                >
            </div>

            <div
                class="header__links__item d-flex justify-content-center mt-2 col-md-2 d-flex justify-content-center"
            >
                <nuxt-link v-if="!$auth.user" to="/contact">კონტაქტი</nuxt-link>
                <b-button v-if="$auth.user" variant="danger" @click="logout"
                    >გამოსვლა</b-button
                >
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'AppBurgerMenu',
    data: function () {
        return {
            open: false,
        }
    },

    methods: {
        toggleNav: function () {
            this.open = !this.open
        },
        async logout() {
            await this.$auth.logout()
            this.$router.push('/')
        },
    },
}
</script>

<style lang="scss" scoped>
.burger {
    &__icon {
        &__container {
            width: 40px;
            height: 40px;
            img {
                width: 100%;
                height: 100%;
                cursor: pointer;
            }
        }
    }
}
</style>
