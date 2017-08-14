<template>
  <div>
    <h1> Message </h1>
    <message id="0" :is-self-authored="true" text="Message 1" :date="new Date()"/>
    <message id="1" text="Message 2" :date="new Date()"/>
  </div>
</template>

<script>
import Message from "@/components/chat/Message"

export default {
  components: {
    Message
  }
}
</script>