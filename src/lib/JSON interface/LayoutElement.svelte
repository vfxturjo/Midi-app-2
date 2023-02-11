<script>
export let passedData = {
  Machine: true,
  thisObject: "Machine_helloWorld",
  props: {
    color,
  },
};
</script>

<div class="fullsize bg-red-600">
  {#await layoutComponents[component]["component"]()}
    <div class="fullcenter bg-gray-300">
      <p class="text-2xl">loading...</p>
    </div>
  {:then module}
    <div class="fullsize">
      <svelte:component this="{module.default}" />
    </div>
  {:catch error}
    <p>
      oops! error occured... <br />
      add reset button? or let user choose another laoutComponent?
    </p>
  {/await}
</div>
