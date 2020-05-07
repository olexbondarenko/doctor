<template>
  <div id="app" class="app">
    <transition name="fade">
      <Main v-if="!getGameStarted" />
    </transition>
    <transition name="fade">
      <Game v-if="getGameStarted && !getGameOver" />
    </transition>
    <transition name="fade">
      <Result v-if="getGameOver" />
    </transition>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import Main from "@/components/Main";
import Game from "@/components/Game";
import Result from "@/components/Result";

export default {
  name: "App",
  components: {
    Main,
    Game,
    Result
  },
  computed: {
    ...mapGetters(["getGameStarted", "getGameOver"])
  }
};
</script>

<style lang="scss">
@import "@/assets/scss/_variables";
@import "@/assets/scss/_fonts";
*,
*::before,
*::after {
  box-sizing: border-box;
}

html,
body {
  position: relative;
  font-family: "Avenir Next Cyr", sans-serif;
  height: 100%;
  min-height: 100%;
}
strong {
  font-weight: 700;
}
.app {
  max-width: 1440px;
  margin: auto;
  height: 100%;
}
.fade {
  &-enter-active {
    transition: all 0.5s ease-in;
  }
  &-leave-active {
    transition: all 0.8s ease-in-out;
  }
  &-enter,
  &-leave-to {
    opacity: 0;
  }
}

.btn {
  display: block;
  width: 100%;
  height: 90px;
  border: none;
  border-radius: 100px;
  line-height: 90px;
  text-align: center;
  cursor: pointer;
  transition: opacity 0.5s;
  &:hover {
    opacity: 0.7;
  }
  &:focus {
    outline: none;
  }
  &_start {
    max-width: 381.32px;
    font-size: 36px;
    font-weight: bold;
    background: #fff;
    color: $not-so-dark;
  }
  &_sale {
    max-width: 280px;
    font-size: 28px;
    font-weight: 700;
    color: #fff;
  }
  &_retry {
    max-width: 270px;
    background: $gradient-gray;
    font-size: 24px;
    height: 60px;
    line-height: 60px;
    font-weight: 700;
    color: #fff;
  }
  &_purple {
    background: $cheap-gradient;
  }
  &_blue {
    background: $brand-gradient;
  }
  &_yellow {
    background: $yellow-gradient;
  }
}
@media screen and (max-width: 1325px) {
  .result {
    background-size: 40%;
  }
}
@media screen and (max-width: 1200px), screen and (max-height: 850px) {
  .main {
    &__banner {
      width: 550px;
      height: 550px;
      left: 30px;
      padding-top: 150px;
      &-content {
        width: 420px;
      }
      &-subtitle {
        font-size: 20px;
        line-height: initial;
      }
      &-title {
        margin-bottom: 30px;
        font-size: 40px;
        line-height: 50px;
        &_uppercase {
          font-size: 50px;
        }
      }
      &-btn {
        margin: auto;
      }
    }
  }
  .btn {
    max-width: 200px;
    font-size: 18px;
    height: 70px;
    line-height: 70px;
    &_start {
      max-width: 250px;
      font-size: 25px;
    }
  }
  .game {
    &-sidebar {
      flex-basis: 320px;
      &__nav {
        padding: 30px 50px 48px;
        &-item {
          width: 50px;
          height: 50px;
          margin-right: 20px;
          background-size: 24px;
        }
      }
      &__sales {
        padding: 0 15px 190px 15px;
        &-title {
          font-size: 25px;
        }
        &-item {
          flex-basis: 130px;
          height: 50px;
          margin-bottom: 20px;
          padding-left: 50px;
          background-size: 30px;
          font-size: 35px;
          line-height: 50px;
        }
      }
      &__turn {
        &-title {
          font-size: 25px;
          line-height: 24px;
        }
        &-count {
          font-size: 27px;
          line-height: 34px;
        }
      }
    }
    &-main {
      &__users {
        padding-top: 50px;
        padding-bottom: 50px;
      }
    }
  }
  .user {
    max-width: 400px;
    border-radius: 20px;
    &__detail {
      min-height: 180px;
      padding: 22px 30px 22px;
    }
    &__title {
      font-size: 25px;
      line-height: 29px;
    }
    &__description {
      font-size: 16px;
      line-height: 23px;
    }
    &__drug {
      &-stamp {
        width: 300px;
        height: 90px;
        font-size: 35px;
        border: 4px solid transparent;
        line-height: 85px;
      }
    }
  }
  .result {
    &__nav {
      padding-bottom: 75px;
    }
    &__description {
      margin-bottom: 100px;
    }
  }
}
@media screen and (max-width: 768px) {
  .game {
    display: block;
    height: auto;
    &-sidebar {
      display: flex;
      flex-wrap: wrap;
      flex-basis: 100%;
      &__nav {
        padding: 20px 25px 20px;
        flex-basis: 30%;
      }
      &__sales {
        padding: 20px 15px 30px 15px;
        flex-basis: 70%;
      }
      &__turn {
        position: relative;
      }
    }
    &-actions {
      position: relative;
      bottom: 0;
      padding-top: 50px;
    }
  }
}
</style>
