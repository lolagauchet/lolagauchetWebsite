<template>
  <div>
    <div v-if="isSubmitted === false">
      <form @submit.prevent="submitForm">
        <input
          type="checkbox"
          name="_honeypot"
          style="display: none"
          tabindex="-1"
          autocomplete="off"
        />
        <input type="hidden" name="_redirect" value="https://google.com" />
        <label>
          <span>Nom *</span>
          <input type="text" v-model="lastname" name="lastname" required />
        </label>
        <label>
          <span>Prénom *</span>
          <input type="text" v-model="name" name="name" required />
        </label>
        <label>
          <span>Adresse mail *</span>
          <input type="email" name="email" v-model="email" required />
        </label>
        <label>
          <span>Téléphone</span>
          <input type="text" name="phone" v-model="phone" />
        </label>
        <label class="full">
          <span>Message *</span>
          <textarea name="message" v-model="message" required></textarea>
        </label>
        <button type="submit">Envoyer</button>
      </form>
    </div>
    <div v-else>
      <p>Merci pour votre message. Je vous recontacte au plus vite.</p>
    </div>
  </div>
</template>

<script>
const FORMSPARK_ACTION_URL = 'https://submit-form.com/r7rXiGvi'

export default {
  data() {
    return {
      isSubmitted: false,
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
        this.isSubmitted = true
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
label {
  display: flex;
  flex-direction: column;
  width: 49%;
  position: relative;
  margin-bottom: 20px;
  &.full {
    width: 100%;
  }
  span {
    position: absolute;
    top: 0;
    left: 20px;
    transform: translateY(-50%);
    background-color: $white;
    padding: 0 10px;
    font-size: 12px;
    margin-bottom: 10px;
  }
  @media screen and (max-width: $mobile) {
    width: 100%;
  }
}
input,
textarea {
  border: 1px solid $black;
  padding: 15px 30px;
  font-size: 14px;
  &::placeholder {
    color: rgba($black, 0.6);
    font-size: 14px;
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
