<template>
  <div>
    <bottom-bar @submit="addMessage"></bottom-bar>
    <div>
      <ul class="list-group">
        <li v-for="message in messages" :key="message.id" class="list-group-item">
          {{message | message}}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import BottomBar from "@/components/chat/BottomBar"

export default {
  components: {
    BottomBar
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