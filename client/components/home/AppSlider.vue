<template>
    <div class="slider row">
        <div class="slider__eclipse__one">
            <img src="~/assets/img/Ellipse 1.svg" alt="hero__img" />
        </div>
        <div class="slider__eclipse__two">
            <img src="~/assets/img/Ellipse 2.svg" alt="hero__img" />
        </div>
        <div class="slider__text col-md-6 row align-items-center">
            <div class="slider__text__title col-12">
                <h4>Recently added</h4>
            </div>
            <div class="slider__text__text col-12">
                <p>
                    Enter each item on a new line, choose the amount of groups
                    unders settings, and click the button to generate your
                    randomized list. Don't like the first team? Just click again
                    until you do.groups unders settings, and click the button to
                    generate your randomized list. Don't like the first team?
                    Just click again until you do.
                </p>
            </div>
        </div>
        <div class="slider__img row col-md-6 justify-content-between">
            <div class="slider__img__box col-4">
                <div class="slider__img__box__container">
                    <img
                        src="~/assets/img/Component 2 – 3.svg"
                        alt="hero__img"
                    />
                </div>
            </div>
            <div class="slider__img__box col-4">
                <div class="slider__img__box__container">
                    <img
                        src="~/assets/img/Component 2 – 3.svg"
                        alt="hero__img"
                    />
                </div>
            </div>
            <div class="slider__img__box col-4">
                <div class="slider__img__box__container">
                    <img
                        src="~/assets/img/Component 2 – 3.svg"
                        alt="hero__img"
                    />
                </div>
            </div>
        </div>

        <div class="slider__arrow col-12 d-flex justify-content-end mt-5">
            <div class="slider__arrow__length mr-3">
                <p>1/08</p>
            </div>
            <div class="slider__arrow__img">
                <div class="slider__arrow__img__container">
                    <img src="~/assets/img/Path 2.svg" alt="" />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "AppSlider"
};
</script>

<style lang="scss">
.slider {
    &__eclipse__one {
        position: absolute;
        right: 0;
    }

    &__eclipse__two {
        position: absolute;
        top: 15%;
        right: 50%;
    }

    &__text {
        &__title {
            h4 {
                color: #ffffff;
                font-size: 36px;
            }
        }

        &__text {
            p {
                color: #ffffff;
            }
        }
    }

    &__arrow {
        &__length {
            p {
                font-size: 24px;
                color: #ffffff;
            }
        }
    }
}
</style>
