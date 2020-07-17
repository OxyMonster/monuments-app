<template>
    <div class="row works">
        <div class="works__cat col-12 mt-0">
            <div class="works__cat__header col-12">
                <div class="works__cat__header__title">
                    <h4>პილოტ პროგრამები</h4>
                </div>
                <div class="works__cat__header__arrows">
                    <div class="left">
                        <img src="" alt="left" />
                    </div>
                    <div class="right">
                        <img src="" alt="right" />
                    </div>
                </div>
            </div>
            <div class="works__cat__slider col-12">
                <AppUniversalSlider />
            </div>
        </div>
        <div class="works__cat col-12">
            <div class="works__cat__header col-12">
                <div class="works__cat__header__title">
                    <h4>პროექტები</h4>
                </div>
                <div class="works__cat__header__arrows">
                    <div class="left">
                        <img src="" alt="left" />
                    </div>
                    <div class="right">
                        <img src="" alt="right" />
                    </div>
                </div>
            </div>
            <div class="works__cat__slider col-12">
                <AppUniversalSlider />
            </div>
        </div>
        <div class="works__cat col-12">
            <div class="works__cat__header col-12">
                <div class="works__cat__header__title">
                    <h4>განხორციელებული პროექტები</h4>
                </div>
                <div class="works__cat__header__arrows">
                    <div class="left">
                        <img src="" alt="left" />
                    </div>
                    <div class="right">
                        <img src="" alt="right" />
                    </div>
                </div>
            </div>
            <div class="works__cat__slider col-12">
                <AppUniversalSlider />
            </div>
        </div>
        <div class="works__cat col-12">
            <div class="works__cat__header col-12">
                <div class="works__cat__header__title">
                    <h4>ვორქშოფები</h4>
                </div>
                <div class="works__cat__header__arrows">
                    <div class="left">
                        <img src="" alt="left" />
                    </div>
                    <div class="right">
                        <img src="" alt="right" />
                    </div>
                </div>
            </div>
            <div class="works__cat__slider col-12">
                <AppUniversalSlider />
            </div>
        </div>
    </div>
</template>

<script>
import { AppUniversalSlider } from "../../components/our-works/AppUniversalSlider";
export default {
    components: { AppUniversalSlider }
};
</script>

<style lang="scss">
.works {
    &__cat {
        background-color: #ffffff;
        box-shadow: 0 4px 6px;
        border-radius: 8px;
        margin-top: 50px;
        padding: 30px;
        &__header {
            display: flex;
            justify-content: space-between;
            &__title {
                h4 {
                    font-size: 20px;
                    color: #000000;
                }
            }

            &__arrows {
                display: flex;
                justify-content: space-between;
            }
        }

        &__slider {
            margin-top: 31px;
        }
    }
}
</style>
