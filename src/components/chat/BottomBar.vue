<template>
  <div class="bottom-bar">
    <form @submit="submit">
      <div class="input-group">
        <input type="text" class="form-control" placeholder="Write a message" v-model="text" />
        <span class="input-group-btn">
          <button type="submit" class="btn btn-default" :class="{ 'disabled': !text }">
            Send
            <i class="fa fa-paper-plane" aria-hidden="true"></i>
          </button>
        </span>
      </div>
    </form>
  </div>
</template>

<script>
import trim from "lodash/trim"

export default {
  data() {
    return {
      text: ""
    }
  },
  methods: {
    submit() {
      const text = trim(this.text)
      if (text) {
        this.$emit("submit", text)
        this.text = ""
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import "./style/config";

.bottom-bar {
  overflow: hidden;
  padding: 10px;
  position: relative;
  height: $bottom-bar-height;
  max-height: $bottom-bar-height;

  .icon-minimize {
    padding: 2px 10px;
  }

  form {
    display: inherit;

    input {
      // height: calc(#{$bottom-bar-height} - 30px);
    }
  }
}
</style>
