<template>
    <div class="row slider">
        <div class="slider_img col-md-3">
            <div class="slider__img__container">
                <img
                    src="~/assets/img/jack-hamilton-AUgTvvQxDhg-unsplash.svg"
                    alt="slider_img"
                />
            </div>
        </div>
        <div class="slider_img col-md-3">
            <div class="slider__img__container">
                <img
                    src="~/assets/img/jack-hamilton-AUgTvvQxDhg-unsplash.svg"
                    alt="slider_img"
                />
            </div>
        </div>
        <div class="slider_img col-md-3">
            <div class="slider__img__container">
                <img
                    src="~/assets/img/jack-hamilton-AUgTvvQxDhg-unsplash.svg"
                    alt="slider_img"
                />
            </div>
        </div>
        <div class="slider_img col-md-3">
            <div class="slider__img__container">
                <img
                    src="~/assets/img/jack-hamilton-AUgTvvQxDhg-unsplash.svg"
                    alt="slider_img"
                />
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "AppUniversalSlider"
};
</script>

<style lang="scss">
.slider {
    &__title {
        h4 {
            font-size: 20px;
            color: #000000;
        }
    }

    &__img {
        display: flex !important;
        justify-content: center;

        &__container {
            width: 206.2px;
            height: 317px;

            img {
                width: 100%;
                height: 100%;
                border-radius: 8px;
                object-fit: none;
            }
        }
    }
}
</style>
