<template>
    <div class="details">
        <div
            v-for="item in allDataList"
            :key="item._id"
            class="details__container col-12 row"
        >
            <div class="details__container__title col-12 pb-4">
                <h4>{{ item.title }}</h4>
            </div>
            <div class="details__container__img col-lg-5">
                <div class="details__container__img__container">
                    <img
                        :src="'http://localhost:8081/' + item.file[0].path"
                        alt="slider_img"
                    />
                </div>
            </div>
            <div class="details__container__text col-lg-7">
                <p>{{ item.description }}</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            selectedPostID: "",
            getApiURL: "http://localhost:8081/api/",
            allDataList: []
        };
    },
    created: function () {
        this.getDetailedPost();
    },
    methods: {
        getDetailedPost() {
            console.log(this.$route.params);
            this.selectedPostID = this.$route.params.id;
            return this.$axios
                .get(
                    `${this.getApiURL}${this.selectedPostID.split("$")[0]}/${
                        this.selectedPostID.split("$")[1]
                    }`
                )
                .then((data) => {
                    this.allDataList = [data["data"]["data"]];
                    console.log(this.allDataList);
                })
                .catch((err) => {
                    console.log(err);
                });
        }
    }
};
</script>

<style lang="scss">
.details {
    &__container {
        background: #ffffff;
        border-radius: 8px;
        box-shadow: 0 4px 6px;
        padding: 30px;

        &__title {
            h4 {
                color: #000000;
                font-size: 16px;
                text-align: left;
            }
        }
        &__img {
            height: 346px;

            &__container {
                height: 346px;

                img {
                    width: 100%;
                    height: 100%;
                    border-radius: 8px;
                }
            }
        }

        &__text {
            p {
                color: #808080;
                font-size: 16px;
                text-align: left;
            }
        }
    }
}
</style>
