<template>
  <div class="add-card">
    <h1>Добавить карточку</h1>
    <form class="add-card__form" @submit.prevent="handleSubmit">
      <div class="add-card__form-inputs">
        <div class="add-card__form-input-container">
          <my-input
            v-focus
            type="text"
            v-model="title"
            id="title"
            required
            placeholder="Заголовок*"
            @blur="validatetitle"
          />
          <span class="add-card__form-error" v-if="titleError">{{ titleError }}</span>
        </div>
        <div class="add-card__form-input-container">
          <my-textarea
            v-model="description"
            id="description"
            required
            placeholder="Описание*"
            @blur="validatedescription"
          ></my-textarea>
          <span class="add-card__form-error" v-if="descriptionError">{{ descriptionError }}</span>
        </div>
      </div>

      <div class="add-card__form-buttons">
        <my-button type="submit" :disabled="isSubmitDisabled">Добавить</my-button>
        <my-button @click="goBackToMain">Отмена</my-button>
      </div>
    </form>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  data() {
    return {
      title: '',
      description: '',
      titleError: '',
      descriptionError: '',
    };
  },
  computed: {
    istitleValid() {
      return this.title.length >= 2 && this.title.length <= 16;
    },
    isdescriptionValid() {
      return this.description.length >= 2 && this.description.length <= 256;
    },
    isSubmitDisabled() {
      return !this.istitleValid || !this.isdescriptionValid;
    },
  },
  methods: {
    ...mapActions(['addCard']),
    goBackToMain() {
      this.$router.push('/');
    },
    handleSubmit() {
      if (!this.isSubmitDisabled) {
        const data = {
          title: this.title,
          description: this.description,
        };
        this.addCard(data);
        this.title = '';
        this.description = '';
        this.titleError = '';
        this.descriptionError = '';
        this.goBackToMain();
      }
    },
    validatetitle() {
      if (this.title.length < 2 || this.title.length > 16) {
        this.titleError = 'Обязательное поле. Текст заголовка может иметь от 2 до 16 символов';
      } else {
        this.titleError = '';
      }
    },
    validatedescription() {
      if (this.description.length < 2 || this.description.length > 256) {
        this.descriptionError = 'Обязательное поле. Текст описания может иметь от 2 до 256 символов';
      } else {
        this.descriptionError = '';
      }
    },
  },
};
</script>

<style scoped>
.add-card {}
.add-card__form {
  display: flex;
  flex-direction: column;
  gap: 24px;
}
.add-card__form-inputs {
  display: flex;
  flex-direction: column;
  gap: 20px;
}
.add-card__form-input-container {
  display: flex;
  flex-direction: column;
  gap: 16px;
}
.add-card__form-error {
  font-size: 12px;
  color: #921b3d;
  margin-top: -8px;
}
.add-card__form-buttons {
  display: flex;
  gap: 16px;
}
</style>
