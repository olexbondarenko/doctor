<template>
  <div class="result">
    <div class="result__nav">
      <div
        class="result__nav-item result__nav-item_home"
        @click="retryGame('home')"
      ></div>
    </div>
    <div class="result__content">
      <div class="result__data">
        <div class="result__data-item">
          <div class="result__data-percent">
            {{ getPercentage(getSales.drugOne) }}%
          </div>
          <div class="result__data-drug">Препарат 1</div>
        </div>
        <div class="result__data-item">
          <div class="result__data-percent">
            {{ getPercentage(getSales.drugTwo) }}%
          </div>
          <div class="result__data-drug">Препарат 2</div>
        </div>
        <div class="result__data-item">
          <div class="result__data-percent">
            {{ getPercentage(getSales.drugThree) }}%
          </div>
          <div class="result__data-drug">Препарат 3</div>
        </div>
      </div>
      <div class="result__title">
        Ваш результат:
        <div class="result__title_big">«Что я здесь делаю?»</div>
      </div>
      <div class="result__description">
        Это тестовое задание, так что не будем <br />
        углубляться в глубины проблем фармацевтов.
      </div>
      <button type="button" @click="retryGame()" class="btn btn_retry">
        Попробовать еще
      </button>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "Result",
  computed: {
    ...mapGetters(["getSales"])
  },
  methods: {
    roundPlus(number, n) {
      if (isNaN(number) || isNaN(n)) {
        return false;
      }
      var m = Math.pow(10, n);
      return Math.round(number * m) / m;
    },
    retryGame(home) {
      this.$store.commit("retryGame", home);
      this.userIndex = 0;
    },
    getPercentage(drugs) {
      let allSales =
        this.getSales.drugOne + this.getSales.drugTwo + this.getSales.drugThree;
      if (allSales !== 0) {
        return this.roundPlus((drugs / allSales) * 100, 2);
      } else {
        return 0;
      }
    }
  }
};
</script>

<style lang="scss">
@import "@/assets/scss/_variables";
.result {
  height: 100%;
  background-image: url("~@/assets/img/results-bg.jpg");
  background-repeat: no-repeat;
  background-position: top right;
  &__nav {
    padding-left: 50px;
    padding-top: 70px;
    padding-bottom: 126px;
    &-item {
      position: relative;
      width: 70px;
      height: 70px;
      background: $main-gradient;
      border-radius: 50%;
      margin-right: 38px;
      cursor: pointer;
      &:last-of-type {
        margin-right: 0;
      }
      &:after {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-repeat: no-repeat;
        background-position: center;
      }
      &_home {
        &:after {
          background-image: url("~@/assets/img/home-icon-white.png");
        }
      }
    }
  }
  &__content {
    max-width: 670px;
    padding-left: 72px;
  }
  &__data {
    display: flex;
    flex-wrap: wrap;
    padding-bottom: 59px;
    margin-bottom: 41px;
    border-bottom: 2px solid #d9d9d9;
    &-item {
      flex-basis: 33.333333%;
      text-align: center;
    }
    &-percent {
      margin-bottom: 16px;
      font-size: 48px;
      font-weight: 300;
      line-height: 59px;
    }
    &-drug {
      font-size: 16px;
      font-weight: 700;
      line-height: 20px;
    }
  }
  &__title {
    margin-bottom: 22px;
    font-size: 32px;
    font-weight: 700;
    line-height: 38px;
    letter-spacing: -0.02em;
    color: $not-so-dark;
    &_big {
      font-size: 43px;
    }
  }
  &__description {
    margin-bottom: 262px;
    font-size: 24px;
    line-height: 29px;
  }
}
</style>
