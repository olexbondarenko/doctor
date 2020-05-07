<template>
  <div class="main">
    <div class="main__banner">
      <div class="main__banner-content">
        <h2 class="main__banner-subtitle">Добро пожаловать в игру</h2>
        <h1 class="main__banner-title">
          Помоги
          <span class="main__banner-title_uppercase">Фармацевту</span>
        </h1>
        <button
          type="button"
          @click="startGame"
          class="main__banner-btn btn btn_start"
        >
          Начать
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  name: "Main",
  methods: {
    ...mapMutations(["startGame"])
  }
};
</script>

<style lang="scss">
@import "@/assets/scss/_variables";

.main {
  position: relative;
  height: 100vh;
  padding-bottom: 194px;
  background-image: url("../assets/img/main-bg.jpg");
  background-size: cover;
  &:after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: $main-gradient;
    opacity: 0.35;
  }
  &__banner {
    position: relative;
    width: 860px;
    height: 860px;
    border-radius: 50%;
    left: 110px;
    top: -30px;
    background: $main-gradient;
    padding-top: 280px;
    color: #fff;
    z-index: 1;
    &-content {
      width: 550px;
      margin: auto;
      padding-left: 31px;
    }
    &-subtitle {
      margin-bottom: 27px;
      font-size: 35px;
      line-height: 41px;
      text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
      font-weight: 300;
      letter-spacing: 0.02em;
    }
    &-title {
      margin-bottom: 118px;
      margin-left: -5px;
      font-size: 60px;
      font-weight: 700;
      line-height: 70px;
      letter-spacing: 0.02em;
      &_uppercase {
        font-size: 70px;
        text-transform: uppercase;
      }
    }
    &-btn {
      margin-left: 55px;
    }
  }
}
</style>
