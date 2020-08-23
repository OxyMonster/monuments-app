<template>
    <div class="row delete">
        <div class="col-12 d-flex justify-content-between pb-5">
            <div class="col d-flex justify-content-start p-0">
                <b-input
                    v-model="searchText"
                    placeholder="შეყვანეთ სათაური ან უნიკალური ID"
                ></b-input>
            </div>
            <div class="col-1 p-0 d-flex justify-content-end p-0">
                <b-button variant="success" type="submit" @click="filter"
                    >ძებნა</b-button
                >
            </div>
        </div>
        <div v-if="isFiltered" class="col-12">
            <p v-if="!isFound">
                ამ მონაცემებით პოსტი ვერ მოიძებნა ;(
            </p>
            <div class="mt-4">
                <b-button variant="primary" @click="showAllData"
                    >მაჩვენე ყველა</b-button
                >
            </div>
        </div>

        <div v-if="!isFiltered" class="row">
            <div class="delete__title col-12 my-4">
                <h4>{{ pageTitle + ' წაშლა / რედაქტირება' }}</h4>
            </div>
            <div
                v-for="(item, index) in allDataList"
                :key="item._id"
                class="delete__box col-lg-4 my-4"
            >
                <div class="delete__box__container">
                    <div class="delete__box__container__title">
                        <h4>{{ item.title }}</h4>
                    </div>
                    <div class="delete__box__container__id">
                        <p>{{ item._id }}</p>
                    </div>
                    <div class="delete__box__container__remove col-12 mt-5">
                        <div class="w-100 d-flex justify-content-center">
                            <!-- <b-button variant="warning">რედაქტირება</b-button> -->
                        </div>
                        <div class="w-100 d-flex justify-content-center mt-3">
                            <b-button
                                variant="danger"
                                class="d-flex justify-content-between align-items-center"
                                @click="deletePost(item._id, index)"
                            >
                                <p>წაშლა</p>
                            </b-button>
                        </div>
                        <div class="w-100 d-flex justify-content-center mt-3">
                            <b-button
                                variant="warning"
                                class="d-flex justify-content-between align-items-center"
                                @click="upadatePost(item._id)"
                            >
                                <p>რედაქტირება</p>
                            </b-button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div v-if="isFiltered" class="d-flex w-100">
            <div
                v-for="(item, index) in filteredData"
                :key="index"
                class="delete__box col-lg-4 my-4"
            >
                <div class="delete__box__container">
                    <div class="delete__box__container__title">
                        <h4>{{ item.title }}</h4>
                    </div>
                    <div class="delete__box__container__id">
                        <p>{{ item._id }}</p>
                    </div>
                    <div class="delete__box__container__remove col-12 mt-5">
                        <div class="w-100 d-flex justify-content-center">
                            <!-- <b-button variant="warning">რედაქტირება</b-button> -->
                        </div>
                        <div class="w-100 d-flex justify-content-center mt-3">
                            <b-button
                                variant="danger"
                                class="d-flex justify-content-between align-items-center"
                                @click="deletePost(item._id, index)"
                            >
                                <p>წაშლა</p>
                            </b-button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <b-modal
            id="modal"
            ref="modal"
            size="xl"
            hide-footer
            :title="'რედაქტირება'"
        >
            <div
                v-for="(item, index) in selectedPost"
                :key="index"
                class="group p-4 d-flex justify-content-center row"
            >
                <div class="group__input col-lg-12 mt-4">
                    <div class>
                        <h4>სათაური</h4>
                    </div>
                    <b-form-input
                        v-model="title"
                        :placeholder="item.title"
                    ></b-form-input>
                </div>
                <div class="group__input col-lg-12 mt-4">
                    <div class>
                        <h4>აღწერა</h4>
                    </div>

                    <b-form-textarea
                        id="textarea-rows"
                        v-model="description"
                        :placeholder="item.description"
                        rows="8"
                    ></b-form-textarea>
                </div>

                <!-- <div
                            class="group__input col-lg-12 d-flex justify-content-center mt-4"
                        >
                            <b-button
                                v-if="!isLoading"
                                variant="success"
                                @click="onSubmit"
                                >დამატება</b-button
                            >
                            <AppSpinner v-if="isLoading"></AppSpinner>
                        </div> -->
            </div>
        </b-modal>
    </div>
</template>

<script>
export default {
    data() {
        return {
            allDataList: [],
            filteredData: [],
            selectedCategory: '',
            getApiURL: 'http://94.237.98.180:8081/api/',
            deleteApiURL: 'http://94.237.98.180:8081/api/delete-',
            pageTitle: '',
            searchText: '',
            isFound: false,
            isFiltered: false,
            title: '',
            description: '',
            selectedPost: [],
        }
    },
    created: function () {
        this.getAllList()
        this.generateCategoryName()
    },
    methods: {
        getAllList() {
            this.selectedCategory = this.$route.params.id

            return this.$axios
                .get(`${this.getApiURL}${this.selectedCategory}`)
                .then((data) => {
                    this.allDataList = data['data']['data']
                })
                .catch((err) => {
                    console.log(err)
                })
        },

        filter() {
            this.isFiltered = true
            this.filteredData = this.allDataList.filter((item) => {
                if (
                    item.title === this.searchText ||
                    item._id === this.searchText
                ) {
                    return item
                } else {
                    this.filteredData = []
                }
            })
            console.log(this.filteredData.length)
            this.filteredData.length === 0
                ? (this.isFound = false)
                : (this.isFound = true)
        },

        showAllData() {
            this.isFiltered = false
        },
        generateCategoryName() {
            switch (this.selectedCategory) {
                case 'pilot-programs':
                    this.pageTitle = 'საპილოტო პროექტების'
                    break
                case 'projects':
                    this.pageTitle = 'პროექტების'
                    break
                case 'realized-projects':
                    this.pageTitle = 'დამთავრებული პროექტების'
                    break
                case 'publications':
                    this.pageTitle = 'პუბლიკაციების'
                    break
                case 'wokshops':
                    this.pageTitle = 'ვორკშოპების'
                    break
            }
        },

        deletePost(id, index) {
            return this.$axios
                .delete(`${this.deleteApiURL}${this.selectedCategory}/${id}`)
                .then((data) => {
                    console.log(data)
                    this.allDataList.splice(index, 1)
                })
                .catch((err) => {
                    console.log(err)
                })
        },
        upadatePost(id) {
            // Get selected post
            console.log(id)
            this.allDataList.map((item) => {
                if (item._id === id) {
                    const index = this.allDataList.indexOf(item)
                    console.log(index)
                    this.selectedPost = [this.allDataList[index]]
                }
            })

            this.$refs['modal'].show()
        },
    },
}
</script>

<style lang="scss">
.delete {
    &__box {
        &__container {
            background: white;
            border-radius: 8px;
            background: #ffffff;
            box-shadow: 0 3px 4px #c4c4c4;
            padding: 50px;
            border-radius: 8px;

            &__title {
                height: 80px;
            }

            &__id {
                margin-top: 90px;
            }

            &__remove {
                button {
                    img {
                        width: 35px;
                        height: 35px;
                    }
                    p {
                        margin: 0;
                    }
                }
            }
        }
    }
}
</style>
