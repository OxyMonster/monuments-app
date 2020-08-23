<template>
    <div class="slider row align-items-center">
        <div class="slider__eclipse__one">
            <img src="~/assets/img/Ellipse 1.svg" alt="hero__img" />
        </div>
        <div class="slider__eclipse__two">
            <img src="~/assets/img/Ellipse 2.svg" alt="hero__img" />
        </div>
        <div class="slider__text col-md-6">
            <div class="slider__text__title col-12">
                <h4 @click="changeRoute()">პროექტები</h4>
            </div>
            <div class="slider__text__text col-12 mt-4">
                <p>
                    Enter each item on a new line, choose the amount of groups
                    unders settings, and click the button to generate your
                    randomized list. Don't like the first team? Just click again
                    until you do.groups unders settings, and click the button to
                    generate your randomized list. Don't like the first team?
                    Just click again until you do.
                </p>
            </div>
            <div class="slider__more col-12">
                <div class="slider__more__line"></div>
                <nuxt-link to="/our-works/projects">დეტალურად</nuxt-link>
            </div>
        </div>
        <div class="slider__img row col-md-6 justify-content-between p-0">
            <div
                v-for="(item, index) in sliderList"
                :key="index"
                class="slider__img__box col-4"
            >
                <div
                    class="slider__img__box__container"
                    lazy-background="~/assets/img/placeholder.png"
                    @click="routeToDetails(item._id)"
                >
                    <img
                        :src="'http://94.237.98.180:8081/' + item.file[0].path"
                        alt="slider_img"
                    />
                </div>
            </div>
        </div>

        <div
            class="slider__arrow col-12 d-flex align-items-center justify-content-end mt-5"
        >
            <div
                v-if="projectsList.length > 0"
                class="slider__arrow__length mr-3"
            >
                <p class="m-0">
                    {{ `${sliderCounterIndex}/${projectsList.length}` }}
                </p>
            </div>
            <div class="slider__arrow__img">
                <div class style="heigth: 70px; width: 80px;">
                    <img
                        style="cursor: pointer; heigth: 100%; width: 100%;"
                        src="~/assets/img/rigjt-arrow.png"
                        alt
                        @click="next"
                    />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'AppSlider',
    data() {
        return {
            sliderList: [],
            projectsList: [],
            sliderCounterIndex: 3,
        }
    },
    created: function () {
        this.getProjects()
    },
    methods: {
        getProjects() {
            return this.$axios
                .get('http://94.237.98.180:8081/api/projects')
                .then((data) => {
                    this.projectsList = data['data']['data']
                    if (this.projectsList.length > 4) {
                        this.sliderList = [
                            this.projectsList[0],
                            this.projectsList[1],
                            this.projectsList[2],
                        ]
                    } else {
                        if (this.projectsList.length === 1) {
                            this.sliderList = [this.projectsList[0]]
                        }
                        if (this.projectsList.length === 2) {
                            this.sliderList = [
                                this.projectsList[0],
                                this.projectsList[1],
                            ]
                        }
                        if (this.projectsList.length === 3) {
                            this.sliderList = [
                                this.projectsList[0],
                                this.projectsList[1],
                                this.projectsList[2],
                            ]
                        }
                    }
                })
                .catch((err) => {
                    console.log(err)
                })
        },
        routeToDetails(id) {
            return this.$router.push('/our-works/projects/' + id)
        },
        next() {
            if (this.projectsList.length - 1 > this.sliderCounterIndex) {
                this.sliderCounterIndex += 1
                this.sliderList.splice(0, 1)
                this.sliderList.push(this.projectsList[this.sliderCounterIndex])
                console.log(this.sliderList)

                console.log(this.sliderCounterIndex)
            } else {
                console.log('not enought length')
            }
        },
        prev() {
            if (this.sliderCounterIndex > 3) {
                this.sliderCounterIndex -= 1
                this.sliderList.unshift(
                    this.projectsList[this.sliderCounterIndex - 3]
                )
                this.sliderList.splice(this.sliderList.length - 1, 1)

                console.log(this.sliderCounterIndex)
            } else {
                console.log('not enought length')
            }
        },
        changeRoute() {
            this.$router.push('/our-works/projects/')
        },
    },
}
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
                color: #413f3f;
                font-size: 36px;
                cursor: pointer;
            }
        }

        &__text {
            p {
                color: #313131;
                text-align: left;
                line-height: 24px;
            }
        }
    }

    &__img {
        &__box {
            &__container {
                width: 100%;
                height: 456px;
                cursor: pointer;
                img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                }
            }
        }
    }

    &__more {
        display: flex;
        align-items: baseline;
        &__line {
            width: 42px;
            background-color: #bf9e32;
            height: 2px;
            margin-bottom: 1rem;
        }

        a {
            margin-left: 15px;
            color: #bf9e32;
            text-decoration: none;
        }
    }

    &__arrow {
        &__length {
            p {
                font-size: 24px;
                color: #000000;
            }
        }
    }

    .line {
        width: 42px;
        background-color: #000000;
        height: 2px;
        margin-bottom: 1rem;
    }
}
</style>
