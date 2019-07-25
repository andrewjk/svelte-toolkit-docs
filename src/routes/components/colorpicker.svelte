<script>
  import { ColorPicker } from "svelte-toolkit";

  let value = null;

  $: exampleCode = `
import { ColorPicker } from "svelte-toolkit";

<ColorPicker value={${value}} />`.trim();
</script>

<svelte:head>
  <title>Color Picker | Svelte Toolkit</title>
</svelte:head>

<div class="container">
  <h2>Color Picker</h2>
  <p>A dropdown color picker that can be used to enter or select a color.</p>

  <h3>Demo</h3>
  <div class="block">
    <ColorPicker bind:value />
  </div>

  <h3>Properties</h3>
  <div class="block">
    <table class="table">
      <thead>
        <tr>
          <th>Name</th>
          <th>Default</th>
          <th>Description</th>
          <th>Change</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>value</td>
          <td />
          <td>the selected value</td>
          <td>{value}</td>
        </tr>
      </tbody>
    </table>
  </div>

  <h3>Code</h3>
  <div class="block">
    <pre>{exampleCode}</pre>
  </div>
</div>
