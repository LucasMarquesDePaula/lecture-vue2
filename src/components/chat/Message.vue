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
  name: "message",
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
.message {
  display: block;

  .inner {
    background: #fff;
    border-radius: 2px;
    box-shadow: 0 1px 2px rgba(0, 0, 0, .2);
    display: inline-block;
    max-width: 100%;
    padding: 10px;
    padding-bottom: 20px;
  }

  .author {
    display: inline;
  }

  .profile {
    height: 46px;
    float: right !important;
  }

  &.self-authored {
    .inner {
      background: #ECEFF1; // float: left !important;
    }

    .author {
      float: left !important;
    }

    .profile {
      float: left !important;
    }
  }


  p {
    font-size: 13px;
    margin: 0 0 .2rem;
  }

  .date {
    color: #ccc;
    font-size: 11px;
  }
}
</style>
