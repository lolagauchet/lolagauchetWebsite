<template>
  <form @submit.prevent="submitForm">
    <input type="text" v-model="lastname" name="lastname" placeholder="Nom" />

    <input type="text" v-model="name" name="name" placeholder="Prénom" />

    <input
      type="email"
      name="email"
      v-model="email"
      placeholder="Adresse mail"
    />
    <input type="text" name="phone" v-model="phone" placeholder="Téléphone" />
    <textarea name="message" v-model="message" placeholder="Message"></textarea>
    <button type="submit">Envoyer</button>
  </form>
</template>

<script>
const FORMSPARK_ACTION_URL = 'https://submit-form.com/r7rXiGvi'

export default {
  data() {
    return {
      lastname: '',
      name: '',
      email: '',
      phone: '',
      message: '',
    }
  },
  methods: {
    async submitForm() {
      await fetch(FORMSPARK_ACTION_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          message: this.message,
          lastname: this.lastname,
          name: this.name,
          phone: this.phone,
          email: this.email,
        }),
      }).then(() => {
        alert('Email envoyé')
      })
    },
  },
}
</script>

<style lang="scss" scoped>
form {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
input,
textarea {
  border: 1px solid $black;
  padding: 10px 22px;
  font-size: 14px;
  margin-bottom: 10px;
  &::placeholder {
    color: rgba($black, 0.6);
    font-size: 14px;
  }
}
input {
  width: 49%;
  @media screen and (max-width: $mobile) {
    width: 100%;
  }
}
textarea {
  width: 100%;
  max-width: 100%;
}
button {
  border: none;
  background-color: $black;
  border: 1px solid $black;
  color: $white;
  cursor: pointer;
  font-size: 16px;
  padding: 10px 16px;
  width: 100%;
  transition: $transition;
  &:hover {
    background-color: $white;
    color: $black;
  }
}
</style>
