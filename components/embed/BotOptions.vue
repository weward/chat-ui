<template>
  <div v-if="!$store.state.embed.toggleLiveChat" class="bot-options">
    <button class="option-btn">What are the pricing plans?</button>
    <button class="option-btn">What pricing plan suits a start-up company with less than 50 employees?</button>
    <button class="option-btn">Option 3</button>
    <button class="option-btn">Option 4</button>
    <button class="option-btn">Option 5</button>
    <button @click="toggleLiveChat" id="live-chat" class="option-btn">Live Chat</button>
  </div>
</template>

<script>
export default {
  methods: {
    toggleLiveChat() {
      this.$store.commit('embed/toggleLiveChat')
    }
  }
}
</script>

<style>

</style>