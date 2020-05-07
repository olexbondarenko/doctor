import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    gameStarted: false,
    gameOver: false,
    sales: {
      drugOne: 0,
      drugTwo: 0,
      drugThree: 0
    },
    drugs: {
      left: {
        name: "Препарат 1",
        animation: "left",
        color: "purple"
      },
      top: {
        name: "Препарат 2",
        animation: "top",
        color: "blue"
      },
      right: {
        name: "Препарат 3",
        animation: "right",
        color: "yellow"
      }
    },
    users: [
      {
        image: "mariya.jpg",
        name: "Марія",
        years: "19 років",
        drug: {
          animation: "",
          name: ""
        },
        description:
          "Бабуся приймає брендовий препарат від болю в суглобах, він допомагає, але занадто дорогий. У Вас є якісний аналог з нижчою ціною? Якщо ні — давайте бренд."
      },
      {
        image: "stepan.jpg",
        name: "Степан",
        years: "61 рік",
        drug: {
          animation: "",
          name: ""
        },
        description:
          "Спросоння відсунув гарячий чайник рукою та обпікся. У Вас всі ліки від опіків такі дорогі? Можна хороший препарат недорого?"
      },
      {
        image: "lyubov.jpg",
        name: "Любов",
        years: "58 років",
        drug: {
          animation: "",
          name: ""
        },
        description:
          "Лікар призначив препарат від артеріальної гіпертензії, а бренд дорого коштує. Тому мені потрібен аналог з хорошою ефективністю та приємною ціною."
      },
      {
        image: "oleksandr.jpg",
        name: "Олександр",
        years: "20 років",
        drug: {
          animation: "",
          name: ""
        },
        description:
          "Порекомендуйте ефективний препарат від болю в горлі за розумну ціну."
      },
      {
        image: "irina.jpg",
        name: "Ірина",
        years: "55 років",
        drug: {
          animation: "",
          name: ""
        },
        description:
          "У мене часто невралгії, лікар призначив вітаміни групи В. Мені потрібен якісний аналог за прийнятною ціною."
      },
      {
        image: "valentina.jpg",
        name: "Валентина",
        years: "75 років",
        drug: {
          animation: "",
          name: ""
        },
        description:
          "Дитя, дай бабусі ліки від тиску за цим рецептом, але не дорогих, тих, що дешевші!"
      }
    ]
  },
  getters: {
    getGameStarted(state) {
      return state.gameStarted;
    },
    getGameOver(state) {
      return state.gameOver;
    },
    getSales(state) {
      return state.sales;
    },
    getUsers(state) {
      return state.users;
    },
    getDrugs(state) {
      return state.drugs;
    }
  },
  mutations: {
    startGame(state) {
      state.gameStarted = true;
    },
    overGame(state) {
      state.gameOver = true;
    },
    saleDrug(state, { drugAnimation, drugName, userIndex }) {
      state.users[userIndex].drug.animation = drugAnimation;
      state.users[userIndex].drug.name = drugName;
      if (drugAnimation === "left") {
        state.sales.drugOne++;
      } else if (drugAnimation === "top") {
        state.sales.drugTwo++;
      } else if (drugAnimation === "right") {
        state.sales.drugThree++;
      }
    },

    retryGame(state, home) {
      state.gameStarted = true;
      state.gameOver = false;
      if (home === "home") {
        state.gameStarted = false;
      }
      state.users.forEach(user => {
        user.drug.animation = "";
        user.drug.name = "";
        state.sales.drugOne = 0;
        state.sales.drugTwo = 0;
        state.sales.drugThree = 0;
      });
    }
  },
  actions: {},
  modules: {}
});
