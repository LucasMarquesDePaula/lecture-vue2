import {
  isFunction,
  isString
} from "lodash"

import TopBar from "@/components/chat/TopBar"
import Vue from "vue"

// Extend the component to get the constructor, which we can then initialize directly.
const Constructor = Vue.extend(TopBar)

describe("TopBar", () => {

  describe("Creation", () => {
    it("Without props. Testing default values", () => {
      // Test if on creation the default values are setted
      const vm = new Constructor().$mount()
      it("title", () => {
        expect(vm.$el.textContent).to.be("")
      })
    })

    describe("With props. Testing setted values", () => {

      it("title", () => {
        const title = "Title";
        const vm = new Constructor({
          propsData: {
            title: title
          }
        }).$mount()

        // expect(vm.$el.textContent).to.be(title)
      })
    })

  })

})
