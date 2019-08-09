<script>
  import { ColorPicker } from "svelte-toolkit";

  let value = null;
  let placeholder = "";

  $: exampleCode = `
import { ColorPicker } from "svelte-toolkit";

<ColorPicker value={${value}} placeholder="${placeholder}" />`.trim();
</script>

<svelte:head>
  <title>Color Picker | Svelte Toolkit</title>
</svelte:head>

<div class="container">
  <h1>Color Picker</h1>
  <p>A dropdown color picker that can be used to enter or select a color.</p>

  <h2>Demo</h2>
  <div class="block">
    <ColorPicker bind:value {placeholder} />
  </div>

  <h2>Properties</h2>
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
        <tr>
          <td>placeholder</td>
          <td />
          <td>Placeholder text to show when the input is empty.</td>
          <td>
            <input type="text" bind:value={placeholder} />
          </td>
        </tr>
      </tbody>
    </table>
  </div>

  <h2>Code</h2>
  <div class="block">
    <pre>{exampleCode}</pre>
  </div>
</div>
