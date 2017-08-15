<template>
  <div class="top-bar">
    <div class="col-md-8 col-xs-8">
      <h3 class="panel-title">
        <span class="fa fa-comment-o"></span>
        {{title}}
      </h3>
    </div>
    <div class="col-md-4 col-xs-4 actions">
      <span class="fa" :class="toggle.class" @click="toggle.click"></span>
      <span class="fa fa-close" @click="close"></span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String
    }
  },
  methods: {
    close() {
      this.$emit("close")
    }
  },
  computed: {
    toggle() {
      const toggle = {}

      // Class
      toggle.class = {
        "fa-window-minimize": !this.isMinimized,
        "fa-window-maximize": this.isMinimized
      }

      // Click
      toggle.click = () => {
        this.$emit("toggle")
      }

      return toggle
    }
  }
}
</script>

<style lang="scss" scoped>
@import "./style/config";

.top-bar {
  background: #666;
  color: #fff;
  overflow: hidden;
  padding: 10px 5px 30px 5px;
  position: relative;
  height: $top-bar-height;
  max-height: $top-bar-height;
  border-radius: 0;

  .actions {
    text-align: right;
    >* {
      margin: 0px 4px;
    }
  }
}
</style>
