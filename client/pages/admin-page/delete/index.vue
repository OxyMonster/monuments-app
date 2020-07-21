<template>
    <div class="add row">
        <div class="add__box col-lg-4 mt-4">
            <div class="add__box__container">
                <div class="add__box__container__title pb-4">
                    <h4>საპილოტო პროექტების წაშლა</h4>
                </div>
                <b-button>
                    <nuxt-link to="/admin-page/delete/pilot-programs"
                        >არჩევა</nuxt-link
                    >
                </b-button>
            </div>
        </div>
        <div class="add__box col-lg-4 mt-4">
            <div class="add__box__container">
                <div class="add__box__container__title pb-4">
                    <h4>პროექტების წაშლა</h4>
                </div>
                <b-button>
                    <nuxt-link to="/admin-page/delete/projects"
                        >არჩევა</nuxt-link
                    >
                </b-button>
            </div>
        </div>
        <div class="add__box col-lg-4 mt-4">
            <div class="add__box__container">
                <div class="add__box__container__title pb-4">
                    <h4>პუბლიკაციების წაშლა</h4>
                </div>
                <b-button>
                    <nuxt-link to="/admin-page/delete/publications"
                        >არჩევა</nuxt-link
                    >
                </b-button>
            </div>
        </div>
        <div class="add__box col-lg-4 mt-4">
            <div class="add__box__container">
                <div class="add__box__container__title pb-4">
                    <h4>დამთავრებული პროექტების წაშლა</h4>
                </div>
                <b-button>
                    <nuxt-link to="/admin-page/delete/realized-projects"
                        >არჩევა</nuxt-link
                    >
                </b-button>
            </div>
        </div>
        <div class="add__box col-lg-4 mt-4">
            <div class="add__box__container">
                <div class="add__box__container__title pb-4">
                    <h4>ვორქშოპების წაშლა</h4>
                </div>
                <b-button>
                    <nuxt-link to="/admin-page/delete/workshops"
                        >არჩევა</nuxt-link
                    >
                </b-button>
            </div>
        </div>
    </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.add {
    &__box {
        &__container {
            border-bottom: 1px solid #ffffff;
            background: #ffffff;
            box-shadow: 0 3px 4px #c4c4c4;
            padding: 50px;
            border-radius: 8px;

            &__title {
                height: 95px;
            }

            button {
                a {
                    color: white;
                    text-decoration: none;
                }
            }
        }
    }
}
</style>
