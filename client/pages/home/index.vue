<template>
    <div class="home row">
        <div class="home__slider col-12">
            <AppSlider></AppSlider>
        </div>
        <div class="home__img col-md-6">
            <div class="home__img__back">
                <div class="home__img__back__yellow">
                    <img
                        src="~/assets/img/Rectangle 9.svg"
                        alt="monument__img"
                    />
                </div>
                <div class="home__img__back__black">
                    <img
                        src="~/assets/img/Rectangle 10.svg"
                        alt="monument__img"
                    />
                </div>
            </div>
            <div class="home__img__container">
                <img
                    src="~/assets/img/mikhail-villegas-bDtm8Jl1oDo-unsplash.svg"
                    alt="monument__img"
                />
            </div>
        </div>
        <div class="home__text col-md-6">
            <div class="home__text__title">
                <h4>განხორციელებული პროექტები</h4>
            </div>
            <div class="home__text__tex mt-4">
                <p style="text-align: left;">
                    enter each item on a new line, choose the amount of groups
                    unders settings, and click the button to generate your
                    randomized list. Don't like the first team? Just click again
                    until you do.groups unders settings, and click the button to
                    generate your randomized list. don't like the first team?
                    Just click again until you do.
                </p>
            </div>
            <div class="home__text__more d-flex">
                <div class="line"></div>
                <div class="home__text__more__text">
                    <nuxt-link to="/our-works">ვრცლად</nuxt-link>
                </div>
            </div>
        </div>
        <div class="home__text col-md-6">
            <div class="home__text__title">
                <h4>პუბლიკაციები</h4>
            </div>
            <div class="home__text__text mt-4">
                <p>
                    Enter each item on a new line, choose the amount of groups
                    unders settings, and click the button to generate your
                    randomized list. Don't like the first team? Just click again
                    until you do.groups unders settings, and click the button to
                    generate your randomized listfirst team? Just click again
                    until you do.Enter each item on a new line, choose the
                    amount of groups unders settings, an
                </p>
            </div>
            <div class="home__text__more d-flex">
                <div class="line"></div>
                <div class="home__text__more__text">
                    <nuxt-link to="/publications">ვრცლად</nuxt-link>
                </div>
            </div>
        </div>
        <div class="home__left__img col-md-6">
            <div class="home__left__img__container d-flex justify-content-end">
                <img src="~/assets/img/Group 4.svg" alt="monument__img" />
            </div>
        </div>
    </div>
</template>

<script>
import AppSlider from "../../components/home/AppSlider.vue";
export default {
    components: {
        AppSlider
    }
};
</script>

<style lang="scss">
.home {
    align-items: center;
    &__slider {
        margin-bottom: 4rem;
    }
    &__img {
        margin-bottom: 4rem;
        display: flex;
        justify-content: flex-start;
        &__container {
            position: absolute;
            left: 12%;
            top: 51px;
        }
    }

    &__text {
        &__title {
            h4 {
                font-size: 31px;
                color: #413f3f;
            }
        }

        &__text {
            text-align: start;
            p {
                font-size: 16px;
                color: #313131;
                text-align: left;
            }
        }

        &__more {
            display: flex !important;
            // justify-content: center;
            align-items: baseline;
            margin-top: 35px;
            .line {
                width: 42px;
                background-color: #bf9e32;
                height: 2px;
                margin-bottom: 1rem;
            }
            &__text {
                margin-left: 16px;

                a {
                    font-size: 1rem;
                    color: #bf9e32;
                    cursor: pointer;
                    user-select: none;
                    // text-align: left;
                    text-decoration: none;
                }
            }
        }
    }
}
</style>
