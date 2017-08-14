<template>
  <div class="chat row col-xs-5 col-md-3" :class="clazz">
    <div class="col-xs-12 col-md-12">
      <div class="panel">
        <div class="panel-heading">
          <top-bar :is-minimized="isMinimized" @toogle="toogle"></top-bar>
        </div>
        <div class="panel-body">
          <container></container>
        </div>
        <div class="panel-footer">
          <bottom-bar @submit="addMessage"></bottom-bar>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BottomBar from "./BottomBar"
import Container from "./Container"
import TopBar from "./TopBar"

export default {
  name: "chat",
  components: {
    BottomBar, Container, TopBar
  }
  props: {
    isMinimized: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {

    }
  },
  methods: {
    class() {
      return {
        minimized: this.isMinimized,
        [this.theme]: true
      }
    },
    toogle() {
      this.isMinimized = !this.isMinimized
    },
    addMessage(message) {
      this.$emit("addMessage", message)
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
  }
}
</style>
