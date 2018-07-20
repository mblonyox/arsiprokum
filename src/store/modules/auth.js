const state = {
  user: {
    name: null,
    nip: null,
    idPegawai: null,
    kodeOrganisasi: null,
    namaOrganisasi: null,
    roles: {}
  }
}

const getters = {
  isLoggedIn: ({user}) => !!user.idPegawai,
  isAdmin: ({user: roles}) => !!roles.isAdmin
}

const mutations = {
  setUser(state, user) {
    if (user) {
      state.user.name = user.name
      state.user.nip = user.nip
      state.user.idPegawai = user.idPegawai
      state.kodeOrganisasi = user.kodeOrganisasi
      state.namaOrganisasi = user.namaOrganisasi
      state.roles = user.roles
    } else {
      state.user.name = null
      state.user.nip = null
      state.user.idPegawai = null
      state.kodeOrganisasi = null
      state.namaOrganisasi = null
      state.roles = null
    }
  }
}

export default {
  state,
  getters,
  mutations
}
