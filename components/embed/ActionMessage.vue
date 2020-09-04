<template>
  <div v-if="$store.state.embed.isLoggedIn" class="action-message">
    <textarea id="message" rows="3" style="width: 100%;" placeholder="Your message here..."></textarea>
  </div>
</template>

<script>
export default {}
</script>

<style></style>
