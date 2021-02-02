import StartupError from "@/components/StartupError";
import Vue from "vue";

Vue.mixin({
  computed : {
    $t() { return (key, options) => key; },
  },
});

describe("StartupError.vue", () => {
  it("should render correct contents", () => {
    const vm = new Vue({
      el : document.createElement("div"),
      render : (h) => h(StartupError, {props : {error : "some error"}}),
    });
    expect(vm.$el.querySelector("div").textContent).toEqual("some error");
  });
});
