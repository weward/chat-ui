<template>
  <div v-if="!$store.state.embed.toggleChat" @click="toggleChat" id="button">
    O
  </div>
</template>

<script>
export default {
  methods: {
    toggleChat() {
      console.log('toggle click')
      this.$store.commit('embed/toggleChat')
    }
  }
}
</script>

<style>

</style>