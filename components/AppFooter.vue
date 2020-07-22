<template>
    <div class="footer row">
        <div class="footer__bottom col-12 row">
            <div class="footer__bottom__logos d-flex col-3">
                <div class="footer__bottom__logos__item col-4">
                    <img src="~/assets/img/Path 23.svg" alt="instagram" />
                </div>
                <div class="footer__bottom__logos__item col-4">
                    <img src="~/assets/img/Path 21.svg" alt="twitter" />
                </div>
                <div class="footer__bottom__logos__item col-4">
                    <img src="~/assets/img/Path 24.svg" alt="facebook" />
                </div>
            </div>

            <div class="footer__bottom__right col-9 d-flex justify-content-end">
                <div class>
                    <span>Company 2020 All Rights Reserved</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'AppFooter',
}
</script>

<style lang="scss">
.footer {
    &__header {
        margin-bottom: 5rem;

        &__title {
            h4 {
                font-size: 20px;
                color: #ffffff;
            }
        }

        &__img {
            &__container {
                img {
                    filter: grayscale(70%);
                }
            }
        }
    }

    &__box__left {
        &__img {
            display: flex;
            justify-content: flex-start;
            &__container {
                max-width: 711px;
                max-height: 350px;

                img {
                    width: 100%;
                    height: 100%;
                }
            }
        }
    }

    &__box__right__info {
        &__title {
            color: #ffffff;
            font-size: 24px;
        }
        &__text {
            color: #ffffff;
            p {
                font-size: 20px;
            }

            span {
                font-size: 18px;
            }
        }

        &__email {
            color: #c52c2c;
        }
    }

    &__bottom {
        margin-top: 3rem;
        padding-bottom: 1rem;
        &__logos {
            &__item {
                display: flex;
                justify-content: flex-start;

                img {
                    cursor: pointer;
                }
            }
        }

        &__right {
            span {
                color: #d4d4d5;
            }
        }
    }
}
</style>
