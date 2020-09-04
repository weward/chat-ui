<template>
  <div v-if="!$store.state.embed.isLoggedIn" id="login-email">
    <input
      id="input-email"
      type="email"
      name="email"
      placeholder="Input your email here..."
    />
    <button @click="loginClient" id="login">Chat!</button>
  </div>
</template>

<script>
export default {
  methods: {
    loginClient() {
      this.$store.dispatch('embed/login')
    }
  }
}
</script>

<style></style>
