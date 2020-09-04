export const state = () => ({
  settings: {},
  toggleLiveChat: false,
  isLoggedIn: false,
  toggleBotOptions: true,
  toggleChat: false,
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
  login({ commit }) {
    return new Promise((resolve, reject) => {
      commit('login')
      resolve()
    })
  }
}

export const mutations = {
  setAppSettings(state, data) {
    state.settings = data
  },
  toggleChat(state) {
    state.toggleChat = !state.toggleChat
  },
  toggleLiveChat(state) {
    state.toggleLiveChat = !state.toggleLiveChat
  },
  login(state) {
    state.isLoggedIn = true
    // localStorage.setItem('larachatisLoggedIn', true)
  }
}
