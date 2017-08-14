module.exports = {
  component: require("./App"),
  install(Vue) {
    Vue.component("App", module.exports.component)
  }
}
