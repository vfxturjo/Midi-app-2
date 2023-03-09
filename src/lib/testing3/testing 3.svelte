<script lang="ts">
let untilBin = 150;
let threshold = 44;
</script>

<label for="a">Frequency Range </label>
<input
  type="range"
  name="slide"
  id="slider"
  value="50"
  onchange="{()=> {untilBin = o3 * int(value)}}"
/>

<label for="b">Threshold </label>
<input type="range" id="tresh" value="20" onchange="threshold = 2.4 * value" />

<canvas></canvas>
