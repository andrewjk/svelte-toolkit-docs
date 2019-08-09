<script>
  import { Radio } from "svelte-toolkit";

  let type = "";
  let name = "field1";
  let label = "Crocodile";
  let group = "";
  let value = "Crocodile";

  import { items } from "../../stores/items";

  $: exampleCode = `
import { Radio } from "svelte-toolkit";

<Radio type="${type}" name="${name}" label="${label}" value="${value}" bind:group />`.trim();
</script>

<svelte:head>
  <title>Radio | Svelte Toolkit</title>
</svelte:head>

<div class="container">
  <h1>Radio</h1>
  <p>A radio button for selecting a single value from a group.</p>

  <h2>Demo</h2>
  <div class="block">
    <Radio {type} {name} {label} {value} bind:group />
    {#each $items as item}
      <Radio
        {type}
        {name}
        label={item.name}
        value={item.name}
        bind:group />
    {/each}
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
          <td>The name of the group field selected with the radio</td>
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
          <td>group</td>
          <td />
          <td>The value of the group field selected with the radio</td>
          <td>
            <select bind:value={group}>
              <option>-</option>
              <option>{value}</option>
              {#each $items as item}
                <option>{item.name}</option>
              {/each}
            </select>
          </td>
        </tr>
        <tr>
          <td>value</td>
          <td />
          <td>The group value to set when this radio is selected</td>
          <td>
            <input type="text" bind:value />
          </td>
        </tr>
        <tr>
          <td>label</td>
          <td />
          <td>The text label to display next to the radio</td>
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
