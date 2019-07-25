<script>
  import { Palette } from "svelte-toolkit";

  let value = "green";

  $: exampleCode = `
import { Palette } from "svelte-toolkit";

<Palette value="${value}"`.trim();
</script>

<svelte:head>
  <title>Palette | Svelte Toolkit</title>
</svelte:head>

<div class="container">
  <h2>Palette</h2>
  <p>A palette that you can use to choose a color.</p>

  <h3>Demo</h3>
  <div class="block">
    <Palette bind:value />
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
          <td>
            the value of the color that is selected, which can be hex, rgb() or
            a named CSS color
          </td>
          <td>
            <input type="text" bind:value />
          </td>
        </tr>
        <tr>
          <td>standardColors</td>
          <td>an array of generic standard colors</td>
          <td>
            you can pass in an array of custom standard colors that the user can
            select
          </td>
          <td />
        </tr>
      </tbody>
    </table>
  </div>

  <h3>Code</h3>
  <div class="block">
    <pre>{exampleCode}</pre>
  </div>
</div>
