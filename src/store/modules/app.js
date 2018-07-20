const state = {
  initialized: false,
  pending: false,
  toast: {
    show: false,
    color: null,
    timeout: null,
    message: null
  }
}

const mutations = {
  setInitialized(state, value) {
    state.initialized = value
  },
  setPending(state, value) {
    state.pending = value
  },
  showToast(state, {color, timeout, message}) {
    state.toast.show = true
    state.toast.color = color
    state.toast.timeout = timeout
    state.toast.message = message
  },
  closeToast(state) {
    state.toast.show = false
    state.toast.color = null
    state.toast.timeout = null
    state.toast.message = null
  }
}

export default {
  state,
  mutations
}
