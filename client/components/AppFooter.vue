/* eslint-disable prettier/prettier */
<template>
    <div class="footer row">
        <div class="footer__header col-12">
            <div class="footer__header__img col-md-2">
                <div class="footer__header__img__container">
                    <img src="assets/img/tbc-bank.svg" alt="img_here" />
                </div>
            </div>
        </div>

        <div class="footer__box__left col-md-6">
            <div class="footer__box__left__img">
                <div class="footer__box__left__img__container">
                    <img src alt="Left_Hero_Img" />
                </div>
            </div>
        </div>

        <div class="footer__box__right col-md-6 row">
            <div class="footer__box__right__info__title col-12">
                <h4>Contact</h4>
            </div>

            <div class="footer__box__right__info col-md-6">
                <div class="footer__box__right__info__text w-100">
                    <p>For Clients</p>
                </div>
                <div class="footer__box__right__info__text w-100">
                    <span>+995 599 12 32 70</span>
                </div>
                <div class="footer__box__right__info__email w-100">
                    <span>client@domain.com</span>
                </div>
            </div>

            <div class="footer__box__right__info col-md-6">
                <div class="footer__box__right__info__text w-100">
                    <p>For Contractors</p>
                </div>
                <div class="footer__box__right__info__text w-100">
                    <span>+995 599 12 32 70</span>
                </div>
                <div class="footer__box__right__info__email w-100">
                    <span>client@domain.com</span>
                </div>
            </div>

            <div class="footer__box__right__info col-md-6 mt-5">
                <div class="footer__box__right__info__text w-100">
                    <p>Office</p>
                </div>
                <div class="footer__box__right__info__text w-100">
                    <span>Tbilisi, Georgia </span>
                </div>
                <div class="footer__box__right__info__text w-100">
                    <span>zip code - 1200</span>
                </div>
            </div>
        </div>

        <div class="footer__bottom col-12 row">
            <div class="footer__bottom__logos d-flex col-9">
                <div class="footer__bottom__logos__item">
                    <img src alt="instagram" />
                </div>
                <div class="footer__bottom__logos__item">
                    <img src alt="twitter" />
                </div>
                <div class="footer__bottom__logos__item">
                    <img src alt="facebook" />
                </div>
            </div>

            <div class="footer__bottom__rights col-3">
                <span>Company 2020 All Rights Reserved</span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "AppFooter"
};
</script>

<style lang="scss">
.footer {
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
}
</style>
