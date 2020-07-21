<template>
    <div class="details">
        <div class="details__title">
            <h4>{{ selectedPostURL[2] }}</h4>
        </div>
        <div
            v-for="item in allDataList"
            :key="item._id"
            class="details__container col-12 mt-4"
        >
            <div class="details__container__title col-12 pb-4">
                <h4>{{ item.title }}</h4>
            </div>
            <div class="details__container__img col-lg-5 pl-0">
                <div class="details__container__img__container">
                    <img
                        :src="'http://localhost:8081/' + item.file[0].path"
                        alt="slider_img"
                    />
                </div>
            </div>
            <!-- <div class="details__container__text col-lg-7"> -->
            <p>{{ item.description }}</p>
            <!-- </div> -->
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            selectedPostURL: "",
            getApiURL: "http://localhost:8081/api/",
            allDataList: []
        };
    },
    created: function () {
        this.getDetailedPost();
        console.log(this.$route);
    },
    methods: {
        getDetailedPost() {
            this.selectedPostURL = this.$route.path.split("/");
            return this.$axios
                .get(
                    `${this.getApiURL}${this.selectedPostURL[2]}/${this.selectedPostURL[3]}`
                )
                .then((data) => {
                    this.allDataList = [data["data"]["data"]];
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
    background: #ffffff;
    border-radius: 8px;
    box-shadow: 0 4px 6px;
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

            &__container {
                height: 346px;
                line-height: 24px;

                img {
                    width: 100%;
                    height: 100%;
                    border-radius: 8px;
                }
            }
        }

        // &__text {
        p {
            color: #808080;
            font-size: 16px;
            text-align: left;
        }
        // }
    }
}
</style>
