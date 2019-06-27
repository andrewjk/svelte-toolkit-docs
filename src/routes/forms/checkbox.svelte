<script>
  import { CheckBox } from "svelte-toolkit";

  let type = "";
  let name = "field1";
  let checked = "";
  let label = "Please tick the box";

  $: exampleCode = `<CheckBox type="${type}" name="${name}" label="${label}" bind:checked />`;
</script>

<svelte:head>
  <title>CheckBox | Svelte Toolkit</title>
</svelte:head>

<div class="container">
  <h2>CheckBox</h2>
  <p>A box that can be ticked.</p>

  <h3>Demo</h3>
  <div class="block">
    <CheckBox {type} {name} {label} bind:checked />
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
          <td>The name of the field entered into the checkbox</td>
          <td>
            <input type="text" bind:value={name} />
          </td>
        </tr>
        <tr>
          <td>type</td>
          <td></td>
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
          <td>checked</td>
          <td />
          <td>Whether the checkbox is checked</td>
          <td>
            <input type="checkbox" bind:checked />
          </td>
        </tr>
        <tr>
          <td>label</td>
          <td />
          <td>
            The text label to display next to the checkbox
          </td>
          <td>
            <input type="text" bind:value={label} />
          </td>
        </tr>
      </tbody>
    </table>
  </div>

  <h3>Code</h3>
  <div class="block">
    <pre>{exampleCode} </pre>
  </div>
</div>
