<template>
    <div class>
        <div class="row slider">
            <div class="works__cat__header col-12">
                <div class="works__cat__header__title">
                    <h4 @click="routeToCategory">პილოტ პროგრამები</h4>
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
        </div>
        <div v-if="sliderList.length === 0" class>
            <AppSpinner></AppSpinner>
        </div>
    </div>
</template>

<script>
import { AppSpinner } from '../../components/spinner/AppSpinner'
export default {
    name: 'AppPilotPrograms',
    components: { AppSpinner },
    data() {
        return {
            pilotProgramsList: [],
            sliderList: [],
            sliderCounterIndex: 4,
        }
    },
    created: function () {
        this.getPilotPrograms()
    },
    methods: {
        getPilotPrograms() {
            return this.$axios
                .get('http://94.237.98.180:8081/api/pilot-projects')
                .then((data) => {
                    this.pilotProgramsList = data['data']['data']
                    if (this.pilotProgramsList.length > 4) {
                        this.sliderList = [
                            this.pilotProgramsList[0],
                            this.pilotProgramsList[1],
                            this.pilotProgramsList[2],
                            this.pilotProgramsList[3],
                        ]
                    } else {
                        if (this.pilotProgramsList.length === 1) {
                            this.sliderList = [this.pilotProgramsList[0]]
                        }
                        if (this.pilotProgramsList.length === 2) {
                            this.sliderList = [
                                this.pilotProgramsList[0],
                                this.pilotProgramsList[1],
                            ]
                        }
                        if (this.pilotProgramsList.length === 3) {
                            this.sliderList = [
                                this.pilotProgramsList[0],
                                this.pilotProgramsList[1],
                                this.pilotProgramsList[2],
                            ]
                        }
                    }
                })
                .catch((err) => {
                    console.log(err)
                })
        },
        routeToDetails(id) {
            return this.$router.push('/our-works/pilot-projects/' + id)
        },
        routeToCategory() {
            return this.$router.push('/our-works/pilot-projects')
        },
        next() {
            if (this.pilotProgramsList.length > this.sliderCounterIndex) {
                this.sliderList.splice(0, 1)
                this.sliderList.push(
                    this.pilotProgramsList[this.sliderCounterIndex]
                )
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
                    this.pilotProgramsList[this.sliderCounterIndex - 4]
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

<style lang="scss"></style>
