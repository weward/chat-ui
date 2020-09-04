<template>
  <div class="chat-head">
    <div id="close-chat" @click="closeChat">close</div>
    <div class="head-title">
      Powered By
      <span
        ><a href="https://larachat.com" target="_blank" class="title-highlight"
          >larachat.com</a
        ></span
      >
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    closeChat() {
      this.$store.commit('embed/toggleChat')
    }
  }
}
</script>

<style></style>
