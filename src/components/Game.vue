<template>
  <div class="game">
    <div class="game-sidebar">
      <div class="game-sidebar__nav">
        <div
          @click="retryGame('home')"
          class="game-sidebar__nav-item game-sidebar__nav-item_home"
        ></div>
        <div
          @click="retryGame('retry')"
          class="game-sidebar__nav-item game-sidebar__nav-item_retry"
        ></div>
      </div>
      <div class="game-sidebar__sales">
        <div class="game-sidebar__sales-title">Параметри:</div>
        <div class="game-sidebar__sales-params">
          <div class="game-sidebar__sales-item game-sidebar__sales-item_sad">
            {{ getSales.drugOne }}
          </div>
          <div class="game-sidebar__sales-item game-sidebar__sales-item_happy">
            {{ getSales.drugTwo }}
          </div>
          <div class="game-sidebar__sales-item game-sidebar__sales-item_heart">
            {{ getSales.drugThree }}
          </div>
        </div>
      </div>
      <div class="game-sidebar__turn">
        <div class="game-sidebar__turn-title">
          Осталось в очереди:
        </div>
        <div class="game-sidebar__turn-count">
          <strong>{{ userIndex + 1 }}</strong
          >/{{ getUsers.length }}
        </div>
      </div>
    </div>
    <div class="game-main">
      <div class="game-main__users">
        <div class="game-main__users-list">
          <div
            class="user"
            :class="getUsers[userIndex].drug.animation"
            v-on:swiped-left="
              saleDrug(getDrugs.left.animation, getDrugs.left.name, userIndex)
            "
            v-on:swiped-up="
              saleDrug(getDrugs.top.animation, getDrugs.top.name, userIndex)
            "
            v-on:swiped-right="
              saleDrug(getDrugs.right.animation, getDrugs.right.name, userIndex)
            "
          >
            <div
              class="user__drug-stamp"
              :class="getUsers[userIndex].drug.animation"
            >
              {{ getUsers[userIndex].drug.name }}
            </div>
            <div class="user__image">
              <img
                :src="require(`@/assets/img/${getUsers[userIndex].image}`)"
                alt=""
              />
            </div>
            <div class="user__detail">
              <div class="user__title">
                {{ getUsers[userIndex].name }},
                {{ getUsers[userIndex].years }}
              </div>
              <div class="user__description">
                {{ getUsers[userIndex].description }}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="game-main__actions">
        <div class="game-actions">
          <button
            type="button"
            @click="
              saleDrug(getDrugs.left.animation, getDrugs.left.name, userIndex)
            "
            class="game-actions__btn btn btn_sale"
            :class="'btn_' + getDrugs.left.color"
          >
            {{ getDrugs.left.name }}
          </button>
          <button
            type="button"
            @click="
              saleDrug(getDrugs.top.animation, getDrugs.top.name, userIndex)
            "
            class="game-actions__btn btn btn_sale"
            :class="'btn_' + getDrugs.top.color"
          >
            {{ getDrugs.top.name }}
          </button>
          <button
            type="button"
            @click="
              saleDrug(getDrugs.right.animation, getDrugs.right.name, userIndex)
            "
            class="game-actions__btn btn btn_sale"
            :class="'btn_' + getDrugs.right.color"
          >
            {{ getDrugs.right.name }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
export default {
  name: "Game",
  data() {
    return {
      userIndex: 0
    };
  },
  computed: {
    ...mapGetters(["getUsers", "getSales", "getDrugs", "getGameOver"])
  },
  methods: {
    ...mapMutations(["overGame"]),
    saleDrug(drugAnimation, drugName, userIndex) {
      if (this.userIndex <= this.getUsers.length) {
        this.$store.commit("saleDrug", { drugAnimation, drugName, userIndex });
        if (this.userIndex < this.getUsers.length - 1) {
          setTimeout(() => {
            this.userIndex++;
          }, 1000);
        } else {
          setTimeout(() => {
            this.overGame();
          }, 1000);
        }
      }
    },
    retryGame(home) {
      this.$store.commit("retryGame", home);
      this.userIndex = 0;
    }
  }
};
</script>

<style lang="scss">
@import "@/assets/scss/_variables";
.game {
  display: flex;
  flex-wrap: wrap;
  height: 100%;
  &-sidebar {
    position: relative;
    flex-basis: 470px;
    height: 100%;
    background: $main-gradient;
    &__nav {
      padding: 15% 50px 288px;
      display: flex;
      flex-wrap: wrap;
      &-item {
        width: 70px;
        height: 70px;
        background: #fff;
        border-radius: 50%;
        margin-right: 38px;
        background-repeat: no-repeat;
        background-position: center;
        cursor: pointer;
        &:last-of-type {
          margin-right: 0;
        }
        &_home {
          background-image: url("~@/assets/img/home-icon.png");
        }
        &_retry {
          background-image: url("~@/assets/img/retry-icon.png");
        }
      }
    }
    &__sales {
      padding: 0 22px 190px 31px;
      &-title {
        padding-left: 10px;
        margin-bottom: 26px;
        font-size: 36px;
        line-height: 44px;
        font-weight: 700;
        color: #ffff;
      }
      &-params {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
      }
      &-item {
        flex-basis: 190px;
        height: 80px;
        padding-left: 72px;
        margin-bottom: 40px;
        background-color: #ffffff;
        background-repeat: no-repeat;
        background-position: 10px center;
        box-shadow: 0px 0px 50px rgba(131, 42, 64, 0.4);
        border-radius: 40px;
        font-size: 48px;
        font-weight: 700;
        line-height: 80px;
        text-align: center;
        color: $teva-dark-gray;
        &:last-child {
          margin-bottom: 0;
        }
        &_sad {
          background-image: url("~@/assets/img/sad-smile-icon.png");
        }
        &_happy {
          background-image: url("~@/assets/img/happy-smile-icon.png");
        }
        &_heart {
          background-image: url("~@/assets/img/heart-icon.png");
        }
      }
    }
    &__turn {
      position: absolute;
      width: 100%;
      bottom: 0;
      left: 0;
      background: rgba($color: #fff, $alpha: 0.15);
      padding: 18px 20px 23px;
      text-align: center;
      color: #fff;
      &-title {
        margin-bottom: 5px;
        font-size: 36px;
        line-height: 44px;
        font-weight: 300;
        letter-spacing: 0.02em;
      }
      &-count {
        font-size: 47px;
        line-height: 44px;
        font-weight: 300;
        letter-spacing: 0.02em;
      }
    }
  }
  &-main {
    position: relative;
    flex-grow: 1;
    padding: 0 23px 0 28px;
    overflow: hidden;
    &__users {
      height: 100%;
      padding-top: 130px;
      padding-bottom: 150px;
    }
    &__actions {
      position: relative;
    }
  }
  &-actions {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    position: absolute;
    width: 100%;
    bottom: 60px;
  }
}
@keyframes slideToLeft {
  0% {
    opacity: 1;
    transform: translateX(0) rotate(0deg);
  }
  100% {
    opacity: 0;
    transform: translateX(-100%) rotate(-15deg);
  }
}
@keyframes slideToTop {
  0% {
    opacity: 1;
    transform: translateY(0) rotate(0deg);
  }
  100% {
    opacity: 0;
    transform: translateY(-100%) rotate(-15deg);
  }
}
@keyframes slideToRight {
  0% {
    opacity: 1;
    transform: translateX(0) rotate(0deg);
  }
  100% {
    opacity: 0;
    transform: translateX(100%) rotate(15deg);
  }
}
.user {
  position: relative;
  width: 100%;
  max-width: 540px;
  margin: auto;
  background: #ffffff;
  box-shadow: 0px 0px 40px rgba(127, 127, 127, 0.4);
  border-radius: 40px;
  overflow: hidden;
  &.left {
    animation: slideToLeft 0.8s ease;
    animation-delay: 0.2s;
    animation-fill-mode: forwards;
  }
  &.top {
    animation: slideToTop 0.8s ease;
    animation-delay: 0.2s;
    animation-fill-mode: forwards;
  }
  &.right {
    animation: slideToRight 0.8s ease;
    animation-delay: 0.2s;
    animation-fill-mode: forwards;
  }

  &__image {
    position: relative;
    img {
      max-width: 100%;
    }
    &:after {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: $main-gradient;
      opacity: 0.2;
    }
  }
  &__detail {
    min-height: 237px;
    padding: 22px 60px 22px;
  }
  &__title {
    margin-bottom: 8px;
    font-size: 32px;
    line-height: 39px;
    font-weight: 700;
    color: $not-so-dark;
  }
  &__description {
    font-size: 24px;
    font-weight: 300;
    line-height: 28px;
  }
  &__drug-stamp {
    position: absolute;
    left: 50%;
    bottom: 150px;
    width: 360px;
    height: 119px;
    font-size: 52px;
    border: 8px solid transparent;
    text-align: center;
    line-height: 103px;
    font-weight: 700;
    z-index: 1;
    &.left {
      transform: translateX(-50%) rotate(-30deg);
      border-color: #8049c7;
      color: #8049c7;
    }
    &.top {
      transform: translateX(-50%) rotate(-30deg);
      border-color: #169ae4;
      color: #169ae4;
    }
    &.right {
      transform: translateX(-50%) rotate(30deg);
      border-color: #ffca01;
      color: #ffca01;
    }
  }
}
</style>
