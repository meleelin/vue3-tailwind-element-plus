import { defineStore } from "pinia";

export const useCounterStore = defineStore("counter", {
  state: () => ({
    counter: 3,
  }),
  getters: {
    doubleCounter: (state) => state.counter * 2,
  },
});
