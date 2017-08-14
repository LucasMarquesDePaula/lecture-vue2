<template>
  <div class="container" :class="clazz">
    <div class="row inner">
      <div v-for="message in messages" class="col-md-12 col-xs-12" :key="message.id">
        <vl-message :date="message.date" :author="message.author" :self-authored="selfAuthored(message)" @remove="remove(message)"> </message>
      </div>
    </div>
  </div>
</template>

<script>
import Message from "./Message.vue"
export default {
  name: "vl-container",
  props: {
    messages: {
      type: Array,
      default: []
    }
  },
  components: {
    [Message.name]: Message
  },
  computed() {
    clazz(){
      return {
        "no-messages": !this.messages.length
      }
    }
  },
  methods: {
    selfAuthored(message) {
      return message.author.id === this.user.id
    },
    remove(message) {
      this.$emmit("remove", message)
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../style/config";

$container-ignorespace: ($top-bar-height + $bottom-bar-height);

.container {
  background: #e5e5e5;
  margin: 0;
  height: calc(100% - #{$container-ignorespace});
  overflow-x: hidden;
  padding: 0 10px 10px;

  &::-webkit-scrollbar-track {
    background-color: #f5f5f5;
    box-shadow: inset 0 0 6px rgba(0, 0, 0, .3);
  }

  &::-webkit-scrollbar {
    background-color: #f5f5f5;
    width: 12px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #555;
    box-shadow: inset 0 0 6px rgba(0, 0, 0, .3);
  }

  .inner {
    display: flex;
    overflow: hidden;
    padding: 10px;
  }
}
</style>
