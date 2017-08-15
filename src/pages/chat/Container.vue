<template>
  <div>
    <h1>Container</h1>
    <container :messages="messages" :user="authors[0]"></container>
  </div>
</template>

<script>
import Container from "@/components/chat/Container"
import uniqueId from "lodash/uniqueId"


const authors = [
  { id: uniqueId(), name: "Author 0", image: require("./assets/user-anonymous.png") },
  { id: uniqueId(), name: "Author 1", image: require("./assets/user-anonymous.png") }
]

const messages = [
  { id: uniqueId(), date: new Date(), text: "Lorem ipsum dolor sit amet", author: authors[0] },
  { id: uniqueId(), date: new Date(), text: "Lorem ipsum dolor sit amet", author: authors[1] },
  { id: uniqueId(), date: new Date(), text: "consectetur adipiscing elit, sed do eiusmod tempor incididunt", author: authors[0] },
  { id: uniqueId(), date: new Date(), text: "consectetur adipiscing elit, sed do eiusmod tempor incididunt", author: authors[1] }
]

export default {
  components: {
    Container
  },
  data() {
    return {
      authors,
      messages
    }
  }
}
</script>