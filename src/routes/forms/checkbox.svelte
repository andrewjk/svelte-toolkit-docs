<script>
  import { CheckBox } from "svelte-toolkit";

  let type = "";
  let name = "field1";
  let label = "Please tick the box";
  let checked = false;

  $: exampleCode = `
import { CheckBox } from "svelte-toolkit";

<CheckBox type="${type}" name="${name}" label="${label}" bind:checked />`.trim();
</script>

<svelte:head>
  <title>CheckBox | Svelte Toolkit</title>
</svelte:head>

<div class="container">
  <h1>CheckBox</h1>
  <p>A box that can be ticked.</p>

  <h2>Demo</h2>
  <div class="block">
    <CheckBox {type} {name} {label} bind:checked />
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
          <td>name</td>
          <td />
          <td>The name of the field entered into the checkbox</td>
          <td>
            <input type="text" bind:value={name} />
          </td>
        </tr>
        <tr>
          <td>type</td>
          <td />
          <td>primary, info, success, warning, or danger</td>
          <td>
            <select bind:value={type}>
              <option>-</option>
              <option>primary</option>
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
          <td>group</td>
          <td />
          <td>
            The value of the group field selected with the checkbox when there
            are multiple checkboxes
          </td>
          <td />
        </tr>
        <tr>
          <td>value</td>
          <td />
          <td>
            The group value to set when this checkbox is selected and there are
            multiple checkboxes
          </td>
          <td />
        </tr>
        <tr>
          <td>label</td>
          <td />
          <td>The text label to display next to the checkbox</td>
          <td>
            <input type="text" bind:value={label} />
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
