<template>
  <div class="card">
    <div class="card__text">
      <h2 class="card__title">{{ card.title }}</h2>
      <p class="card__descrittion">{{ card.description }}</p>
    </div>
    <div class="card__buttons">
      <my-button
        @click="$router.push(`/cards/${card._id}`)"
        >Открыть</my-button>
      <my-button
        @click="removeCard(card._id)"
        >Удалить</my-button>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex';

export default {
  props: {
    card: {
      type: Object,
      required: true,
    }
  },
  methods: {
    ...mapMutations(['removeCard']),
  }
}
</script>

<style scoped>
.card {
  background: #23242E;
  border-radius: 16px;
  height: 220px;
  transition: .1s;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 24px;
  transition: .5s;
}
.card:hover, .card:active {
  background: #282A36;
}
.card.sortable-ghost {
  opacity: 0;
}
.card__text {}
.card__title {
  margin-bottom: 16px;
}
.card__descrittion {
	-webkit-line-clamp: 4;
	-webkit-box-orient: vertical;
	display: -webkit-box;
	overflow: hidden;
}
.card__buttons {
  display: flex;
  gap: 12px;
  align-items: center;
  justify-content: space-between;
}
</style>