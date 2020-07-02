<template>
    <div class="w-100">
        <AppSpinner></AppSpinner>
        <b-progress
            v-if="loadingValue !== 100"
            :value="loadingValue"
            variant="dark"
            :striped="striped"
            class="mt-2"
        ></b-progress>
    </div>
</template>

<script>
import AppSpinner from "../spinner/AppSpinner.vue";
export default {
    name: "AppLoading",
    components: { AppSpinner },
    data() {
        return {
            striped: true,
            loadingValue: 30
        };
    },
    created: function () {
        this.onLoading();
    },

    methods: {
        onLoading() {
            this.loadingValue = 2;
            // Called the function in each second
            let interval = setInterval(() => {
                this.loadingValue++;

                if (this.loadingValue > 110) {
                    clearInterval(interval); // If exceeded 100, clear interval
                    console.log(this.loadingValue);
                    this.$router.push("/home");
                }
            }, 50);
        }
    }
};
</script>

<style></style>
