<template>
  <v-container>
    <v-snackbar
      class="embed-notifSnackbar"
      v-model="show"
      :timeout="timeout"
      :color="color"
      :multi-line="true"
      :top="true"
      min-width="150"
      max-width="150"
    >
      {{ text }}
      <template v-slot:action="{ attrs }">
        <v-btn dark text v-bind="attrs" @click="hideSnackbar">
          Close
        </v-btn>
      </template>
    </v-snackbar>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    show: false,
    timeout: '',
    color: '',
    text: '',
  }),
  methods: {
    hideSnackbar() {
      this.show = false
    },
  },
  created() {
    this.$store.subscribe((mutation, state) => {
      if (mutation.type === 'embed/notifSnackbar') {
        console.log('subscribed!')
        this.text = state.embed.notifSnackbar.text
        this.timeout = state.embed.notifSnackbar.timeout
        this.color = state.embed.notifSnackbar.color
        this.show = true
      }
    })
  }
}
</script>

<style>
.embed-notifSnackbar > div {
  min-width: 286px;
}
</style>
