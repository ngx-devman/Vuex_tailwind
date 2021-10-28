import { createStore } from 'vuex'
import { tabItemData, userAuthData } from '@/components/mockData/mockData'

export default createStore({
  state: {
    email: userAuthData.email,
    password: userAuthData.password,
    isAuth: false,
    tabData: tabItemData
  },
  getters: {
    isAuth: state => state.isAuth,
    emTabItems: state => state.tabData.tabsItems_1,
    deTabItems: state => state.tabData.tabsItems_2
  },
  mutations: {
    setAuth (state, payload) {
      state.isAuth = payload
    }
  },
  actions: {
    login ({ state, commit }, user) {
      if (user.email === state.email && user.password === state.password) {
        console.log(this.state.tabData)
        commit('setAuth', true)
        return true
      } else {
        return false
      }
    },
    logout ({ commit }) {
      commit('setAuth', false)
    }
  },
  modules: {
  }
})
