<script>
  import { Number } from "../../../../svelte-toolkit";

  let type = "";
  let name = "field1";
  let value = 0;
  let min = null;
  let max = null;
  let readonly = false;

  $: exampleCode = `
import { Number } from "svelte-toolkit";

<Number type="${type}" name="${name}" min={${min}} max={${max}} readonly={${readonly}} bind:value />`.trim();
</script>

<svelte:head>
  <title>Number | Svelte Toolkit</title>
</svelte:head>

<div class="container">
  <h2>Number</h2>
  <p>A box for entering a number.</p>

  <h3>Demo</h3>
  <div class="block">
    <Number {type} {name} {min} {max} {readonly} bind:value />
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
          <td>name</td>
          <td />
          <td>The name of the field entered into the number</td>
          <td>
            <input type="text" bind:value={name} />
          </td>
        </tr>
        <tr>
          <td>type</td>
          <td />
          <td>info, success, warning, or danger</td>
          <td>
            <select bind:value={type}>
              <option>-</option>
              <option>info</option>
              <option>success</option>
              <option>warning</option>
              <option>danger</option>
            </select>
          </td>
        </tr>
        <tr>
          <td>value</td>
          <td>0</td>
          <td>The number value</td>
          <td>
            <input type="number" bind:value />
          </td>
        </tr>
        <tr>
          <td>min</td>
          <td />
          <td>The minimum allowed number value</td>
          <td>
            <input type="number" bind:value={min} />
          </td>
        </tr>
        <tr>
          <td>max</td>
          <td />
          <td>The maximum allowed number value</td>
          <td>
            <input type="number" bind:value={max} />
          </td>
        </tr>
        <tr>
          <td>readonly</td>
          <td>folse</td>
          <td>Set to true to prevent the field from taking input</td>
          <td>
            <label>
              <input type="checkbox" bind:checked={readonly} />
              Set readonly
            </label>
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
