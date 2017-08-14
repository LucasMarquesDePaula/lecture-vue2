import namespace from "./namespace"

// Messages Module
export const messages = namespace("messages", {
  getters: ["get"],
  actions: ["delete"],
  mutations: [
    "POST",
    "DELETE"
  ]
})
