<template>
  <div class="main"></div>
  <div class="main__header">
    <h1>Дашборд</h1>
    <div class="main__btns">
      <my-button @click="$router.push('/add-card')">Добавить карточку</my-button>
      <my-switch
        label="Перетаскивать карточки"
        :isDraggable="isDraggable"
        @update:isDraggable="updateIsDraggable"
      ></my-switch>
    </div>
  </div>

  <div class="main__list" id="list">
    <draggable
      class="cards-list"
      v-model="draggableCards"
      group="cards"
      :disabled="!isDraggable"
      item-key="cards._id">
      <template #item="{element}">
        <card
          :card="element"
        />
      </template>
    </draggable>
  </div>
</template>

<script>
import {mapState, mapGetters, mapMutations, mapActions} from 'vuex';
import Card from '@/components/Card';
import draggable from 'vuedraggable';

export default {
  components: {
    Card,
    draggable,
  },
  methods: {
    ...mapMutations({
      setCards: 'setCards',
      initializeStore: 'initializeStore',
      setDraggableEnable: 'setDraggableEnable',
    }),
    ...mapActions ({
      toggleDraggable: 'toggleDraggable',
    }),

    updateIsDraggable(value) {
      this.toggleDraggable(value);
    },
  },
  mounted() {
    this.$store.commit('initializeStore');
  },
  computed: {
    ...mapState ({
      cards: state => state.cards,
      isDraggable: state => state.isDraggable,
    }),

    draggableCards: {
      get() {
        return this.cards
      },
      set(value) {
        this.setCards(value)
      }
    }
  },
}
</script>

<style>
h1 {
  margin-bottom: 24px;
}
.main__header {
  margin-bottom: 24px;
}
.main__btns {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 16px;
}

.cards-list {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-flow: row dense;
  gap: 20px;
}
@media (max-width: 920px) {
  .cards-list {
    grid-template-columns: repeat(2, 1fr);
  }
}
@media (max-width: 560px) {
  .cards-list {
    grid-template-columns: 1fr;
  }
}
.cards-list-enter-active,
.cards-list-leave-active {
  transition: all .3s ease;
}
.cards-list-enter-from,
.cards-list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}
.cards-list-move {
  transition: transform 0.3s ease;
}
</style>