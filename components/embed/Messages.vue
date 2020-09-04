<template>
  <div 
    v-if="$store.state.embed.toggleLiveChat && $store.state.embed.isLoggedIn" 
    id="messages"
  >
    <div class="msg-bubble msg-bubble-left">Good day! How may I help you?</div>
    <div class="msg-bubble msg-bubble-right">Hi! I am lost. I am looking for the pricing plans.</div>
    <div class="msg-bubble msg-bubble-right">Could you point me to where it is located?</div>
    <div class="msg-bubble msg-bubble-left">Sure! Just look at the top right corner of the page and click pricing plans.</div>
    <div class="msg-bubble msg-bubble-left">We have different pricing tiers for different types of usage.</div>
    <div class="msg-bubble msg-bubble-left">What do you intend to use it for?</div>
    <div class="msg-bubble msg-bubble-right">It is mainly for my employees. They are having trouble with our current system.</div>
    <div class="msg-bubble msg-bubble-left">How big is the user base?</div>
    <div class="msg-bubble msg-bubble-right">My company has around 500 employees.</div>
    <div class="msg-bubble msg-bubble-left">Does your company also upload files? And what types of files?</div>
    <div class="msg-bubble msg-bubble-right">Yes,we do. Mostly PDF and Excel sheets. Around 3 files per person per day.</div>
    <div class="msg-bubble msg-bubble-left">Great! Basic plan suits your company's needs. It offers 700 seats. In case your company grows more than that, upgrading would be easy.</div>
  </div>
</template>

<script>
export default {
  
}
</script>

<style>

</style>