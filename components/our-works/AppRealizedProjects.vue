<template>
  <div class="row slider">
    <div class="works__cat__header col-12">
      <div class="works__cat__header__title">
        <h4 @click="routeToCategory">განხორციელებული პროექტები</h4>
      </div>
      <div class="works__cat__header__arrows">
        <div class="left" @click="prev">
          <img src="~/assets/img/left.svg" alt="left" />
        </div>
        <div class="right" @click="next">
          <img src="~/assets/img/right.svg" alt="right" />
        </div>
      </div>
    </div>
    <div
      v-for="(item, index) in sliderList"
      :key="(index)"
      class="slider__img col-md-3"
    >
      <div class="slider__img__container" @click="routeToDetails(item._id)">
        <img
          :src="'http://94.237.98.180:8081/' + item.file[0].path"
          alt="slider_img"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AppRealizedProjects",

  data() {
    return {
      realizedProjectsList: [],
      sliderList: [],
      sliderCounterIndex: 4,
    };
  },
  created: function () {
    this.getRealizedProjects();
  },
  methods: {
    getRealizedProjects() {
      return this.$axios
        .get("http://94.237.98.180:8081/api/realized-projects")

        .then((data) => {
          this.realizedProjectsList = data["data"]["data"];
          if (this.realizedProjectsList.length > 4) {
            this.sliderList = [
              this.realizedProjectsList[0],
              this.realizedProjectsList[1],
              this.realizedProjectsList[2],
              this.realizedProjectsList[3],
            ];
          } else {
            this.sliderList = [];
          }
          console.log(this.realizedProjectsList);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    routeToDetails(id) {
      return this.$router.push("/our-works/realized-projects/" + id);
    },
    routeToCategory() {
      return this.$router.push("/our-works/realized-projects/");
    },
    next() {
      if (this.realizedProjectsList.length > this.sliderCounterIndex) {
        this.sliderList.splice(0, 1);
        this.sliderList.push(
          this.realizedProjectsList[this.sliderCounterIndex]
        );
        this.sliderCounterIndex += 1;
        console.log(this.sliderCounterIndex);
      } else {
        console.log("not enought length");
      }
    },
    prev() {
      if (this.sliderCounterIndex > 4) {
        this.sliderCounterIndex -= 1;
        this.sliderList.unshift(
          this.realizedProjectsList[this.sliderCounterIndex - 4]
        );
        this.sliderList.splice(this.sliderList.length - 1, 1);

        console.log(this.sliderCounterIndex);
      } else {
        console.log("not enought length");
      }
    },
  },
};
</script>

<style lang="scss"></style>
