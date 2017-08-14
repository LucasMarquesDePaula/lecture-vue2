import Vue from "vue"
import Vuex from "vuex"

// Separate Module States
import messages from "./modules/messages/store"

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    messages
  }
})
