<script>
import cssVars from "svelte-css-vars";
import { Pane, Splitpanes } from "svelte-splitpanes";

$: styleVars = {
  layOutEditorWidth: 10,
};
</script>

<Splitpanes>
  <Pane>aaaaaa</Pane>
  <Pane>
    <Splitpanes horizontal>
      <Pane>aaaaaa</Pane>
      <Pane>aaaaaa</Pane>
    </Splitpanes>
  </Pane>
  <Pane>aaaaaa</Pane>
</Splitpanes>
