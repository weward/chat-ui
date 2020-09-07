<template>
  <div>
    <ButtonEntry></ButtonEntry>
    <div class="chat-container" v-if="$store.state.embed.toggleChat">
      <ChatHead></ChatHead>
      <div class="chat-body">
        <BotOptions></BotOptions>
        <Messages></Messages>
        <div
          v-if="$store.state.embed.toggleLiveChat"
          @click="toggleLiveChat"
          id="close-messages-btn"
        >
          Close chat
        </div>
      </div>
      <div class="chat-actions" v-if="$store.state.embed.toggleLiveChat">
        <LoginEmail></LoginEmail>
        <div class="message-action" v-if="$store.state.embed.isLoggedIn">
          <ActionMessage></ActionMessage>
          <ActionButton></ActionButton>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ButtonEntry from '~/components/embed/ButtonEntry'
import ChatHead from '~/components/embed/ChatHead'
import BotOptions from '~/components/embed/BotOptions'
import Messages from '~/components/embed/Messages'
import LoginEmail from '~/components/embed/LoginEmail'
import ActionMessage from '~/components/embed/ActionMessage'
import ActionButton from '~/components/embed/ActionButton'

export default {
  layout: 'embed',
  components: {
    ButtonEntry,
    ChatHead,
    BotOptions,
    Messages,
    LoginEmail,
    ActionMessage,
    ActionButton,
  },
  methods: {
    toggleLiveChat() {
      this.$store.commit('embed/toggleLiveChat')
    }
  },
  fetch() {
    this.$store
      .dispatch('embed/getAppSettings', { hash: this.$route.params.hash })
      .then(() => {})
      .catch(() => {})
  },
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  font-family: 'Arial';
}
html {
  overflow: hidden;
}
body {
  height: 100vh;
}
#button {
  padding: 36px;
  background-color: transparent;
  position: absolute;
  bottom: 15px;
  right: 15px;
  border: 1px solid black;
  display: block;
  border-radius: 50%;
}
.chat-container {
  height: 100vh;
  background-color: #ffffff;
  max-width: 320px;
  width: 100%;
}
#close-chat {
  padding: 15px;
  font-weight: 600;
  color: #737373;
  position: absolute;
  right: 0;
  background-color: transparent;
}
.head-title {
  padding: 15px;
  font-size: 12px;
  font-weight: 600;
  color: #737373;
}
.title-highlight {
  color: #438fde;
  text-decoration: none;
}
/* Chat Body */
.chat-body {
  border: 1px solid #dadada;
  min-height: 73vh;
  max-height: 73vh;
}
#close-messages-btn {
  font-size: 14px;
  font-weight: 600;
  color: #737373;
  text-align: center;
  padding: 5px;
}
.bot-options {
  text-align: center;
  padding-top: 5px;
}
.option-btn {
  width: 250px;
  padding: 9px;
  margin: 5px auto;
  border: 1px solid #d0d0d0;
  border-radius: 5px;
  font-size: 12px;
}
#messages {
  padding-top: 5px;
  overflow-y: auto;
  height: 68vh;
}
.msg-bubble {
  font-size: 14px;
  padding: 12px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  margin-bottom: 5px;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}
.msg-bubble-right {
  float: right;
  background: #add8e6;
  margin-right: 10px;
  margin-left: 50px;
  border-bottom-left-radius: 20px;
}
.msg-bubble-left {
  float: left;
  background: #dcdada;
  margin-right: 50px;
  margin-left: 10px;
  border-bottom-right-radius: 20px;
}

/* Chat Actions */
#login-email {
  padding: 21px 15px;
  display: flex;
  flex-direction: column;
  width: 100%;
}
#input-email {
  padding: 15px;
  width: 100%;
  border: 1px solid #d0d0d0;
  border-radius: 5px;
  margin-bottom: 5px;
}
#login {
  padding: 4px;
  border: 1px solid #d0d0d0;
  border-radius: 5px;
}
.chat-actions {
  /* position: absolute;
  bottom: 0;
  display: flex; */
  width: 100%;
}
.action-button {
  align-self: center;
  margin-top: 8px;
}
.message-action {
  display: flex;
  flex-direction: column;
  padding: 10px;
  width: 100%;
}
.action-message {
  width: 100%;
  border: 1px solid #d0d0d0;
}
#message {
  width: 100%;
  padding: 8px;
}
</style>