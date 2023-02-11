<script>
export let props = {
  color: "red",
};

console.log(props);
</script>

<div style="background-color: {props.color};">OOPS! SOME ERROR HAPPENED!</div>
