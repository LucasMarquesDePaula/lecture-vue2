<template>
  <div class="chat row" :class="clazz">
    <div class="panel">
      <div class="panel-heading">
        <top-bar :is-minimized="isMinimized" :title="user.name" @toggle="toggle"></top-bar>
      </div>
      <div class="panel-body">
        <container :messages="messages" :user="user" :background="user.background"></container>
      </div>
      <div class="panel-footer">
        <bottom-bar @submit="submit"></bottom-bar>
      </div>
    </div>
  </div>
</template>

<script>
import BottomBar from "./BottomBar"
import Container from "./Container"
import TopBar from "./TopBar"

export default {
  components: {
    BottomBar, Container, TopBar
  },
  props: {
    messages: {
      type: Array,
      default() {
        return []
      }
    },
    user: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      isMinimized: false
    }
  },
  computed: {
    clazz() {
      return {
        minimized: this.isMinimized
      }
    }
  },
  methods: {
    toggle() {
      this.isMinimized = !this.isMinimized
    },
    submit(text) {
      this.$emit("submit", { author: this.user, date: new Date(), text: text })
    }
  }
}
</script>

<style lang="scss" scoped>
.chat {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;

  .col-xs-12 .col-md-12 {
    padding: 0;
    height: 100%;
  }

  .panel {
    border: 0;
    border-radius: 5px 5px 0 0;
    margin-bottom: 0;
    height: 100%;
    >* {
      padding: 0;
    }
  }

  &.minimized {
    .panel-body,
    .panel-footer {
      display: none;
    }
  }
}
</style>
