<script>
  import { Select } from "svelte-toolkit";

  let name = "field1";
  let value = "";
  let type = "";
  let placeholder = "";

  import { countries } from "../../stores/countries";

  $: exampleCode = `
import { Select } from "svelte-toolkit";

<Select name="${name}" type="${type}" bind:value placeholder="${placeholder}">
  <option value="">-</option>
  {#each countries as country}
    <option>{country.name}</option>
  {/each}
</Select>`.trim();
</script>

<svelte:head>
  <title>Select | Svelte Toolkit</title>
</svelte:head>

<div class="container">
  <h1>Select</h1>
  <p>A select.</p>

  <h2>Demo</h2>
  <div class="block">
    <Select {name} {type} bind:value {placeholder}>
      <option value="">-</option>
      {#each countries as country}
        <option>{country.name}</option>
      {/each}
    </Select>
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
          <td>The name of the field entered into the textbox</td>
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
          <td>value</td>
          <td />
          <td>The value entered into the textbox</td>
          <td>
            <input type="text" bind:value />
          </td>
        </tr>
        <tr>
          <td>placeholder</td>
          <td />
          <td>Placeholder text to show when the textbox is empty.</td>
          <td>
            <input type="text" bind:value={placeholder} />
          </td>
        </tr>
      </tbody>
    </table>
  </div>

  <h2>Code</h2>
  <div class="block">
    <pre>{exampleCode} </pre>
  </div>
</div>
