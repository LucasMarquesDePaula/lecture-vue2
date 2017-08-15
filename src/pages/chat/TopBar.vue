<template>
  <div>
    <h1>Top Bar</h1>
    <top-bar title="Title"/>
  </div>
</template>

<script>
import TopBar from "@/components/chat/TopBar"

export default {
  components: {
    TopBar
  },
  data() {
    return {
      messages: []
    }
  },
  methods: {
    addMessage(text) {
      return this.messages.push({ text: text, date: Date() })
    }
  },
  filters: {
    message(message) {
      return `${message.text}`
    }
  }
}
</script>