import { persisted } from "svelte-local-storage-store";

export let GUILayoutJSON = persisted("GUILayoutJSON", {
  thisObject: "V-splitter",
  props: {},
  inside: {
    left: {
      thisObject: "oneButton",
      props: {
        color: "blue",
      },
    },
    right: {
      thisObject: "oneButton",
      props: {
        color: "red",
      },
    },
  },
});
