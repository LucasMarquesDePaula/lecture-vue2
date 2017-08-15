<template>
  <div class="message" :class="clazz">
    <img class="profile" :src="author.image" />
    <div class="inner">
      <span class="hide">author ID: {{author.id}}</span>
      <strong class="author">{{author.name}}</strong>
      <span class="date">{{date | date}}</span>
      <p class="text">{{text}}</p>
    </div>
  </div>
</template>

<script>
import moment from "moment"

export default {
  props: {
    author: {
      type: Object,
      default() {
        return {
          name: "Anonymous",
          image: require("./assets/user-anonymous.png")
        }
      }
    },
    date: {
      type: Date,
      required: true
    },
    isSelfAuthored: {
      type: Boolean,
      default: false
    },
    text: {
      type: String,
      required: true
    }
  },
  computed: {
    clazz() {
      return {
        "self-authored": this.isSelfAuthored
      }
    }
  },
  filters: {
    date(date) {
      return moment(date).format("DD/MM/YYYY HH:mm:ss")
    }
  }
}
</script>

<style lang="scss" scoped>
$profile-size: 64px;
$box-shadow: 0 1px 2px rgba(0, 0, 0, .2);

.message {
  display: block;
  margin: 12px auto;
  width: 100%;

  .inner {
    background: #FFFFFF;
    border-radius: 5px;
    box-shadow: $box-shadow;
    margin-left: $profile-size;
    min-height: $profile-size;
    padding: 6px 12px;
    width: calc(100% - 2 * #{$profile-size});
  }

  .author {
    display: inline;
    font-size: 1em;
  }

  .date {
    font-size: 0.8em;
  }

  .text {
    font-size: 1.2em;
    text-overflow: ellipsis;
  }

  .profile {
    background-color: #FFFFFF;
    box-shadow: $box-shadow;
    border-radius: 50% 0 0 50%;
    float: left !important;
    height: $profile-size;
    padding: 4px;
  }

  &.self-authored {
    .inner {
      background: #C8E6C9;
    }

    .profile {
      display: none;
      border-radius: 0 50% 50% 0;
      background-color: #C8E6C9;
      float: right !important;
    }
  }
}
</style>
