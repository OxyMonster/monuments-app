<template>
    <div class="row works">
        <!-- <div class="works__cat col-12 mt-0">
            <div class="works__cat__slider col-12">
                <AppPilotPrograms />
            </div>
        </div> -->
        <div class="works__cat col-12 mt-0">
            <div class="works__cat__slider col-12">
                <AppProjects />
            </div>
        </div>
        <div class="works__cat col-12">
            <div class="works__cat__slider col-12">
                <AppRealizedProjects />
            </div>
        </div>
        <!-- <div class="works__cat col-12">
            <div class="works__cat__slider col-12">
                <AppWorkShops />
            </div>
        </div> -->
    </div>
</template>

<script>
// import { AppPilotPrograms } from '../../components/our-works/AppPilotPrograms'
import { AppProjects } from '../../components/our-works/AppProjects'
import { AppRealizedProjects } from '../../components/our-works/AppRealizedProjects'
// import { AppWorkShops } from '../../components/our-works/AppWorkShops'

export default {
    components: {
        // AppPilotPrograms,
        AppProjects,
        AppRealizedProjects,
        // AppWorkShops,
    },
    data() {
        return {
            pilotProgramsList: [],
        }
    },

    methods: {},
}
</script>

<style lang="scss">
.works {
    &__cat {
        background-color: #ffffff;
        border-radius: 8px;
        margin-top: 50px;
        padding: 30px;
        padding-top: 0;
        &__header {
            display: flex;
            justify-content: space-between;
            &__title {
                h4 {
                    font-size: 20px;
                    color: #000000;
                    cursor: pointer;
                }
            }

            &__arrows {
                .left {
                    padding-right: 13px;
                    user-select: none;
                    img {
                        cursor: pointer;
                    }
                }
                .right {
                    padding-right: 13px;
                    user-select: none;

                    img {
                        cursor: pointer;
                    }
                }
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
