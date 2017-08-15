<template>
  <div id="app">
    {{ message }}
  </div>
</template>
<script>
import Vue from "vue"
new Vue({
  el: "#app",
  data: {
    message: "Hello Vue!"
  }
})
</script>
