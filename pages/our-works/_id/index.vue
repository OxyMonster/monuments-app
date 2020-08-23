<template>
    <div class="row gallery p-4">
        <div class="gallery__title col-12">
            <h4>{{ selectedCategoryTitle }}</h4>
        </div>
        <div
            v-for="(item, index) in allCategoryData"
            :key="index"
            class="gallery__box col-lg-4 mt-4"
        >
            <div class="gallery__box__container">
                <div class="gallery__box__container__img">
                    <img
                        :src="'http://94.237.98.180:8081/' + item.file[0].path"
                        alt="slider_img"
                        @click="routeToDetails(item._id)"
                    />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            selectedCategory: '',
            selectedCategoryTitle: '',
            allCategoryData: [],
        }
    },
    created() {
        this.getSelectedCatData()
        this.generateCatTitle()
    },
    methods: {
        getSelectedCatData() {
            this.selectedCategory = this.$route.params.id
            console.log(this.selectedCategory)
            return this.$axios
                .get('http://94.237.98.180:8081/api/' + this.selectedCategory)
                .then((data) => {
                    this.allCategoryData = data['data']['data']
                    console.log(data)
                })
                .catch((err) => {
                    console.log(err)
                })
        },

        routeToDetails(id) {
            this.$router.push(`/our-works/${this.selectedCategory}/${id}`)
        },

        generateCatTitle() {
            switch (this.selectedCategory) {
                case 'pilot-projects':
                    this.selectedCategoryTitle = 'პილოტ პროგრამები'
                    break
                case 'projects':
                    this.selectedCategoryTitle = 'პროექტებები'
                    break
                case 'realized-projects':
                    this.selectedCategoryTitle = 'განხორციელებული პროექტები'
                    break
                case 'work-shops':
                    this.selectedCategoryTitle = 'ვორქშოპები'
                    break
            }
        },
    },
}
</script>

<style lang="scss">
.gallery {
    background: white;
    border-radius: 8px;

    &__title {
        h4 {
            font-size: 20px;
            color: #000000;
            text-align: left;
        }
    }
    &__box {
        &__container {
            &__img {
                width: 100%;
                height: 313px;
                img {
                    width: 100%;
                    height: 100%;
                    border-radius: 8px;
                    cursor: pointer;
                }
            }
        }
    }
}
</style>
