<template>
    <div class="gallery row">
        <div class="gallery__img col-md-3">
            <div class="gallery__img__container">
                <img
                    src="~assets/img/mikhail-villegas-bDtm8Jl1oDo-unsplash.svg"
                    alt=""
                />
            </div>
        </div>
    </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.gallery {
    &__img {
        &__container {
            width: 213.8px;
            height: 315.54px;
            overflow: hidden; /* [1.2] Hide the overflowing of child elements */

            img {
                width: 100%;
                height: 100%;
                transition: transform 0.5s ease;

                &:hover {
                    transform: scale(1.5);
                }
            }
        }
    }
}
</style>
