import { mount } from "vue-test-utils"
import HelloComponent from "@components/Hello.component.vue"

describe("ClassComponent.test.js", () => {
  let wrapper: any

  beforeEach(() => {
    wrapper = mount(HelloComponent, {
      data: {
        message: "Hello world"
      },
      propsData: {
        name: "test-name"
      }
    })
  })

  it(".message = 'Hello world'", () => {
    expect(wrapper.vm.message).toEqual("Hello world")
  })

  it(".name = '!'", () => {
    expect(wrapper.vm.name).toEqual("!")
  })

  it("updates the .textContent to 'foo!'", done => {
    wrapper.vm.message = "foo"

    // vuejs updates the dom asynchronously
    // wait for the nextTick callback before running the test
    wrapper.vm.$nextTick(() => {
      try {
        expect(wrapper.text()).toBe("foo!")
        done()
      } catch (err) {
        done.fail(err)
      }
    })
  })

  it("has the expected html structure", () => {
    expect(wrapper.vm.$el).toMatchSnapshot()
  })
})
