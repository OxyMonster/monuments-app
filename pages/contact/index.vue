<template>
    <div class="row contact justify-content-between">
        <div class="contact__left col-lg-6">
            <div class="contact__left__map">
                <img src="~/assets/img/map.png" alt="map" />
            </div>
        </div>
        <div class="contact__right col-lg row justify-content-between">
            <div class="contact__right__container col-lg-6">
                <div class="contact__right__container__title">
                    <h4>კლიენტებისთვის</h4>
                </div>
                <div class="contact__right__container__text">
                    <p>557 444 030</p>
                </div>
                <div class="contact__right__container__text">
                    <a>ivertmsheni1@mail.ru</a>
                </div>

                <div class="contact__right__container__title mt-5">
                    <h4>კონტრაქტორებისთვის</h4>
                </div>
                <div class="contact__right__container__text">
                    <p>599 299 541</p>
                </div>
                <div class="contact__right__container__text">
                    <a>ivertmsheni1@mail.ru</a>
                </div>
            </div>
            <div class="contact__right__container col-lg-6">
                <div class="contact__right__container__title">
                    <h4>ოფისი</h4>
                </div>
                <div class="contact__right__container__text">
                    <p>Tbilisi, Georgia</p>
                </div>
                <div class="contact__right__container__text">
                    <p>ალექსანდრე ყაზბეგის გამზირი N14</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {}
</script>

<style lang="scss">
.contact {
    height: 100vh;

    &__left {
        &__map {
            width: 580px;
            height: 291px;

            img {
                width: 100%;
                height: 100%;
                border-radius: 8px;
                object-fit: cover;
            }
        }
    }
    &__right {
        &__container {
            margin-top: 17px;
            &__title {
                h4 {
                    color: #1d1d1d;
                    font-size: 20px;
                    text-align: left;
                    @media (max-width: 600px) {
                        text-align: center;
                    }
                }
            }
            &__text {
                color: #808080;
                font-size: 18px;
                text-align: left;

                @media (max-width: 600px) {
                    text-align: center !important;
                }
                a {
                    color: #1492e6 !important;
                }
            }
        }
    }
}
</style>
