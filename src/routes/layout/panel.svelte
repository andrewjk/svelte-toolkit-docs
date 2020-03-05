<script>
  import { Panel } from "svelte-toolkit";

  let type = "";

  $: exampleCode = `
import { Panel } from "svelte-toolkit";

<Panel type="${type}">This is a panel.</Panel>`.trim();
</script>

<svelte:head>
  <title>Panel | Svelte Toolkit</title>
</svelte:head>

<div class="container">
  <h1>Panel</h1>
  <p>
    The panel can be used to group elements together. By default, the panel has
    a white background, but this can be changed to different colors.
  </p>

  <h2>Demo</h2>
  <div class="block">
    <Panel {type}>This is a panel.</Panel>
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
          <td>type</td>
          <td>-</td>
          <td>
            transparent, light, dark, primary, info, success, warning, or danger
          </td>
          <td>
            <select bind:value={type}>
              <option>-</option>
              <option>transparent</option>
              <option>light</option>
              <option>dark</option>
              <option>primary</option>
              <option>info</option>
              <option>success</option>
              <option>warning</option>
              <option>danger</option>
            </select>
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
