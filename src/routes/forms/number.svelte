<script>
  import {
    Number,
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
  let value = null;
  let placeholder = "";
  let min = null;
  let max = null;
  let readonly = false;

  $: exampleCode = `
import { Number } from "svelte-toolkit";

<Number type="${type}" name="${name}" placeholder="${placeholder}" min={${min}} max={${max}} readonly={${readonly}} bind:value />`.trim();
</script>

<svelte:head>
  <title>Number | Svelte Toolkit</title>
</svelte:head>

<div class="container">
  <h1>Number</h1>
  <p>A box for entering a number.</p>

  <h2>Demo</h2>
  <div class="block">
    <Number {type} {name} {placeholder} {min} {max} {readonly} bind:value />
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
          <TableCell>The name of the field entered into the number box</TableCell>
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
          <TableCell>value</TableCell>
          <td />
          <TableCell>The number value</TableCell>
          <TableCell>
            <input type="number" bind:value />
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>placeholder</TableCell>
          <td />
          <TableCell>Placeholder text to show when the textbox is empty.</TableCell>
          <TableCell>
            <input type="text" bind:value={placeholder} />
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>min</TableCell>
          <td />
          <TableCell>The minimum allowed number value</TableCell>
          <TableCell>
            <input type="number" bind:value={min} />
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>max</TableCell>
          <td />
          <TableCell>The maximum allowed number value</TableCell>
          <TableCell>
            <input type="number" bind:value={max} />
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>readonly</TableCell>
          <TableCell>false</TableCell>
          <TableCell>Set to true to prevent the field from taking input</TableCell>
          <TableCell>
            <label>
              <input type="checkbox" bind:checked={readonly} />
              Set readonly
            </label>
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
