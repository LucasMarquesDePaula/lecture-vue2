<template>
  <div class="container row" :class="clazz" :style="style">
    <div v-for="message in messages" class="col-md-12 col-xs-12" :key="message.id">
      <message :date="message.date" :author="message.author" :is-self-authored="isSelfAuthored(message)" :text="message.text"></message>
    </div>
  </div>
</template>

<script>
import Message from "./Message.vue"
export default {
  props: {
    background: {
      type: String,
      default: "#eee"
    },
    messages: {
      type: Array,
      default: []
    },
    user: {
      type: Object,
      required: true
    }
  },
  components: {
    Message
  },
  computed: {
    clazz() {
      return {
        "no-messages": !this.messages.length
      }
    },
    style() {
      return {
        "background-image": `url("${this.background}")`
      }
    }
  },
  methods: {
    isSelfAuthored(message) {
      return message.author.id === this.user.id
    }
  },
  mounted() {
    this.$el.scrollTop = this.$el.scrollHeight
  },
  updated() {
    this.$el.scrollTop = this.$el.scrollHeight
  }
}
</script>

<style lang="scss" scoped>
@import "./style/config";

// $container-ignorespace: ($top-bar-height + $bottom-bar-height);
.container {
  background-color: "#eee";
  background-size: cover;
  margin: 0;
  height: 320px;
  overflow-x: hidden;
  overflow-y: scroll;
  padding: 0 10px 10px;
  width: 100%;

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
}
</style>
