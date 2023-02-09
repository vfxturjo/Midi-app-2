<script>
import HSplitPane from "../../core/Layout/HSplitPane.svelte";
import Slider from "@smui/slider";
import FormField from "@smui/form-field";
import Button from "@smui/button";

let value = 50;
let leftPaneSize = 50;
let seperatorWidth = 5;
</script>

<h1>H Splite Pane Default</h1>
<div class="bg-red-400 w-[300px] h-[300px]">
  <HSplitPane
    minLeftPaneSize="50px"
    minRightPaneSize="50px"
    separatorWidth="{seperatorWidth}"
  >
    <left slot="left"> Left Pane </left>
    <right slot="right"> Right Pane </right>
  </HSplitPane>
</div>

<div class="w-[50%]">
  <FormField align="end" style="display: flex;">
    <Slider style="flex-grow: 1;" bind:value="{value}" />
    <span
      slot="label"
      style="padding-right: 12px; width: max-content; display: block;"
    >
      Amount of Wonder
    </span>
  </FormField>

  {#if value == 0}
    <p>No wonder.</p>
  {/if}

  <div>
    <Button on:click="{() => (seperatorWidth = seperatorWidth == 30 ? 5 : 30)}"
      >Maximum Wonder!</Button
    >
  </div>

  <pre class="status">Value: {value}</pre>
</div>

<style>
left,
right {
  width: 100%;
  height: 100%;
  display: block;
  text-align: center;
}
left {
  background-color: coral;
}
right {
  background-color: cornflowerblue;
}
</style>
