<template>
  <ul class="sidebar-nav">
    <li class="sidebar-brand">
      <a href="#">
        Vue 2
      </a>
    </li>
    <li>
      <a class="has-arrow" href="#">
        Chat
      </a>
      <ul aria-expanded="true">
        <li>
          <a href="#/chat/chat">
            Demo
          </a>
        </li>
        <li>
          <a href="#/chat/bottom-bar">
            Bottom Bar
          </a>
        </li>
        <li>
          <a href="#/chat/container">
            Container
          </a>
        </li>
        <li>
          <a href="#/chat/message">
            Message
          </a>
        </li>
        <li>
          <a href="#/chat/top-bar">
            Top Bar
          </a>
        </li>
      </ul>
    </li>
  </ul>
</template>

<script>
const $ = window.$ = window.jQuery = require("jquery")
require("metismenu")

export default {
  name: "sidebar-nav",
  mounted() {
    $(this.$el).metisMenu()
  }
}
</script>

<style lang="scss">
.sidebar-nav {
  background: #212529;
  display: flex;
  flex-direction: column;
  list-style: none;
  margin: 0;
  padding: 0 10px 0 0;
  position: absolute;
  top: 0;
  width: 250px;

  ul {
    background: #343a40;
    list-style: none;
    margin: 0;
    padding: 0;
    a {
      padding-left: 5px;
    }
    ul a {
      padding-left: 15px;
    }
    ul ul a {
      padding-left: 25px;
    }
  }

  li {
    line-height: 36px;
    text-indent: 10px;

    >li {
      -ms-flex-direction: column;
      -webkit-box-direction: normal;
      -webkit-box-orient: vertical;
      display: flex;
      flex-direction: column;
      position: relative;
    }

    +li,
    &:first-child {
      margin-top: 5px;
    }

    &:last-child {
      margin-bottom: 5px;
    }

    span {
      text-indent: 0;
    }

    a {
      color: #adb5bd;
      display: block;
      outline-width: 0;
      position: relative;
      transition: all .3s ease-out;

      &:hover {
        background: rgba(255, 255, 255, 0.2);
        color: #fff;
        text-decoration: none;
      }

      &:active,
      &:focus {
        text-decoration: none;
      }

      &:hover,
      &:focus,
      &:active {
        background: #0b7285;
        color: #f8f9fa;
        text-decoration: none;
      }
    }
  }
  >.sidebar-brand {
    font-size: 18px;
    height: 65px;
    line-height: 60px;
    a {
      color: #999;
      &:hover {
        background: none;
        color: #fff;
      }
    }
  }
}
</style>
