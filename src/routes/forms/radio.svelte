<script>
  import {
    Radio,
    Table,
    TableRow,
    TableHeader,
    TableHeaderCell,
    TableBody,
    TableCell,
    Panel,
  } from "svelte-toolkit";

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
    <Table>
      <TableHeader>
        <TableRow>
          <TableHeaderCell>Name</TableHeaderCell>
          <TableHeaderCell>Default</TableHeaderCell>
          <TableHeaderCell>Description</TableHeaderCell>
          <TableHeaderCell>Change</TableHeaderCell>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell>name</TableCell>
          <td />
          <TableCell>The name of the group field selected with the radio</TableCell>
          <TableCell>
            <input type="text" bind:value={name} />
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>type</TableCell>
          <td />
          <TableCell>primary, info, success, warning, or danger</TableCell>
          <TableCell>
            <select bind:value={type}>
              <option>-</option>
              <option>primary</option>
              <option>info</option>
              <option>success</option>
              <option>warning</option>
              <option>danger</option>
            </select>
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>group</TableCell>
          <td />
          <TableCell>The value of the group field selected with the radio</TableCell>
          <TableCell>
            <select bind:value={group}>
              <option>-</option>
              <option>{value}</option>
              {#each $items as item}
                <option>{item.name}</option>
              {/each}
            </select>
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>value</TableCell>
          <td />
          <TableCell>The group value to set when this radio is selected</TableCell>
          <TableCell>
            <input type="text" bind:value />
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>label</TableCell>
          <td />
          <TableCell>The text label to display next to the radio</TableCell>
          <TableCell>
            <input type="text" bind:value={label} />
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  </div>

  <h2>Code</h2>
  <div class="block">
    <Panel>
      <pre>{exampleCode}</pre>
    </Panel>
  </div>
</div>
