<template>
    <div class="header row p-2">
        <div class="header__logo col-lg-2">
            <h1>Logo</h1>
        </div>

        <div class="header__links col-lg-10 row justify-content-end p-0">
            <div class="header__links__item col-md-2 col-md-offset-1">
                <nuxt-link to="/home">მთავარი</nuxt-link>
            </div>

            <div class="header__links__item col-md-2">
                <nuxt-link to="/our-works">რას ვაკეთებთ</nuxt-link>
            </div>

            <div class="header__links__item col-md-2">
                <nuxt-link to="/publications">პუბლიკაციები</nuxt-link>
            </div>

            <div class="header__links__item col-md-2">
                <nuxt-link v-if="!$auth.user" to="/about-us"
                    >ჩვენს შესახებ</nuxt-link
                >
                <nuxt-link v-if="$auth.user" to="/admin"
                    >ადმინ პანელი</nuxt-link
                >
            </div>

            <div
                class="header__links__item col-md-2 d-flex justify-content-center"
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
    name: "AppHeader",
    methods: {
        async logout() {
            await this.$auth.logout();
            this.$router.push("/");
        }
    }
};
</script>

<style lang="scss">
.header {
    border-bottom: 1px solid #ffffff;
    background: #ffffff;
    box-shadow: 0 3px 4px #c4c4c4;
    justify-content: space-between;
    padding-left: 78px !important;
    padding-right: 70px !important;
    &__links {
        &__item {
            display: flex;
            align-items: center;
            justify-content: flex-end;
            white-space: nowrap;
            padding: 0 !important;
            a {
                color: #808080;
                font-size: 15px !important;
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
