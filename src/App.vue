<template>
  <div id="wrapper" :class="clazz">
    <!-- Sidebar -->
    <nav id="sidebar-wrapper">
      <sidebar-nav></sidebar-nav>
    </nav>
    <!-- /#sidebar-wrapper -->
  
    <!-- Page Content -->
    <div id="page-content-wrapper">
      <button type="button" class="btn btn-default" @click="toggle">Toggle</button>
      <div class="container-fluid">
        <div class="row">
          <div class="col-lg-12">
            <router-view></router-view>
          </div>
        </div>
      </div>
    </div>
    <!-- /#page-content-wrapper -->
  </div>
</template>

<script>
import "bootstrap/dist/css/bootstrap.css"
import "font-awesome/css/font-awesome.css"
import "metismenu/dist/metisMenu.min.css"

import SidebarNav from "./SidebarNav"

window.$ = window.jQuery = require("jquery")
require("bootstrap")

export default {
  components: {
    SidebarNav
  },
  data() {
    return {
      toggled: true
    }
  },
  computed: {
    clazz() {
      return {
        toggled: this.toggled
      }
    }
  },
  methods: {
    toggle() {
      this.toggled = !this.toggled
    }
  }
}
</script>

<style lang="scss">
$sidebar-width: 250px;

body {
  overflow-x: hidden;
  background: #e0e0e0;
}

#wrapper {
  -moz-transition: all .5s ease;
  -o-transition: all .5s ease;
  -webkit-transition: all .5s ease;
  padding-left: 0;
  transition: all .5s ease;

  &.toggled {
    padding-left: $sidebar-width;

    #sidebar-wrapper {
      width: $sidebar-width;
    }

    #page-content-wrapper {
      margin-right: - $sidebar-width;
      padding: 15px;
      position: absolute;
      width: calc(100% - #{$sidebar-width});
    }
  }
}

#page-content-wrapper,
#sidebar-wrapper {
  height: 100%;
}

#sidebar-wrapper {
  left: $sidebar-width;
  margin-left: - $sidebar-width;
  -moz-transition: all .5s ease;
  -o-transition: all .5s ease;
  -webkit-transition: all .5s ease;
  background: #000;
  overflow-y: auto;
  position: fixed;
  transition: all .5s ease;
  width: 0;
  z-index: 1000;
}
</style>
