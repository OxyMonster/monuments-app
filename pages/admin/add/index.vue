/* eslint-disable prettier/prettier */
<template>
    <div class="add row">
        <div class="add__box col-lg-6 mt-4">
            <div class="add__box__container">
                <div class="add__box__container__title">
                    <h4>საპილოტო პროექტების დამატება</h4>
                </div>
                <b-button id="show-btn" @click="showModal('pilot-programs')"
                    >დამატება</b-button
                >
            </div>
        </div>
        <div class="add__box col-lg-6 mt-4">
            <div class="add__box__container">
                <div class="add__box__container__title">
                    <h4>პროექტების დამატება</h4>
                </div>
                <b-button id="show-btn" @click="showModal('projects')"
                    >დამატება</b-button
                >
            </div>
        </div>
        <div class="add__box col-lg-6 mt-4">
            <div class="add__box__container">
                <div class="add__box__container__title">
                    <h4>პუბლიკაციების დამატება</h4>
                </div>
                <b-button id="show-btn" @click="showModal('publications')"
                    >დამატება</b-button
                >
            </div>
        </div>
        <div class="add__box col-lg-6 mt-4">
            <div class="add__box__container">
                <div class="add__box__container__title">
                    <h4>განხორციელებული პროექტების დამატება</h4>
                </div>
                <b-button id="show-btn" @click="showModal('realized-projects')"
                    >დამატება</b-button
                >
            </div>
        </div>
        <div class="add__box col-lg-6 mt-4">
            <div class="add__box__container">
                <div class="add__box__container__title">
                    <h4>ვორქშოეპების დამატება</h4>
                </div>
                <b-button id="show-btn" @click="showModal('workshops')"
                    >დამატება</b-button
                >
            </div>
        </div>
        <div>
            <div>
                <b-modal
                    id="modal-xl"
                    ref="my-modal"
                    size="xl"
                    hide-footer
                    :title="modalTitle"
                >
                    <div class="group p-4 d-flex justify-content-center row">
                        <div class="group__input col-lg-12 mt-4">
                            <div class>
                                <h4>სათაური</h4>
                            </div>
                            <b-form-input v-model="title"></b-form-input>
                        </div>
                        <div class="group__input col-lg-12 mt-4">
                            <div class>
                                <h4>აღწერა</h4>
                            </div>

                            <b-form-textarea
                                id="textarea-rows"
                                v-model="description"
                                placeholder="Tall textarea"
                                rows="8"
                            ></b-form-textarea>
                        </div>
                        <div class="group__input col-lg-12 mt-4">
                            <div class>
                                <h4>ფაილის დამატება</h4>
                            </div>
                            <input
                                ref="fileInput"
                                style="display: none;"
                                type="file"
                                name="file"
                                multiple
                                @change="onFileSelected"
                            />
                            <b-button
                                variant="outline-primary"
                                @click="$refs.fileInput.click()"
                                >სურათის არჩევა</b-button
                            >
                        </div>
                        <div class="col-12 my-4">
                            <p
                                v-for="(img, index) in selectedFiles"
                                :key="index"
                            >
                                {{ selectedFiles.length > 0 ? img.name : '' }}
                            </p>
                            <p v-if="fileError" style="color: #f03434;">
                                გთხოვთ ატვირთოთ შემდეგი ფორმატის სურათები: png,
                                jpg, jpeg, webp
                            </p>
                        </div>
                        <div
                            v-if="!isFormValid"
                            class="col-12 my-2 d-flex justify-content-center"
                        >
                            <p style="color: #f03434;">
                                გთხოვთ შეავსოთ ყველა ველი
                            </p>
                        </div>
                        <div
                            class="group__input col-lg-12 d-flex justify-content-center mt-4"
                        >
                            <b-button
                                v-if="!isLoading"
                                variant="success"
                                @click="onSubmit"
                                >დამატება</b-button
                            >
                            <AppSpinner v-if="isLoading"></AppSpinner>
                        </div>
                    </div>
                </b-modal>
            </div>
        </div>
    </div>
</template>

<script>
import { AppSpinner } from '../../../components/spinner/AppSpinner'
export default {
    components: { AppSpinner },
    data() {
        return {
            apiURL: 'http://94.237.98.180:8081',
            description: '',
            title: '',
            selectedFiles: [],
            modalType: '',
            modalTitle: '',
            isFormValid: true,
            isImgValid: false,
            fileError: false,
            isLoading: false,
        }
    },

    methods: {
        showModal(type) {
            this.modalType = type
            switch (this.modalType) {
                case 'pilot-programs':
                    this.modalTitle = 'საპილოტო პროექტების დამატება'
                    break
                case 'projects':
                    this.modalTitle = 'პროექტების დამატება'
                    break
                case 'realized-projects':
                    this.modalTitle = 'განხორციელებული პროექტების დამატება'
                    break
                case 'publications':
                    this.modalTitle = 'პუბლიკაციების დამატება'
                    break
                case 'wokshops':
                    this.modalTitle = 'ვორკშოპების დამატება'
                    break
            }
            this.$refs['my-modal'].show()
        },
        onFileSelected(event) {
            this.selectedFiles = event.target.files
            let isImgFormatValid = false

            for (const img of this.selectedFiles) {
                if (
                    img.type === 'image/jpeg' ||
                    img.type === 'image/png' ||
                    img.type === 'image/jpg' ||
                    img.type === 'image/webp'
                ) {
                    isImgFormatValid = true
                } else {
                    isImgFormatValid = false
                    this.selectedFiles = []
                    break
                }
            }
            if (isImgFormatValid) {
                this.isImgValid = true
                this.fileError = false
            } else {
                this.isImgValid = false
                this.fileError = true
            }
        },
        onSubmit() {
            this.isLoading = true
            // * * * Validate form * * *
            if (
                this.title.length > 0 &&
                this.description.length > 0 &&
                this.selectedFiles &&
                // this.selectedFiles.length > 0,
                this.isImgValid
            ) {
                this.isFormValid = true
            } else {
                this.isFormValid = false
                this.isLoading = false
            }
            // * * * Post Data * * * *
            if (this.isFormValid) {
                const fd = new FormData()

                for (const item of this.selectedFiles) {
                    console.log(item)
                }

                for (const file of this.selectedFiles) {
                    fd.append('file', file)
                }
                fd.append('title', this.title)
                fd.append('description', this.description)

                switch (this.modalType) {
                    case 'pilot-programs':
                        this.$axios
                            .post(`${this.apiURL}/api/post-pilot-programs`, fd)
                            .then(() => {
                                // * * Clear * *
                                this.title = ''
                                this.description = ''
                                this.selectedFiles = null
                                this.isLoading = false
                            })
                            .catch((err) => {
                                console.log(err)
                                // * * Clear * *
                                this.isLoading = false
                                this.title = ''
                                this.description = ''
                                this.selectedFiles = null
                                this.isLoading = false
                            })

                        break
                    case 'projects':
                        this.$axios
                            .post(`${this.apiURL}/api/post-projects`, fd)
                            .then(() => {
                                // * * Clear * *
                                this.title = ''
                                this.description = ''
                                this.selectedFiles = null
                                this.isLoading = false
                            })
                            .catch((err) => {
                                console.log(err)
                                // * * Clear * *
                                this.isLoading = false
                                this.title = ''
                                this.description = ''
                                this.selectedFiles = null
                                this.isLoading = false
                            })
                        break
                    case 'publications':
                        this.$axios
                            .post(`${this.apiURL}/api/post-publications`, fd)
                            .then(() => {
                                // * * Clear * *
                                this.title = ''
                                this.description = ''
                                this.selectedFiles = null
                                this.isLoading = false
                            })
                            .catch((err) => {
                                console.log(err)
                                // * * Clear * *
                                this.isLoading = false
                                this.title = ''
                                this.description = ''
                                this.selectedFiles = null
                                this.isLoading = false
                            })
                        break
                    case 'realized-projects':
                        this.$axios
                            .post(
                                `${this.apiURL}/api/post-realized-projects`,
                                fd
                            )
                            .then((data) => {
                                console.log(data)
                                // * * Clear * *
                                this.title = ''
                                this.description = ''
                                this.selectedFiles = null
                                this.isLoading = false
                            })
                            .catch((err) => {
                                console.log(err)
                                // * * Clear * *
                                this.isLoading = false
                                this.title = ''
                                this.description = ''
                                this.selectedFiles = null
                                this.isLoading = false
                            })
                        break
                    case 'workshops':
                        this.$axios
                            .post(`${this.apiURL}/api/post-work-shops`, fd)
                            .then((data) => {
                                console.log(data)
                                // * * Clear * *
                                this.title = ''
                                this.description = ''
                                this.selectedFiles = null
                                this.isLoading = false
                            })
                            .catch((err) => {
                                console.log(err)
                                // * * Clear * *
                                this.isLoading = false
                                this.title = ''
                                this.description = ''
                                this.selectedFiles = null
                                this.isLoading = false
                            })
                }
            }
        },
    },
}
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
                padding-bottom: 25px;
                height: 70px;
                h4 {
                    // white-space: nowrap;
                    font-size: 20px;
                }
            }
        }
    }
}

.group {
    h4 {
        padding-bottom: 15px;
        font-size: 20px;
    }
    input {
        width: 100%;
    }
}
</style>
