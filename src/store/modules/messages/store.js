import actions from "./actions.js";

import {
  messages
} from "../../utils/types.js";

const state = {
  messages: []
}

const getters = {
  [messages.getters.all]: (state) => {
    return state.messages
  }
}

const mutations = {
  [messages.mutations.INSERT](state, message) {
    return state.messages.push(message)
  },
  [messages.mutations.DELETE](state, id) {
    return state.messages.some((message, index) => {
      if (message.id === id) {
        state.messages.splice(index, 1);
      }
    })
  },
  [messages.mutations.UPDATE](state, message) {
    this[messages.mutations.DELETE](state, message.id)
    return this[messages.mutations.INSERT](state, message.id)
  },
}

const module = {
  state,
  getters,
  mutations,
  actions
}

export default module
