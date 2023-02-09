<script lang="ts">
// ! create main interface
import Testing from "./lib/testing/MachineLoader.svelte";

// import AvailableEvents from "./lib/Available events/available events.svelte";
</script>

<main>
  <!--  -->
  <!-- <AvailableEvents /> -->
  <div class="h-screen w-screen flex flex-1">
    <Testing />
  </div>
  <!-- <CreatingLayout /> -->
  <!--  -->
</main>

<svelte:head>
  <!-- ? the material UI styles here.  -->
  <!-- ! main problem: the animations are slow -->
  <!-- <link rel="stylesheet" href="node_modules/svelte-material-ui/bare.css" /> -->
</svelte:head>

<!-- 
     Material Icons , Roboto and its mono font
    <link
    rel="stylesheet"
    href="https://fonts.googleapis.com/icon?family=Material+Icons"
  />
  <link
    rel="stylesheet"
    href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,600,700"
  />
  <link
    rel="stylesheet"
    href="https://fonts.googleapis.com/css?family=Roboto+Mono"
  />
 -->
