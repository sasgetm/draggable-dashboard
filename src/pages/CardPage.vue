<template>
  <div>
    <h1>{{ cardTitle }}</h1>
    <p>{{ cardDescription }}</p>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  computed: {
    ...mapState({
      cards: state => state.cards,
    }),
    cardId() {
      return this.$route.params.id;
    },
    getElement() {
      return this.cards.find(obj => obj._id == this.cardId);
    },
    cardTitle() {
      const element = this.getElement;
      return element ? element.title : 'Card not found';
    },
    cardDescription() {
      const element = this.getElement;
      return element ? element.description : 'Card not found';
    },
  },
}
</script>

<style scoped>
</style>