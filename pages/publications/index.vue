<template>
    <div class="">
        <div v-if="publicationsList.length > 0" class="row pub p-4">
            <div class="pub__title col-12">
                <h4>პუბლიკაციები</h4>
            </div>
            <div
                v-for="item in publicationsList"
                :key="item._id"
                class="pub__box col-md-2 col-md-offset-1"
            >
                <div class="pub__box__img mt-4">
                    <div class="pub__box__img__container">
                        <img
                            :src="'http://94.237.98.180:8081/' + item.file[0].path"
                            alt="slider_img"
                        />
                        <span>{{ item.title }}</span>
                    </div>
                </div>
            </div>
        </div>
        <div v-if="publicationsList.length === 0" class="col-12 spinner p-5">
            <div class="">
                <AppSpinner></AppSpinner>
            </div>
        </div>
    </div>
</template>

<script>
import { AppSpinner } from "../../components/spinner/AppSpinner";
export default {
    components: { AppSpinner },
    data() {
        return {
            apiUrl: "http://94.237.98.180:8081/api/get-publications",
            publicationsList: []
        };
    },
    created: function () {
        this.getPublications();
    },
    methods: {
        getPublications() {
            return this.$axios
                .get(this.apiUrl)
                .then((data) => {
                    this.publicationsList = data["data"];
                })
                .catch((err) => {
                    console.log(err);
                });
        }
    }
};
</script>

<style lang="scss" scoped>
.pub {
    border-radius: 8px;
    background-color: white;
    box-shadow: 0 3px 4px #c4c4c4;

    &__title {
        h4 {
            font-size: 20px;
            color: #000000;
            text-align: left;
        }
    }
    &__box {
        &__img {
            &__container {
                width: 100%;
                height: 329.32px;
                img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    border-radius: 8px;
                    &:hover {
                        // filter: none;
                        -webkit-filter: grayscale(0%);
                        filter: grayscale(100%);
                        transition: 0.4s;
                    }
                }
                span {
                    position: absolute;
                    top: 50%;
                    left: 30px;
                    color: #ffffff;
                    font-size: 14px;
                    text-align: left;
                }
            }
        }
    }
}

.spinner {
    height: 100vh;
    background-color: white;
    border-radius: 8px;
}
</style>
