import { hash } from '~/assets/utils'

export const state = () => ({
  channelName: '',
  isLoggedIn: false,
  notifSnackbar: {
    show: false,
    timeout: 5000,
    color: 'primary',
    text: '',
  },
  rand_id: 0,
  settings: {},
  toggleBotOptions: true,
  toggleChat: false,
  toggleLiveChat: false,
})

export const actions = {
  getAppSettings({ commit }, payload) {
    return new Promise((resolve, reject) => {
      this.$axios({
        method: 'POST',
        url: `${process.env.NUXT_ENV_API_URL}/embed/app-settings`,
        data: {
          hash: payload.hash,
        },
      })
        .then((res) => {
          commit('setAppSettings', res.data)
          resolve()
        })
        .catch((err) => {
          reject(err.response.data)
        })
    })
  },
  login({ commit, state }, payload) {
    return new Promise((resolve, reject) => {
      this.$axios({
        method: 'POST',
        url: `${process.env.NUXT_ENV_API_URL}/embed/login`,
        data: {
          email: payload.email,
          chat_app_hash: payload.hash,
          rand_id: state.rand_id
        },
      })
        .then((res) => {
          commit('login', res.data)
          resolve()
        })
        .catch((err) => {
          reject(err.response.data)
        })
    })
  },
}

export const mutations = {
  notifSnackbar(state, data) {
    state.notifSnackbar.show =
      typeof data.show !== 'undefined' ? data.show : false
    state.notifSnackbar.timeout =
      typeof data.timeout !== 'undefined' ? data.timeout : 5000
    state.notifSnackbar.text = typeof data.text !== 'undefined' ? data.text : ''
    state.notifSnackbar.color =
      typeof data.color !== 'undefined' ? data.color : 'primary'
  },
  setAppSettings(state, data) {
    state.settings = data.app_settings
    state.rand_id = data.rand_id
  },
  toggleChat(state) {
    state.toggleChat = !state.toggleChat
  },
  toggleLiveChat(state) {
    state.toggleLiveChat = !state.toggleLiveChat
  },
  login(state, data) {
    state.isLoggedIn = true
    state.channelName = data.channel_name
    localStorage.setItem(hash('channelName'), hash(data.channel_name))
    localStorage.setItem(hash('isLoggedIn'), true)
  },
  setStatus(state) {
    state.isLoggedIn = localStorage.getItem(hash('isLoggedIn'))
    state.channelName = localStorage.getItem(hash('channelName'))
  }
}
