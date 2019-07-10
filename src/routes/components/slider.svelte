<script>
  import { Slider } from "svelte-toolkit";

  let value = 50;
  let total = 100;

  $: exampleCode = `<Slider value={${value}} total={${total}} />`;
</script>

<svelte:head>
  <title>Slider | Svelte Toolkit</title>
</svelte:head>

<div class="container">
  <h2>Slider</h2>
  <p>A slider that a user can drag and move to select a value.</p>

  <h3>Demo</h3>
  <div class="block">
    <Slider bind:value bind:total />
    <br />
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
          <td>0</td>
          <td>0 to 100 (or the value of total, below)</td>
          <td>
            <input type="number" bind:value />
          </td>
        </tr>
        <tr>
          <td>total</td>
          <td>100</td>
          <td></td>
          <td>
            <input type="number" bind:value={total} />
          </td>
        </tr>
      </tbody>
    </table>
  </div>

  <h3>Code</h3>
  <div class="block">
    <pre>{exampleCode}</pre>
  </div>
</div>
