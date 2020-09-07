<template>
  <div v-if="!$store.state.embed.isLoggedIn" id="login-email">
    <input
      id="input-email"
      type="email"
      name="email"
      placeholder="Input your email here..."
      :class="[{ 'input-errors': withErrors || withErrorsComputed }]"
      v-model="email"
      @keyup.enter="loginClient"
      @input="$v.email.$touch()"
      @blur="$v.email.$touch()"
    />
    <button @click="loginClient" id="login">Chat!</button>
  </div>
</template>

<script>
import { validationMixin } from 'vuelidate'
import { required, email } from 'vuelidate/lib/validators'

export default {
  mixins: [validationMixin],
  data: () => ({
    withErrors: false,
    email: '',
  }),
  validations: {
    email: {
      required,
      email,
    },
  },
  computed: {
    withErrorsComputed() {
      if (!this.$v.email.$dirty) return false
      if (!this.$v.email.email) return true
      if (!this.$v.email.required) return true
      return false
    },
  },
  methods: {
    loginClient() {
      this.$v.$touch()
      if (!this.$v.$error) {
        this.withErrors = false
        this.$store
          .dispatch('embed/login', {
            hash: this.$route.params.hash,
            email: this.email,
          })
          .catch((err) => {
            // failed to login
            this.$store.commit('embed/notifSnackbar', {
              text: err,
            })
          })
          .finally(() => {})
      } else {
        this.withErrors = true
      }
    },
  },
  mounted() {
    this.$store.commit('embed/setStatus')
  }
}
</script>

<style scoped>
.input-errors {
  border: 1px solid #da0000 !important;
}
</style>
