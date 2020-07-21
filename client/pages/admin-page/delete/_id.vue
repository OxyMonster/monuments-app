<template>
    <div class="row delete">
        <div class="col-12 d-flex justify-content-between pb-5">
            <div class="col d-flex justify-content-start p-0">
                <b-input
                    placeholder="შეყვანეთ სათაური ან უნიკალური ID"
                ></b-input>
            </div>
            <div class="col-1 p-0 d-flex justify-content-end p-0">
                <b-button variant="success">ძებნა</b-button>
            </div>
        </div>

        <div class="delete__title col-12">
            <h4>{{ pageTitle + " წაშლა / რედაქტირება" }}</h4>
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
                        <b-button variant="warning">რედაქტირება</b-button>
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
</template>

<script>
export default {
    data() {
        return {
            allDataList: [],
            selectedCategory: "",
            getApiURL: "http://localhost:8081/api/get-",
            deleteApiURL: "http://localhost:8081/api/delete-",
            pageTitle: ""
        };
    },
    created: function () {
        this.getAllList();
        this.generateCategoryName();
    },
    methods: {
        getAllList() {
            console.log(this.$route.params);
            this.selectedCategory = this.$route.params.id;

            return this.$axios
                .get(`${this.getApiURL}${this.selectedCategory}`)
                .then((data) => {
                    this.allDataList = data["data"]["data"];
                    console.log(this.allDataList);
                })
                .catch((err) => {
                    console.log(err);
                });
        },

        generateCategoryName() {
            switch (this.selectedCategory) {
                case "pilot-programs":
                    this.pageTitle = "საპილოტო პროექტების";
                    break;
                case "projects":
                    this.pageTitle = "პროექტების";
                    break;
                case "realized-projects":
                    this.pageTitle = "დამთავრებული პროექტების";
                    break;
                case "publications":
                    this.pageTitle = "პუბლიკაციების";
                    break;
                case "wokshops":
                    this.pageTitle = "ვორკშოპების";
                    break;
            }
        },

        deletePost(id, index) {
            return this.$axios
                .delete(`${this.deleteApiURL}${this.selectedCategory}/${id}`)
                .then((data) => {
                    console.log(data);
                    this.allDataList.splice(index, 1);
                });
        }
    }
};
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
