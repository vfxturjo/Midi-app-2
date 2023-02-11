<script>
export let props = {
  machine: true,
  Name: "error",
  props: {
    color: "blue",
  },
};

let component;

import { machineComponents } from "../../../stores/LayoutSettings";
if (props.machine == true) {
  component = props.Name;
}
</script>

<div class="fullsize">
  {#await machineComponents[component]["component"]()}
    <div class="fullcenter bg-gray-300">
      <p class="text-2xl">loading...</p>
    </div>
  {:then module}
    <div class="fullsize">
      <svelte:component this="{module.default}" props="{props.props}" />
    </div>
  {:catch error}
    <p>
      oops! error occured... <br />
      add reset button? or let user choose another laoutComponent?
    </p>
  {/await}
</div>
