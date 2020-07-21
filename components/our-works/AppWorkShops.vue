<template>
    <div class="row slider">
        <div class="works__cat__header col-12">
            <div class="works__cat__header__title">
                <h4 @click="routeToCategory">ვორქშოფები</h4>
            </div>
            <div class="works__cat__header__arrows">
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
</template>

<script>
export default {
    name: "AppWorkShops",

    data() {
        return {
            workShopsList: [],
            sliderList: [],
            sliderCounterIndex: 4
        };
    },
    created: function () {
        this.getWorkShops();
    },
    methods: {
        getWorkShops() {
            return this.$axios
                .get("http://94.237.98.180:8081/api/work-shops")

                .then((data) => {
                    this.workShopsList = data["data"]["data"];
                    if (this.workShopsList.length > 0) {
                        this.sliderList = [
                            this.workShopsList[0],
                            this.workShopsList[1],
                            this.workShopsList[2],
                            this.workShopsList[3]
                        ];
                    } else {
                        this.sliderList = [];
                    }
                })
                .catch((err) => {
                    console.log(err);
                });
        },
        routeToDetails(id) {
            return this.$router.push("/our-works/work-shops/" + id);
        },
        routeToCategory() {
            return this.$router.push("/our-works/work-shops/");
        },
        next() {
            if (this.workShopsList.length > this.sliderCounterIndex) {
                this.sliderList.splice(0, 1);
                this.sliderList.push(
                    this.workShopsList[this.sliderCounterIndex]
                );
                this.sliderCounterIndex += 1;
                console.log(this.sliderCounterIndex);
            } else {
                console.log("not enought length");
            }
        },
        prev() {
            if (this.sliderCounterIndex > 4) {
                this.sliderCounterIndex -= 1;
                this.sliderList.unshift(
                    this.workShopsList[this.sliderCounterIndex - 4]
                );
                this.sliderList.splice(this.sliderList.length - 1, 1);

                console.log(this.sliderCounterIndex);
            } else {
                console.log("not enought length");
            }
        }
    }
};
</script>
