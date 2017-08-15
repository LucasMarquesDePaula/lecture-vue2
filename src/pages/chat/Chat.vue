<template>
  <div>
    <h1>Chat</h1>
    <div class="row">
      <div class="col-xs-6">
        <chat :messages="messages" :user="authors[0]" @submit="addMessage"></chat>
      </div>
      <div class="col-xs-6">
        <chat :messages="messages" :user="authors[1]" @submit="addMessage"></chat>
      </div>
    </div>
  </div>
</template>

<script>
import Chat from "@/components/chat/Chat"
import uniqueId from "lodash/uniqueId"

const authors = [
  { id: uniqueId(), name: "David Bowie", image: require("./assets/user-0.png"), background: require("./assets/background-0.jpg") },
  { id: uniqueId(), name: "Elvis Presley", image: require("./assets/user-1.png"), background: require("./assets/background-1.jpg") }
]

const messages = []

export default {
  components: {
    Chat
  },
  data() {
    return {
      authors,
      messages
    }
  },
  methods: {
    addMessage(message) {
      this.messages.push(message)
    }
  }
}
</script>

<style>

</style>
