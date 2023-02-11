<script lang="ts">
import Apatotoapp from "./lib/JSON interface/apatoto app.svelte";
import MachineLoader from "./lib/testing/MachineLoader.svelte";
// ! create main interface
// import AvailableEvents from "./lib/Available events/available events.svelte";
</script>

<!-- <main> -->
<main class="h-screen w-screen flex flex-1">
  <Apatotoapp />
  <!-- <MachineLoader /> -->

  <!--  -->
  <!-- <AvailableEvents /> -->

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
