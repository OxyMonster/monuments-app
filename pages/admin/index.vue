<template>
  <div class="admin row justify-content-between mt-6">
    <div class="admin__add col-lg-6 mb-4">
      <div class="admin__add__container">
        <div class="admin__add__container__icon">
          <div class="admin__add__container__icon__container">
            <img src="~/assets/img/checked.svg" alt="" />
          </div>
        </div>
        <div class="admin__add__container__button">
          <b-button variant="success">
            <nuxt-link to="/admin/add"> დამატება</nuxt-link>
          </b-button>
        </div>
      </div>
    </div>
    <div class="admin__add col-lg-6">
      <div class="admin__add__container">
        <div class="admin__add__container__icon">
          <div class="admin__add__container__icon__container">
            <img src="~/assets/img/cancel.svg" alt="" />
          </div>
        </div>
        <div class="admin__add__container__button">
          <b-button variant="danger">
            <nuxt-link to="/admin/delete"> წაშლა</nuxt-link>
          </b-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  middleware: "auth",
};
</script>

<style lang="scss">
.admin {
  min-height: 100vh;
  &__add {
    &__container {
      border-bottom: 1px solid #ffffff;
      background: #ffffff;
      box-shadow: 0 3px 4px #c4c4c4;
      padding: 50px;
      border-radius: 8px;
      height: 250px;

      &__icon {
        display: flex;
        justify-content: center;
        &__container {
          width: 100px;
          height: 100px;

          img {
            width: 100%;
            height: 100%;
          }
        }
      }
      &__button {
        margin-top: 30px;
        a {
          color: white !important;
          font-size: 15px;
          text-decoration: none;

          &:hover {
            color: white;
          }

          &:hover {
            color: #1d1d1d;
            transition: 0.3s;
          }
        }
      }
    }
  }
}
</style>
