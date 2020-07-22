<template>
    <div class="row slider">
        <div class="works__cat__header col-12">
            <div class="works__cat__header__title">
                <h4 @click="routeToCategory">პროექტები</h4>
            </div>
            <div
                v-if="sliderList.length > 0"
                class="works__cat__header__arrows"
            >
                <div class="left" @click="prev">
                    <img src="~/assets/img/left.svg" alt="left" />
                </div>
                <div class="right" @click="next">
                    <img src="~/assets/img/right.svg" alt="right" />
                </div>
            </div>
        </div>
        <div
            v-for="(item, index) in sliderList"
            :key="index"
            class="slider__img col-md-3"
        >
            <div
                v-if="sliderList.length > 0"
                class="slider__img__container"
                @click="routeToDetails(item._id)"
            >
                <img
                    :src="'http://94.237.98.180:8081/' + item.file[0].path"
                    alt="slider_img"
                />
            </div>
        </div>
        <div v-if="sliderList.length === 0" class>
            <AppSpinner></AppSpinner>
        </div>
    </div>
</template>

<script>
import { AppSpinner } from '../../components/spinner/AppSpinner'

export default {
    name: 'AppProjects',
    components: { AppSpinner },
    data() {
        return {
            projectsList: [],
            sliderList: [],
            sliderCounterIndex: 4,
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
                            this.projectsList[3],
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
        routeToCategory() {
            return this.$router.push('/our-works/projects/')
        },
        routeToDetails(id) {
            return this.$router.push('/our-works/projects/' + id)
        },
        next() {
            if (this.projectsList.length > this.sliderCounterIndex) {
                this.sliderList.splice(0, 1)
                this.sliderList.push(this.projectsList[this.sliderCounterIndex])
                this.sliderCounterIndex += 1
                console.log(this.sliderCounterIndex)
            } else {
                console.log('not enought length')
            }
        },
        prev() {
            if (this.sliderCounterIndex > 4) {
                this.sliderCounterIndex -= 1
                this.sliderList.unshift(
                    this.projectsList[this.sliderCounterIndex - 4]
                )
                this.sliderList.splice(this.sliderList.length - 1, 1)

                console.log(this.sliderCounterIndex)
            } else {
                console.log('not enought length')
            }
        },
    },
}
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
        display: flex;
        justify-content: center;

        &__container {
            width: 206.2px;
            height: 317px;
            cursor: pointer;

            img {
                width: 100%;
                height: 100%;
                border-radius: 8px;
                object-fit: cover;
            }
        }
    }
}
.works__cat__header {
    padding-bottom: 25px;
}
</style>
