import { createStore } from "vuex";

export default createStore ({
  state: () => ({
    cards: [
      {
        _id: 1,
        title: 'Chick Corea',
        description: 'Children\'s Song No. 6',
      },
      {
        _id: 2,
        title: 'Pat Metheny',
        description: 'Antonia',
      },
    ],
    isDraggable: true,
  }),
  getters: {
    cards (state) {
      return state.posts;
    }
  },
  mutations: {
    setCards(state, cards) {
      state.cards = cards;
    },
    initializeStore(state) {
      try {
        const storedState = JSON.parse(localStorage.getItem('dashboard-state'));
        if (storedState) {
          Object.keys(storedState).forEach(key => {
            state[key] = storedState[key];
          });
        } else {
          localStorage.setItem('dashboard-state', JSON.stringify(state));
        }
      } catch (e) {
        localStorage.setItem('dashboard-state', JSON.stringify(state));
      }
    },
    setDraggable(state, value) {
      state.isDraggable = value;
    },
    addCard(state, data) {
      state.cards.push(data);
    },
    removeCard(state, cardId) {
      state.cards = state.cards.filter(card => card._id !== cardId);
    },
  },
  actions: {
    addCard ({state, commit}, data) {
      const maxId = state.cards.reduce((max, obj) => (obj._id > max ? obj._id : max), 0);
      const newEntry = {
        _id: maxId + 1,
        ...data
      };
      commit('addCard', newEntry);
    },
    toggleDraggable({ commit }, value) {
      commit('setDraggable', value);
    },
  },
  modules: {},
  plugins: [
    store => {
      store.subscribe((mutation, state) => {
        localStorage.setItem('dashboard-state', JSON.stringify(state));
      });
    }
  ]
})