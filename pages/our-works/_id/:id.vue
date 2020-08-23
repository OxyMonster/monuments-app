<template>
    <div class="details pb-5 h-100">
        <div class="details__title">
            <!-- <h4>{{ selectedPostURL[2] }}</h4> -->
        </div>
        <div
            v-for="item in allDataList"
            :key="item._id"
            class="details__container col-12 mt-4 h-100"
        >
            <div class="details__container__title col-12 pb-4">
                <h4>{{ item.title }}</h4>
            </div>
            <div class="details__container__img col-lg-5 pl-0">
                <div
                    lazy-background="~/assets/img/placeholder.png"
                    class="details__container__img__container"
                >
                    <img
                        :src="'http://94.237.98.180:8081/' + item.file[0].path"
                        alt="slider_img"
                    />
                </div>
            </div>
            <div
                v-if="item.file[1]"
                class="details__container__img col-lg-5 p-3"
                style="float: right;"
            >
                <div
                    lazy-background="~/assets/img/placeholder.png"
                    class="details__container__img__container"
                >
                    <img
                        :src="'http://94.237.98.180:8081/' + item.file[1].path"
                        alt="slider_img"
                    />
                </div>
            </div>
            <div class="details__container__text col p-0">
                <p>{{ item.description }}</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            selectedPostURL: '',
            getApiURL: 'http://94.237.98.180:8081/api/',
            allDataList: [],
        }
    },
    created: function () {
        this.getDetailedPost()
        console.log(this.$route)
    },
    methods: {
        getDetailedPost() {
            this.selectedPostURL = this.$route.path.split('/')
            return this.$axios
                .get(
                    `${this.getApiURL}${this.selectedPostURL[2]}/${this.selectedPostURL[3]}`
                )
                .then((data) => {
                    this.allDataList = [data['data']['data']]
                })
                .catch((err) => {
                    console.log(err)
                })
        },
    },
}
</script>

<style lang="scss">
.details {
    background: #ffffff;
    border-radius: 8px;
    padding: 30px;
    &__title {
        h4 {
            text-align: left;
            font-size: 20px;
        }
    }
    &__container {
        &__title {
            h4 {
                color: #000000;
                font-size: 16px;
                text-align: left;
            }
        }
        &__img {
            height: 346px;
            float: left;
            clear: left;
            z-index: 2;

            &__container {
                height: 100%;
                line-height: 24px;

                img {
                    width: 100%;
                    height: 100%;
                    border-radius: 8px;
                }
            }
        }

        &__text {
            // padding-bottom: 200px;
            min-height: 100vh;
            // background-color: white;
            // color: white;
            p {
                color: #808080;
                font-size: 16px;
                text-align: left;
                z-index: 2;
            }
        }
    }
}
</style>
