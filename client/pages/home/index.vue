<template>
    <div class="home row">
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
                <h4>Title</h4>
            </div>
            <div class="home__text__text">
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
                    <p>More info</p>
                </div>
            </div>
        </div>
        <div class="home__text col-md-6">
            <div class="home__text__title">
                <h4>Title</h4>
            </div>
            <div class="home__text__text">
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
                    <p>More info</p>
                </div>
            </div>
        </div>
        <div class="home__left__img col-md-6">
            <div class="home__left__img__container">
                <img src="~/assets/img/Group 4.svg" alt="monument__img" />
            </div>
        </div>
    </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.home {
    &__img {
        margin-bottom: 12rem;
        &__container {
            position: absolute;
            left: 50%;
            top: 51px;
        }
    }

    &__text {
        &__title {
            h4 {
                font-size: 31px;
                color: #eeeeee;
            }
        }

        &__text {
            p {
                font-size: 1rem;
                color: #eeeeee;
            }
        }

        &__more {
            display: flex;
            // justify-content: center;
            align-items: center;
            .line {
                width: 42px;
                background-color: #bf9e32;
                height: 2px;
                margin-bottom: 1rem;
            }
            &__text {
                margin-left: 2rem;

                p {
                    font-size: 1rem;
                    color: #bf9e32;
                }
            }
        }
    }
}
</style>
